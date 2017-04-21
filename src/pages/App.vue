<template>
    <main class="main-container">
        <transition mode="out-in" name="header-transition">
            <header v-if="$route.path !== '/'" class="header-main">
                <router-link to="/about">О студии</router-link>
                <router-link to="/" class="logo-horisontal"></router-link>
                <router-link to="/works">Наши работы</router-link>
            </header>
        </transition>
        <transition mode="out-in" :name="transitionName">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
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
            $route (to, from) {
                if (to.path === '/works' && from.path === '/about') {
                    this.transitionName = 'left';
                } else if (to.path === '/about' && from.path === '/works') {
                    this.transitionName = 'right';
                } else {
                    this.transitionName = 'fade';
                }
            }
        },
        created: function() {
            this.$store.dispatch('getMasters');
        }
    }
</script>

<style lang="scss" src="../css/app.scss"></style>
