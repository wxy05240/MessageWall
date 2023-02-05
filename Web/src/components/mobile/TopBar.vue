<template>
    <div class="top-bar">
        <div class="menu">
            <div class="menu-message">
                <span @click="changeWall(0)" :class="{'selected' : id==0 }"
                    :active="id == 0 ? 'cprimary' : 'pncolor'">留言墙</span>
                <p v-if="id == 0"></p>
            </div>
            <div class="menu-photo">
                <span @click="changeWall(1)" :class="{ 'selected': id == 1 }"
                    :active="id == 1 ? 'csecondary' : 'pncolor'">照片墙</span>
                <p v-if="id == 1"></p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
const route = useRoute()
const router = useRouter()
const id = ref(route.query.id)
//切换
const changeWall = (e) => {
    id.value = e
    router.push({
        query: { id: e }
    })
}

</script>
<style lang="less" scoped>
.top-bar {
    width: 100%;
    height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 99999999;
    background: #f5f6f7;
    display: flex;
    justify-content: center;
    align-items: center;

    .menu {
        display: flex;
        align-items: center;

        span {
            font-size: 17px;

        }

        .selected {
            font-weight: 600;
        }

        p {
            position: absolute;
            width: 20px;
            height: 4px;
            background: @primary-color;
            left: 0;
            right: 0;
            margin: 0 auto;
            border-radius: 2px;
            margin-top: 3px;
        }

        .menu-photo {
            margin-left: 30px;
            position: relative;
        }

        .menu-message {
            position: relative;
        }
    }
}
</style>