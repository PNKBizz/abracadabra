<template>
    <section class="main">
        <div lass="logo" @click="setShowBack('main')"></div>
        <div class="main-button main-button--about" @mouseenter="setShowBack('about')">
            <router-link to="/about">О студии</router-link>
        </div>
        <div class="main-button main-button--works" @mouseenter="setShowBack('works')">
            <router-link to="/works">Наши работы</router-link>
        </div>
        <div class="background background--works" :class="{ active: showWorksBack }"></div>
        <div class="background background--about" :class="{ active: showAboutBack }"></div>
    </section>
</template>

<script>
    export default {
        name: 'main',
        data: function () {
            return {
                showWorksBack: false,
                showAboutBack: false
            }
        },
        methods: {
            setShowBack: function(currentCase) {
                this.showWorksBack = currentCase === 'works';
                this.showAboutBack = currentCase === 'about';
            },
            setAboutPage: function () {

            }
        }
    }
</script>

<style lang="scss" src="./main.scss"></style>
