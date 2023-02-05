<template>
    <div class='wall-message'>
        <div class="label">
            <p class="label-list " :class="{ lbselected: nowlabel == -1 }" @click="selectNode(-1)">全部</p>
            <p class="label-list" :class="{ lbselected: nowlabel == index }" v-for="(e, index) in label[ids]" :key="index"
                @click="selectNode(index)">
                {{ e }}
            </p>
        </div>
        <p class="title">{{ wallType[ids].name }}</p>
        <p class="slogan">{{ wallType[ids].slogan }}</p>
        <div class="card"  v-show="ids == 0">
            <NodeCard  class="card-inner" :class="{ 'cardselected' : index == cardSelected}"  @toDetail="selectCard(index)" :note="e" v-for="(e,index) in cards" :key="index"></NodeCard>
        </div>
        <div class="add" :style="{bottom :   '30px'}" @click="addCard" v-show="!isModal">
            <span class="iconfont icon-tianjia" ></span>
        </div>
        <div class="photo" v-show="ids == 1">
            <PhotoCard :photoItem="e" class="photo-card" v-for="(e,index) in cards" :key="index" @toDetail="selectCard(index)"></PhotoCard>
        </div>
        <IModal :title="title" @close="closeModal" :isModal="isModal">
            <NewCard @clickbt="newCard" :id="ids" @closeModal="closeModal" v-if="cardSelected == -1"></NewCard>
            <CardDetail :card="cards[cardSelected]" :id="ids" v-else></CardDetail>
        </IModal>
        <!-- 卡片状态 -->
        <div class="none-msg" v-if="isOk == 0">
            <img :src="none[ids].url" >
            <p>{{ none[ids].msg }}</p>

        </div>
        <div class="loading" v-show="isOk == -1">
            <div id="lottile">
            </div>
            <p>加载中....</p>
        
        </div>
        <p class="bottom-tip" v-show="isOk == 2">
            没有更多....
        </p>
        
        
    </div>
</template>
<script setup>
import { wallType, label, none } from '@/utils/data'
import lottie from 'lottie-web'
import loadings from '@/images/loading.json'
import { findWallPageApi } from '@/api';
import { computed,ref,onMounted,watch,nextTick } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import NodeCard from '../mobile/NodeCard.vue';
import PhotoCard from '../mobile/PhotoCard.vue';
import IModal from '../mobile/IModal.vue';
import NewCard from '../mobile/NewCard.vue';
import CardDetail from '../mobile/CardDetail.vue';
const route = useRoute()
const store = useStore()
onMounted(()=>{
    //监听滚动
    window.addEventListener('scroll',scrollBottom)
    getUser()
    loading()
})
//照片是否开启预览
const view = ref(false)
//弹出层是否关闭
const isModal = ref(false)
//当前选择卡片
const cardSelected = ref(-1)
//用户IP
var user = computed(()=>{
    return store.state.user})
//图片数组
const photoArr = ref([])
//弹出层标题
const title = ref('写留言')
//一次多少条数据
const pagesize = ref(20)
//是否加载中 -1,为加载中，0为没有拿到数据
const isOk = ref(-1)
var isAct = false
//页码
const page = ref(1)
//卡片数据
const cards = ref([])
//选择标签
const nowlabel = ref(-1)
var ids = computed(() => {
    return route.query.id
})
const selectNode = (e) => {
    // 切换标签
    nowlabel.value = e
    cards.value = []
    page.value = 1
    getWallCard(ids.value)
}
const getUser = () => {
    let timer = setInterval(()=>{
        if(store.state.user){
            clearInterval(timer)
            getWallCard(ids.value)
        }
    },10)
}
const getWallCard = (id) => {
    //只有page>0才执行
    isAct = true
    if (page.value > 0){
        isOk.value = -1
        let data = {
            type : id,
            page : page.value,
            pagesize: pagesize.value,
            userId : user.value.id,
            label : nowlabel.value
        }
        findWallPageApi(data).then(res => {
            cards.value = cards.value.concat(res.message)
            // 设置下一次的page
            if(res.message.length){
                page.value++
            }else{
                page.value = 0
            }
            if( cards.value.length > 0){
                    isOk.value = 1
                    if(page.value ==0){
                        isOk.value = 2 
                    }
                }else{
                    isOk.value = 0

                }
            //如果为图片则将图片单独拿出来
            if(id == 1){
                for(let i=0;i<res.message.length;i++){
                    photoArr.value.push(res.message[i].imgurl)
                }
                
            }
            isAct = false
        })
    }
}
const toDetail = (id) =>{
    selectCard(id)
}
const scrollBottom = async () => {
    //距离顶部高度
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    //屏幕高度
    let clientHeight = document.documentElement.clientHeight
    //内容高度
    let scrollHeight = document.documentElement.scrollHeight
    
    if (Math.ceil(scrollTop) + clientHeight >= (scrollHeight - 200) && !isAct){
        // debounce((getWallCard(ids.value)),1000)
        getWallCard(ids.value)
        
    }
}
const photo_view = ref(0)
const selectCard = (e) => {
    title.value = ''
    if (e != cardSelected.value){
        cardSelected.value = e
        isModal.value = true
        if(ids.value == 1){
            photo_view.value = 1 
        }
        return
    }
    cardSelected.value = -1
    isModal.value = false
    if(ids.value == 1){
        view.value = false
    }
}
//改变弹出层状态
const closeModal = () => {
    cardSelected.value = -1
    photo_view.value = 0
    isModal.value = false
    if(ids.value == 1){
            view.value = false
        }
}
//监视ID的变化
watch(ids,(newValue,oldValue)=>{
    page.value = 1
    isModal.value = false
    view.value = false
    nowlabel.value = -1
    cardSelected.value = -1
    cards.value = []
    getWallCard(newValue)
    
   
})

