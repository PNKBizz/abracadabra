<template>
    <section class="gallery">
        <div v-for="item in mappedItems"
             class="gallery__item--container"
             :class="{ 'active': item.active }"
             @click="toggleActive(item)">
            <img v-lazy="item.src" width="200" class="gallery__item">
        </div>
    </section>
</template>

<script>
    export default {
        name: 'gallery',
        data: function () {
            return {
				currentItem: ''
            }
		},
        props: ['items'],
        computed: {
            mappedItems() {
				get() {
					if (!this.items) return;
					return this.items.map( item => {
						return { src: item, active: false }
					});
                },
                set(value) {
					this.mappedItems = value;
                }
			}
        },
        methods: {
			toggleActive(item) {
				item.active = true;
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

