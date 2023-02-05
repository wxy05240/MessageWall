<template>
    <div class="i-node-card" :style="{ width : width , background:cardColor[card.color]}">
        <div class="top">
            <p class="time">{{ dateTransform(card.moment) }}</p>
            <p class="label">{{ label[card.type][card.label]}}</p>
        </div>
        <p class="message" @click="toDetail">
            {{ card.message }}
        </p>
        <div class="foot"> 
            <div class="foot-left">
                <div class="icon" @click="clickLike">
                    <span class="iconfont icon-aixin1" :class="{ 'islike' : card.islike[0].count >= 1}"></span>
                    <span class="value">{{ card.like[0].count }}</span>
                </div>
                <div class="icon" >
                    <span class="iconfont icon-liuyan"></span>
                    <span class="value">{{ card.comcount[0].count }}</span>
                </div>
                
            </div>
            <div class="name">{{ card.name}}</div>
            
        </div>
    </div>
</template>
<script setup>
import { label,cardColor } from '@/utils/data'
import { computed  } from 'vue';
import { dateTransform } from '@/utils/methods'
import { insertFeedBackApi } from '@/api/index'
import { useStore } from 'vuex';
const store = useStore()
const emits = defineEmits(['toDetail'])
var props = defineProps({
    width : {
        default : '100%',
    },
    note : {
        default : {}
    }

})
var card = computed(()=>{
    return props.note
})
const toDetail = ()=> {
    emits('toDetail')
}
//点击喜欢
const clickLike = ()=>{
    if(card.value.islike[0].count == 0){
        let data = {
            wallId : card.value.id,
            userId : store.state.user.id,
            type : 0,
            moment : new Date()

        }
        insertFeedBackApi(data).then(res=>{
            //反馈
            card.value.like[0].count++
            card.value.islike[0].count++
        })
    }
}
</script>
<style lang="less" scoped>

.i-node-card{
    height: 240px;
    padding: 10px 20px 16px;
    box-sizing: border-box;
    position: relative;

    .top{
        display: flex;
        justify-content: space-between;
        padding-bottom: 16px;
        p{
            font-size: @size-12;
            color: @gray-3;
        }
    }
    .message{
        height: 140px;
        font-size: @size-14;
        color : @gray-1;
    }
    .foot{
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 0;
        bottom: 16px;
        box-sizing: border-box;
        width: 100%;
        padding: 0 @padding-20;
        .foot-left{
            display: flex;
            .value{
                font-size: @size-12;
                color : @gray-3;
                line-height: 16px;
                padding-left: @padding-4
            }
            .iconfont{
                font-size: @size-16;
                color: @gray-3;
            }
            .icon{
                padding-right: @padding-8;
                display: flex;
                align-items: center;
                .icon-aixin1{
                  
                    transition: @tr;
                    &:hover{
                        color: @like;
                    }
                    
                }
                .islike{
                    color: @like;
                }
                
            }
        }
        .name{
            font-size: @size-16;
            color: @gray-1;
        }
    }
}
</style>