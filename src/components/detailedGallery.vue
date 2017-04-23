<template>
    <section class="detailedGallery">
        <div class="detailedGallery__button detailedGallery__button--prev"
             @click="prev"
             v-if="currentIndex !== 0"></div>
        <div class="detailedGallery__button detailedGallery__button--next"
             @click="next"
             v-if="(currentIndex + 1) < masterGallery.length"></div>
        <img :src="'src/assets/gallery/' + master + '/' + imageId" alt="" class="detailedGallery__big-img">
        <aside class="detailedGallery__all-items">
            <div class="detailedGallery__all-items--container">
                <router-link tag="img"
                             :to="'/works/' + master + '/' + item.name"
                             :src="item.src"
                             :alt="item.name"
                             v-for="item in masterGallery"
                             :key="item.name"
                             class="detailedGallery__item"></router-link>
            </div>
        </aside>
    </section>
</template>

<script>
    export default {
        name: 'detailedGallery',
        data() {
            return {
                currentIndex: null
            }
        },
        props: ['master', 'imageId'],
        computed: {
            masterGallery() {
                if (!this.master) return [];
                return this.$store.getters.getGalleryItems(this.master)
            }
        },
        methods: {
            next() {
                this.$router.push('/works/' + this.master + '/' + this.masterGallery[++this.currentIndex].name)
            },
            prev() {
                this.$router.push('/works/' + this.master + '/' + this.masterGallery[--this.currentIndex].name)
            }
        },
        created() {
            this.currentIndex = this.masterGallery.findIndex(img => img.name === this.imageId);
        },
        updated() {
            const activeEl = document.querySelector('.detailedGallery__all-items .router-link-active');
            activeEl.offsetParent.style.marginLeft = -activeEl.offsetLeft
                + (+getComputedStyle(document.querySelector('.detailedGallery__all-items')).width.split('px')[0]
                - +getComputedStyle(activeEl).width.split('px')[0]) / 2 + 'px';

            this.currentIndex = this.masterGallery.findIndex(img => img.name === this.imageId);
        }
    }
</script>

<style lang="scss" src="../css/gallery.scss"></style>
