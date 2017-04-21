<template>
    <section class="gallery">
        <div v-for="item in mappedItems"
             class="gallery__item--container">
            <router-link
                    :to="'/works/' + master + '/' + item.name"
                    tag="img"
                    v-lazy="item.src"
                    :id="item.name"
                    :key="master + item.name"
                    width="200"
                    class="gallery__item"></router-link>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'gallery',
		props: ['master'],
        computed: {
            mappedItems() {
                return this.$store.getters.getGalleryItems(this.master)
			}
        }
    }
</script>

<style lang="scss" src="../css/gallery.scss"></style>

