<template>
    <section class="main">
        <img src="/src/assets/logo.png" alt="logo" class="logo" @click="setMainBack">
        <button class="main-button main-button--about" @click="setShowAboutBack">О студии</button>
        <button class="main-button main-button--works" @click="setShowWorksBack">Наши работы</button>
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
            setShowAboutBack: function() {
                this.showWorksBack = false;
                this.showAboutBack = true;
            },
            setShowWorksBack: function() {
                this.showWorksBack = true;
                this.showAboutBack = false;
            },
            setMainBack: function () {
                this.showWorksBack = false;
                this.showAboutBack = false;
            }
        }
    }
</script>

<style lang="scss" src="./main.scss"></style>
