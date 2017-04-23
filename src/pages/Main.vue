<template>
    <section class="main">
        <transition appear name="from-top">
            <div class="buttons-ribbons">
                <div class="main-button main-button--about" @mouseenter="setShowBack('backgroundAbout')">
                    <div class="ribbon-coverup ribbon-coverup-left"></div>
                    <router-link to="/about/info">О студии</router-link>
                    <div class="ribbon ribbon-left"></div>
                </div>
                <div class="main-button main-button--works" @mouseenter="setShowBack('backgroundWorks')">
                    <div class="ribbon-coverup ribbon-coverup-right"></div>
                    <router-link to="/works/">Наши работы</router-link>
                    <div class="ribbon ribbon-right"></div>
                </div>
                <div class="main-button main-button--main">
                    <vk class="social"></vk>
                    <inst class="social"></inst>
                </div>
            </div>
        </transition>
        <transition appear name="from-bottom">
            <div class="abralogo-back"><div class="abralogo"></div></div>
        </transition>
        <transition name="background" tag="div" mode="in-out">
            <component :is="backgroundImg"></component>
        </transition>
    </section>
</template>

<script>
    import vk from '../components/vk.vue'
    import inst from '../components/inst.vue'
    import backgroundCommon from '../components/backgroundCommon.vue'
    import backgroundWorks from '../components/backgroundWorks.vue'
    import backgroundAbout from '../components/backgroundAbout.vue'

    export default {
        name: 'main',
        data: function () {
            return {
                backgroundImg: 'backgroundCommon'
            }
        },
        components: { vk, inst, backgroundCommon, backgroundWorks, backgroundAbout },
        methods: {
            setShowBack: function(currentCase) {
                this.backgroundImg = currentCase;
            }
        }
    }
</script>

<style lang="scss" src="../css/main.scss"></style>
