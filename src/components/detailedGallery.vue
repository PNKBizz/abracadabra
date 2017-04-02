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
        height: 100%;
        align-items: center;

        &__big-img {
            max-height: 80%;
        }

        &__item {
            object-fit: cover;
            height: 100%;
            border-left: 5px solid black;
            position: relative;

            &.router-link-active {
                border: 5px solid darkred;
            }
        }

        &__all-items {
            width: 100%;
            height: 20%;
            display: flex;
            overflow: hidden;
            padding-top: 10px;
            margin-top: 10px;
            border-top: 1px solid darkred;
        }
    }
</style>