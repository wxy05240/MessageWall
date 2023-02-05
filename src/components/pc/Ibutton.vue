<template>
    <div>
        <button :class="[size,active]" class="btn">
            <slot></slot>
        </button>
    </div>
</template>
<script setup>
defineProps({
    size : {
        default : 'base'
    },
    active : {
        default : 'primary'
    }
})
</script>
<style lang="less" scoped>
.btn{
    text-align: center;
    border: none;
    cursor: pointer;
}
// size
.max{
    min-width: 100px;
    height: 48px;
    border-radius: 24px;
    padding: 0 24px;
    line-height: 48px;
}
.base{
    min-width: 80px;
    height: 36px;
    border-radius: 24px;
    padding: 0 20px;
    line-height: 36px;
}
.samll{
    min-width: 72px;
    height: 32px;
    border-radius: 24px;
    padding: 0 20px;
    line-height: 32px;
}
// primary
.primary{
    width: 100%;
    background: #202020;
    color: #fff;
}
.secondary{
    width: 100%;
    background: none;
    color: @gray-1;
    border: 1px solid #202020;
}
.pncolor{
    background: hsla(0,0%,100%,0);
    color: #202020;
}
.cprimary{
    background: @primary-color;
    color: @gray-10;
    font-weight: 600;
}
.csecondary{
    background: @primary-color;
    color: @gray-10;
    font-weight: 600;
}

</style>