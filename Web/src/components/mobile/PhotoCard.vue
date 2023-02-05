<template>
    <div class="photo-card">
        <img :src="baseImgPath + photo.imgurl"  class="photo-img">
        <div class="photo-bg" @click="toDetail"></div>
        <div class="photo-like">
            <span class="iconfont icon-aixin1" :class="{ 'islike': photo.islike[0].count >= 1 }"
                @click="clickLike"></span>
            <span class="like-data">{{ photo.like[0].count }}</span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { insertFeedBackApi } from '@/api/index'
import { useStore } from 'vuex';
import { baseImgPath } from '@/utils/env';
const store = useStore()
const props = defineProps({
    photoItem: {
        default: {}
    },

})

const emits = defineEmits(['toDetail'])
const photo = computed(() => {
    return props.photoItem
})
const toDetail = () => {
    emits('toDetail',photo.value.id)
}
//点击喜欢
const clickLike = () => {

    if (photo.value.islike[0].count == 0) {
        let data = {
            wallId: photo.value.id,
            userId: store.state.user.id,
            type: 0,
            moment: new Date()

        }
        insertFeedBackApi(data).then(res => {
            //反馈
            photo.value.like[0].count++
            photo.value.islike[0].count++
        })
    }
}
</script>

<style lang="less" scoped>
.photo-card {
    position: relative;
    overflow-y: auto;

    .photo-img {
        width: 100%;

        margin: 0;
        box-sizing: border-box;
    }

    .photo-bg {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: @tr;
    }

    .photo-like {
        position: absolute;
        left: @padding-8;
        top: @padding-8;
        background: rgba(255, 255, 255, 0.80);
        border-radius: 20px;
        height: 28px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        background: blur(20px);
        opacity: 0;
        transition: @tr;

        span {
            color: @gray-1;
        }

        .icon-aixin1 {
            color: @gray-3;
            padding-right: @padding-4;
        }
        .islike {
            color: @like;
        }

    }

    &:hover {
        .photo-bg {
            opacity: 1;
        }

        .photo-like {
            opacity: 1;
        }

        

    }
    
}
</style>