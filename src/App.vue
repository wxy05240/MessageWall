<template>
  <div id="app">
    <router-view v-if="showPage == 1" name="mobile"></router-view>
    <router-view v-if="showPage == 2" name="pc"></router-view>
  </div>
</template>


<script setup>
import { onMounted,ref } from 'vue';
//移动端路由为1 PC端路由为2
const showPage = ref(1)
const _isMobile = () => {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag;
}
onMounted(() => {
  if(_isMobile()){
    //移动端
    showPage.value = 1
  }else{
    //PC 端
    showPage.value = 2
  }
})
</script>
<style lang="less">
@import url(./assets/styles/common.less);
@import url(./assets/fonts/icon/iconfont.css);
</style>