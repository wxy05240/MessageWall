<template>
    <transition name="views" key="box1">
        <div class="viewer" v-if="isview">
            <div class="bg">
            </div>
            <div class="viewer-photo">

                <img :src="'https://api.5i21.cn'  + photo[number] " alt=''>
            </div>
            <div class="switch sw-left" @click="changeNumber(0)" v-show="number > 0">
                <span class="iconfont icon-xiangzuo"></span>
            </div>
            <div class="switch sw-right" @click="changeNumber(1)" v-show="number < photo.length - 1">
                <span class="iconfont icon-xiangyou"></span>
            </div>
        </div>
    </transition>

</template>
<script setup>
import { computed } from 'vue';
import { baseUrl } from '@/utils/env';
const props = defineProps({
    photos: {
        default: []
    },
    nowNumber: {
        type: Number,
        default: 0
    },
    isView: {
        default: false
    }
})
const emits = defineEmits(['viewSwitch'])
//是否展示
const isview = computed(() => {
    return props.isView
})
//当前ID
const number = computed(() => {
    return props.nowNumber
})
const photo = computed(()=>{
    return props.photos
})
const changeNumber = (e) => {

    emits('viewSwitch', e)
}
</script>
<style lang="less" scoped>
.views {
    &-enter {
        &-from {
            opacity: 0;
        }

        &-active {
            transition: all .2s ease-in;
        }

        &-to {
            opacity: 1;
        }
    }

    &-leave {
        &-from {
            opacity: 1;
        }

        &-active {
            transition: all .2s ease-out;
        }

        &-to {
            opacity: 0;
        }
    }

}

.viewer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .bg {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255.0.9);
        backdrop-filter: blur(20px);
        height: 100%;
        width: 100%;
    }

    .viewer-photo {
        position: absolute;
        padding: 82px 454px 5px 96px;
        box-sizing: border-box;
        width: 100%;
        overflow-y: auto;
        display: flex;
        justify-content: center;

        img {
            max-width: 100%;
            margin: 0;
            padding: 0;
            display: inline;
        }
    }

    .switch {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: @gray-3;
        color: @gray-10;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.5;
        transition: @tr;
        cursor: pointer;

        .iconfont {
            font-size: 24px;
        }

        &:hover {
            opacity: 1;
        }
    }

    .sw-left {
        left: 20px;
    }

    .sw-right {
        right: 380px;
    }

}
</style>