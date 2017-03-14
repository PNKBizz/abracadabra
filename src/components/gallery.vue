<template>
    <section class="gallery">
        <div class="gallery__item--container" v-for="item in items">
            <img :src="item" alt="" width="200" class="gallery__item">
        </div>
    </section>
</template>

<script>
    export default {
        name: 'gallery',
        props: ['items']
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

