<template>
    <section>
        <div :class="['content', 'content--works', {'content--fullscreen': !$route.params.master}]">
            <router-view v-if="$route.params.master"></router-view>
            <div v-else-if="/works/.test($route.fullPath) && !$route.params.master" class="works-back">
                <router-link tag="div"
                             v-for="current in masters"
                             :to="'/works/' + current.master"
                             :key="current.master"
                             class="works-back__master"
                             :style="{ backgroundImage: 'url(/src/assets/' + current.master + '.jpg)' }">
                    <span class="works-back__master-name">{{current.master}}</span>
                </router-link>
            </div>
        </div>
        <nav class="submenu submenu--works" v-if="$route.params.master">
            <router-link v-for="current in masters"
                         :to="'/works/' + current.master"
                         :key="current.master"
                         class="submenu__link"
                         activeClass="submenu__link--active">{{current.master}}</router-link>
        </nav>
    </section>
</template>

<script>
    export default {
        name: 'works',
        props: ['master'],
        computed: {
            masters() {
                return this.$store.getters.allMasters
            }
        }
    }
</script>

<style lang="scss" src="../css/inner-pages.scss"></style>

