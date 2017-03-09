<template>
    <section class="main">
        <div lass="logo" @click="setShowBack('main')"></div>
        <div class="main-button main-button--about" @mouseenter="setShowBack('about')">
            <div class="ribbon-coverup ribbon-coverup-left"></div>
            <router-link to="/about">О студии</router-link>
            <div class="ribbon ribbon-left"></div>
        </div>
        <div class="main-button main-button--works" @mouseenter="setShowBack('works')">
            <div class="ribbon-coverup ribbon-coverup-right"></div>
            <router-link to="/works">Наши работы</router-link>
            <div class="ribbon ribbon-right"></div>
        </div>
        <div class="main-button main-button--main">
            <vk class="social"></vk>
            <inst class="social"></inst>
        </div>
        <div class="abralogo-back"><div class="abralogo"></div></div>
        <div class="background background--works" :class="{ active: showWorksBack }"></div>
        <div class="background background--about" :class="{ active: showAboutBack }"></div>
        <div class="background background--main" :class="{ active: showAboutMain }"></div>
    </section>
</template>

<script>
    import vk from '../components/vk.vue'
    import inst from '../components/inst.vue'

    export default {
        name: 'main',
        data: function () {
            return {
                showWorksBack: false,
                showAboutBack: false,
                showAboutMain: true
            }
        },
        components: {vk, inst},
        methods: {
            setShowBack: function(currentCase) {
                this.showWorksBack = currentCase === 'works';
                this.showAboutBack = currentCase === 'about';
                this.showAboutMain = currentCase === 'main';
            },
            setAboutPage: function () {

            }
        }
    }
</script>

<style lang="scss" src="./main.scss"></style>
