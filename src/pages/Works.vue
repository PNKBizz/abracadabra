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

<style>
    .works {
        width: 100%;
        flex-grow: 1;
        background: url('/src/assets/worksBack.jpg') 10vw 0 no-repeat;
        background-size: cover;
        display: flex;
    }

    .submenu {
        padding-top: 10vh;
        flex-basis: 25vw;
        flex-shrink: 1;
    }

    .submenu a {
        display: block;
        padding: 20px;
        color: white;
        font-size: 1.5em;
        background-color: rgba(0, 0, 0, .5);
    }
</style>
