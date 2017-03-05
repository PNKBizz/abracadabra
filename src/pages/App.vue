<template>
    <main>
        <transition name="transitionName">
            <router-view></router-view>
        </transition>
    </main>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                transitionName: ''
            }
        },
        watch: {
            $route (to) {
                this.transitionName = to.path == '/about' ? 'left' : 'right';
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
