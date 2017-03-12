<template>
    <section class="works">
        <div class="content content--works"></div>
        <nav class="submenu">
            <a v-for="master in masters" key="master.master">{{master.master}}</a>
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

