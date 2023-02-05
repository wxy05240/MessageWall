<template>
    <div class="wall-index">
        <TopBar/>
        <video class="bg-video" src="@/images/qm1.mp4" loop="loop" autoplay="autoplay" muted="muted" ></video>
        <router-view name="pc"></router-view>
        <FootBar></FootBar>
    </div> 
</template>

<script setup>
import TopBar from '~/components/pc/TopBar.vue';
import FootBar from '~/components/pc/FootBar.vue';
import { signIpApi } from '../api';
import { useStore } from 'vuex';
import { onMounted } from 'vue'
const store = useStore()
const getUser = () => {
    signIpApi().then(res=>{
        let user = {
            id : res.ip
        }
        store.commit('getUser',user)
    })
}
onMounted(()=>{
    getUser()
})
</script>
<style lang="less" scoped>
.wall-index{
    .bg-video{
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        height: 880px;
    }
}
</style>