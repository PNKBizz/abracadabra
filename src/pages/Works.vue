<template>
    <section class="works">
        <div class="content content--works">
            <router-view name="detail"></router-view>
        </div>
        <nav class="submenu">
            <router-link :to="'/works/' + master.master" v-for="master in masters" :key="master.master">{{master.master}}</router-link>
        </nav>
    </section>
</template>

<script>
    export default {
        name: 'works',
        computed: {
            masters: function() {
                return this.$store.getters.allMasters
            }
        }
    }
</script>

<style lang="scss" src="./inner-pages.scss"></style>

