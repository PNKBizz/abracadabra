<template>
    <section class="gallery-overlay">
        <img v-lazy="current" alt="" width="500">
    </section>
</template>

<script>
	export default {
		name: 'gallery',
		props: ['current']
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
        padding: 50px;

        img {
            margin: auto;
            object-fit: cover;
        }
    }
</style>

