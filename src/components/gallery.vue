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

<style lang="scss">
    .gallery {
        color: white;
        font-size: 2em;
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
        background-color: #000;

        &__item {
            object-fit: cover;
            flex-grow: 1;
            border-right: 5px solid black;

            &--container {
                flex-basis: 10rem;
                flex-grow: 1;
                max-height: 200px;
                padding: 10px 0;
                display: flex;
                border-bottom: 1px solid #6a002d;
                transition: all .3s;

                &.active {
                    margin-bottom: 200px;
                }
            }
        }

        &:after {
            content: '';
            width: 1px;
            border-bottom: 1px solid #6a002d;
            flex-grow: 999;
        }
    }
</style>

