<template>
    <section class="main">
        <div class="logo" @mouseenter="setShowBack('main')" @click="setShowBack('main')"></div>
        <div class="main-button main-button--about" @mouseenter="setShowBack('about')">
            <router-link to="/about">О студии</router-link>
        </div>
        <div class="main-button main-button--works" @mouseenter="setShowBack('works')">
            <router-link to="/works">Наши работы</router-link>
        </div>
        <div class="background background--works" :class="{ active: showWorksBack }"></div>
        <div class="background background--about" :class="{ active: showAboutBack }"></div>
        <div class="background background--main" :class="{ active: showMain }"></div>
    </section>
</template>

<script>
    export default {
        name: 'main',
        data: function () {
            return {
                showWorksBack: false,
                showAboutBack: false,
                showMain: true
            }
        },
        methods: {
            setShowBack: function(currentCase) {
                this.showWorksBack = currentCase === 'works';
                this.showAboutBack = currentCase === 'about';
                this.showMain = currentCase === 'main';
            }
        }
    }
</script>

<style lang="scss" src="./main.scss"></style>
