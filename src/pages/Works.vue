<template>
    <section class="works">
        <div class="content content--works"></div>
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

    .content--works {
        background-color: #000;
        margin-right: 25vw;
    }
</style>
