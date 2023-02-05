<template>
    <transition name="downs" key="box2">
        <div class="i-message" v-if="isShow">
            <div class="i-m-i">
                <i class="iconfont" :class="style[type].icon"></i>
                <span class="text">{{ message }}</span>
            </div>
        </div>
    </transition>
</template>
<script setup>
import { ref,onMounted } from 'vue';
const props = defineProps({
    message : {
        type : String,
        default : ''
    },
    type : {
        type : String,
        //warn 警告 error 错误 success成功
        default : 'warning'
    }
})
const style = {
    warning : {
        icon : 'icon-waring'
    },
    error : {
        icon : 'icon-error'
    },
    success : {
        icon : 'icon-success'
    }
}
const isShow = ref(false)
onMounted(()=>{
    isShow.value = true
    setTimeout(()=>{
        isShow.value = false
    },3000)
})

</script>
<style lang="less" scoped>
.downs {
    &-enter {
        &-from {
            transform: translateY(-30px);
            opacity: 0;
        }

        &-active {
            transition: all 0.3s;
        }

        &-to {
            transform: translateY(0px);
            opacity: 1;
        }
    }
    &-leave {
        &-from {
            transform: translateY(0px);
            opacity: 1;
        }

        &-active {
            transition: all 0.3s ;
        }

        &-to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }

}
.i-message{
    width: 100%;
    height: 40px;
    position: fixed;
    z-index: 99999999999;
    top: 20px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    .i-m-i{
        border-radius: 4px;
        padding: 0 20px;
        color: @gray-1;
        background: @gray-10;
        box-shadow: 0 4px 16px rgba(0,0,0,0,1);
    }
    i{
        margin-right: 6px;
        vertical-align: middle;
    }
    .text{
        vertical-align: middle;
    }
}
.icon-success{
    color: @success-color;
}
.icon-warning{
    color: @warning-color;
}
.icon-error{
    color: @error-color;
}
</style>