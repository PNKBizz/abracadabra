<template>
    <section class="gallery">
        <div v-for="item in mappedItems"
             class="gallery__item--container"
             @click="toggleActive(item, $event)">
            <img :src="item.src" :id="item.id" width="200" class="gallery__item">
        </div>
        <gallery-overlay :current="currentItem" :all-items="mappedItems" v-if="currentItem.id"></gallery-overlay>
    </section>
</template>

<script>
    import galleryOverlay from './galleryOverlay.vue'

    export default {
        name: 'gallery',
		props: ['items'],
        data: function () {
            return {
				currentItem: {}
            }
		},
        computed: {
            mappedItems() {
                if (!this.items) return;
                return this.items.map( (item, i) => {
                    return {
                    	src: item,
                        id: i + '-' + Math.floor((1 + Math.random()) * 0x10000)
                    }
                });
			}
        },
        components: { galleryOverlay },
        methods: {
			toggleActive(item, e) {
                this.currentItem = item;
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

