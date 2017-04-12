<template>
    <section class="detailedGallery">
        <img :src="'/src/assets/gallery/' + master + '/' + imageId" alt="" class="detailedGallery__big-img">
        <aside class="detailedGallery__all-items">
            <router-link tag="img"
                         :to="'/works/' + master + '/' + item.name"
                         :src="item.src"
                         :alt="item.name"
                         v-for="item in masterGallery"
                         :key="item.name"
                         class="detailedGallery__item"></router-link>
        </aside>
    </section>
</template>

<script>
	export default {
		name: 'detailedGallery',
		props: ['master', 'imageId'],
        computed: {
			masterGallery() {
				if (!this.master) return [];
				return this.$store.getters.getGalleryItems(this.master)
            }
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
        }
    }
</style>