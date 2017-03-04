<template>
    <main>
        <header v-if="isMain">Header</header>
        <router-view></router-view>
        <footer v-if="isMain">Footer</footer>
    </main>
</template>

<script>
    export default {
        name: 'app',
        computed: {
            isMain: function () {
                return this.$route.fullPath !== '/'
            }
        }
    }
</script>

<style>
    header, footer {
        height: 10vh;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #2e2e2e;
        color: #fff;
    }
    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
