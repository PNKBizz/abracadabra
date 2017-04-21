<template>
    <section class="about">
        <div class="content content--fullscreen">
            <gmap-map
                    :center="{ lat:54.6286306, lng: 39.7176264}"
                    :zoom="17"
                    class="gmap">
                <gmap-marker
                        :position="{ lat:54.6286306, lng: 39.7176264}"
                        :clickable="true"
                        :draggable="true"></gmap-marker>
            </gmap-map>
        </div>
    </section>
</template>

<script>
    import * as VueGoogleMaps from 'vue2-google-maps';
    import Vue from 'vue';

    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyCb86Tm8aOTGwjGObf7tgP6sqtw6HpGJYA'
        }
    });

    export default {
        name: 'about'
    }
</script>

<style lang="scss" src="../css/inner-pages.scss"></style>
