<template>
    <section class="about">
        <nav class="submenu submenu--about">
            <router-link class="submenu__link"
                         activeClass="submenu__link--active"
                         to="/about/info">Как нас найти</router-link>
            <router-link class="submenu__link"
                         activeClass="submenu__link--active"
                         to="/about/price">Наши цены</router-link>
        </nav>
        <div class="content content--about">
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'about'
    }
</script>

<style lang="scss" src="../css/inner-pages.scss"></style>
