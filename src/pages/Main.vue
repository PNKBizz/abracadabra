<template>
    <section class="main">
        <transition appear name="from-top">
            <div class="buttons-ribbons">
                <div class="main-button main-button--about" @mouseenter="setShowBack('about')">
                    <div class="ribbon-coverup ribbon-coverup-left"></div>
                    <router-link to="/about">О студии</router-link>
                    <div class="ribbon ribbon-left"></div>
                </div>
                <div class="main-button main-button--works" @mouseenter="setShowBack('works')">
                    <div class="ribbon-coverup ribbon-coverup-right"></div>
                    <router-link :to="'/works/' + currentMaster.master">Наши работы</router-link>
                    <div class="ribbon ribbon-right"></div>
                </div>
                <div class="main-button main-button--main" @click="test">
                    <vk class="social" @click="test"></vk>
                    <inst class="social"></inst>
                </div>
            </div>
        </transition>
        <transition appear name="from-bottom">
            <div class="abralogo-back"><div class="abralogo"></div></div>
        </transition>
        <transition-group name="background" tag="div" mode="in-out">
            <div class="background background--works"
                 v-if="showWorksBack"
                 key="worksBack"
                 v-lazy:background-image="'src/assets/worksBack.jpg'"></div>
            <div class="background background--about"
                 v-if="showAboutBack"
                 key="aboutBack"
                 v-lazy:background-image="'src/assets/aboutBack.jpg'"></div>
            <div class="background background--main"
                 v-if="showAboutMain"
                 key="aboutMain"
                 v-lazy:background-image="'src/assets/commonBack.jpg'"></div>
        </transition-group>
    </section>
</template>

<script>
    import vk from '../components/vk.vue'
    import inst from '../components/inst.vue'
    import shop from '../api/shop'

    export default {
        name: 'main',
        data: function () {
            return {
                showWorksBack: false,
                showAboutBack: false,
                showAboutMain: true,
                showRibbons: false
            }
        },
        computed: {
            currentMaster() {
                return this.$store.getters.getCurrentMaster
            }
        },
        components: {vk, inst},
        methods: {
            setShowBack: function(currentCase) {
                this.showWorksBack = currentCase === 'works';
                this.showAboutBack = currentCase === 'about';
                this.showAboutMain = currentCase === 'main';
            },
            test: function () {
                console.log(this.currentMaster);
            }
        }
    }
</script>

<style lang="scss" src="./main.scss"></style>
