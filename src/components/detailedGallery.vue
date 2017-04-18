<template>
    <section class="detailedGallery">
        <div class="detailedGallery__button detailedGallery__button--prev"
             @click="prev"
             v-if="currentIndex !== 0"></div>
        <div class="detailedGallery__button detailedGallery__button--next"
             @click="next"
             v-if="(currentIndex + 1) < masterGallery.length"></div>
        <img :src="'/src/assets/gallery/' + master + '/' + imageId" alt="" class="detailedGallery__big-img">
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

<style lang="scss">
    .detailedGallery {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-height: 100%;
        align-items: center;
        position: relative;

        &__button {
            width: 0;
            height: 0;
            border: 40px solid black;
            border-radius: 50%;
            position: absolute;
            top: 35%;
            cursor: pointer;

            &:after {
                content: '';
                height: 30px;
                width: 10px;
                background-color: #2e2e2e;
                position: absolute;
                z-index: 1;
                right: 10px;
                top: -15px;
            }

            &:before {
                content: '';
                width: 70px;
                height: 10px;
                background-color: #2e2e2e;
                position: absolute;
                left: -30px;
                bottom: -5px;
            }

            &--prev {
                left: 30px;
            }

            &--next {
                right: 30px;
                transform: scale(-1);
            }
        }

        &__big-img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            padding-bottom: 10px;
            overflow: hidden;
            flex-grow: 1;
        }

        &__item {
            padding-top: 10px;
            object-fit: cover;
            height: 100%;
            margin: 0 5px;
            position: relative;

            &.router-link-active {
                padding-top: 0;
                border-top: 10px solid darkred;
            }
        }

        &__all-items {
            width: 100%;
            flex-basis: 20vh;
            height: 20vh;
            flex-shrink: 0;
            display: flex;
            overflow: hidden;
            border-top: 1px solid darkred;
            box-sizing: border-box;
            position: relative;

            &--container {
                display: flex;
                box-sizing: border-box;
                position: relative;
                height: 100%;
            }
        }
    }
</style>