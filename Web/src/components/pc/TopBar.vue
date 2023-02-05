<template>
    <div class="top-bar">
        <div class="logo">
            <img src="@/images/favicon.svg" alt="">
            <p class="logo-name">一刻时光</p>
        </div>
        <div class="menu">
            <Ibutton @click="changeWall(0)"  :active="id == 0 ? 'cprimary' : 'pncolor'" class="menu-message">留言墙</Ibutton>
            <Ibutton @click="changeWall(1)"  :active="id == 1 ? 'csecondary' : 'pncolor'" class="menu-photo">照片墙</Ibutton>
        </div>
        <div class="user">
            <div class="user-head">
                <img :src=avatarUrl alt="苦苦的码人">
            </div>
        </div>
    </div>
</template>

<script setup>
import Ibutton from './Ibutton.vue';
import { useRoute,useRouter } from 'vue-router';
import { ref } from 'vue';
import { avatarUrl } from '@/utils/env';
const route = useRoute()
const router = useRouter()
const id  = ref(route.query.id)
//切换
const changeWall = (e) => {
    id.value = e
    router.push({
        query : { id : e }
    })
}

</script>
<style lang="less" scoped>
.top-bar{
    width: 100%;
    height: 52px;
    background: rgba(255,255,255,0.80);
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    .logo{
        display: flex;
        align-items: center;
        width: 200px;
        .logo-name{
            font-size: 20px;
            color: @gray-1 ;
            font-weight: 600;
            padding-left: 10px;
        }
    }
    .menu{
        display: flex;
        .menu-message{
            margin-right: 24px;
        }
    }
    .user{
        width: 200px;
        .user-head{
            float: right;
            border-radius: 50%;
            height: 36px;
            width: 36px;
            cursor: pointer;
            
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
    }
}


</style>