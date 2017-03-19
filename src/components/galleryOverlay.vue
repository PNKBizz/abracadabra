<template>
    <section class="gallery-overlay">
        <button class="next" @click="nextImg">next</button>
        <button class="prev" @click="prevImg">prev</button>
        <gallery-wrapper
                :current="currentItem"
                :all-items="itemsArray"
                class="gallery-overlay__wrapper"></gallery-wrapper>
    </section>
</template>

<script>
    import galleryWrapper from './galleryWrapper.vue'

	export default {
		name: 'galleryOverlay',
		props: ['current', 'allItems'],
		data() {
		    return {
				currentItem: this.current,
				itemsArray: this.allItems
            }
        },
		methods: {
		    nextImg() {
		    	this.currentItem = this.itemsArray[3];
            },
			prevImg() {
				this.currentItem = this.itemsArray[2];
            }
        },
		components: {galleryWrapper}
	}
</script>

<style lang="scss">
    .gallery-overlay {
        position: fixed;
        top: 10vh;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .9);
        display: flex;
        overflow: hidden;
        padding: 50px;

        .next {
            position: relative;
            z-index: 99;
        }

        &__wrapper {
            display: flex;
            align-items: center;
            flex-grow: 1;
        }

        &__item {
            width: 200px;
            position: relative;
            transition: all .3s;

            &.active {
                width: 400px;
                z-index: 2;
                border: 5px solid gray;
                box-shadow: 0 0 50px black;
            }

            &.half-active {
                z-index: 1;
                width: 300px;
                margin: -50px;
            }
        }
    }
</style>

