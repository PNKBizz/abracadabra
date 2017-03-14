<template>
    <section class="gallery">
        {{master}}
    </section>
</template>

<script>
    export default {
        name: 'works',
        props: ['master']
    }
</script>

<style lang="scss">
    .gallery {
        color: white;
        font-size: 2em;
    }
</style>

