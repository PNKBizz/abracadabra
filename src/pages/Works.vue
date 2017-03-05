<template>
    <section class="works">
        <div class="content content--works"></div>
        <button class="main-button main-button--works"><span class="text">О студии</span></button>
        <div class="logo logo--works"></div>
        <div class="logo--back"></div>
    </section>
</template>

<script>
    export default {
        name: 'works'
    }
</script>

<style>
    .works {
        width: 100%;
        flex-grow: 1;
        background: url('/src/assets/worksBack.jpg') 10vw 0 no-repeat;
        background-size: cover;
        display: flex;
    }

    .logo.logo--works {
        z-index: 1;
        right: calc(25vw - 200px);
    }

    .content--works {
        background-color: #2e2e2e;
        margin-right: 25vw;
        flex-grow: 1;
        position: relative;
        z-index: 2;
    }
</style>