const newCard = (data) =>{
    cards.value.unshift(data)
    if(data.type == 1){
        photoArr.value.unshift(data.imgurl)
    }
    
    isOk.value =1
    closeModal()
}
//增加卡片
const addCard = () => {
    title.value = '写留言'
    isModal.value = true
}
//加载动画
var loading = () => {
    if(isOk.value = -1){
        nextTick(async () =>{
            var params1 = {
                container : document.getElementById('lottile'),
                renderer : 'svg',
                loop : true,
                autoplay : true,
                animationData : loadings,
            }
            lottie.loadAnimation(params1)
        })
    }
}
</script>

<style lang="less" scoped>
.wall-message {
    padding-top: 84px;
    padding-left: 20px;
    padding-right: 20px;
    .label {
        z-index: 9999;
        background: #f5f6f7;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        position: fixed;
        left: 0;
        top: 43px;
        overflow-x: auto;
        padding: 0 8px;
        box-sizing: border-box;
        .label-list {
            flex: none;
            margin: 0 12px;
            height: 28px;
            line-height: 28px;
            color: #5b5b5b;
        }

        .lbselected {
            color: @gray-1;
            font-weight: 600;
            border-radius: 14px;
        }

        &::-webkit-scrollbar {
            width: 4px;
            height: 4px;
            opacity: 0;
            background: #fff;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background: rgba(0, 0, 0, 0.2);
        }

        &::-webkit-scrollbar-track {
            border-radius: 4px;
            background: rgba(0, 0, 0, 0);
        }
    }
    .title{
        padding-top: 40px;
        font-size: 32px;
        color: #202020; 
        font-weight: 600;
    }
    .slogan{
        padding-top: 8px;
        font-size: 14px;
        font-weight: 400;
        color: #7e7e7e;
    }
    .card{
        display: flex;
        flex-wrap: wrap;
        padding-top: 28px;
        justify-content: center;
        width: 100%;
        .card-inner{
            margin-bottom: 10px;
            border: 1px solid transparent;
            transition: @tr;
            &:hover{
                scale: 1.05;
            }
        }
        .cardselected{
            border: 1px solid @primary-color;
        }
    }
    .photo{
        width: 100%;
        margin: 0 auto;
        columns: 3;
        column-gap: @padding-4;
        padding-top: 20px;
        .photo-card{
            margin-bottom: @padding-4;
            break-inside: avoid;
            transition: @tr;
            &:hover{
                scale: 1.03;
            }
            
        }
    }
    .add{
        width: 56px;
        height: 56px;
        background: @gray-1;
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.08);
        border-radius: 28px;
        position: fixed;
        right: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: @tr;
        z-index: 10000;
        .icon-tianjia{
            color: @gray-10;
            font-size: 24px;
        }
    }
    .none-msg{
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
        padding-top: 80px;
        position: absolute;
        top: 280px;
        
        img{
            display: inline;
        }
        p{
            font-weight: 700;
            font-size: 24px;
            color: @gray-3;
        }
    }
    .loading{
        text-align: center;
        width: 100%;
        p{
            margin-top: 72px;
            font-size: 24px;
            color: @gray-3;
        }
    }
    #lottile{
        margin-top: 20px;
        height: 150px;
        background-color: transparent;
    }
    .bottom-tip{
        text-align: center;
        color: @gray-3;
        padding: 20px;
        
    }
}
</style>
