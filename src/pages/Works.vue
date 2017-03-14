<template>
    <section class="works">
        <div class="content content--works">
            <gallery :items="galleryItems"></gallery>
        </div>
        <nav class="submenu">
            <router-link v-for="current in masters"
                         :to="'/works/' + current.master"
                         :key="current.master">{{current.master}}</router-link>
        </nav>
    </section>
</template>

<script>
    import gallery from '../components/gallery.vue'

    export default {
        name: 'works',
        props: ['master'],
        computed: {
            masters() {
                return this.$store.getters.allMasters
            },
			galleryItems() {
            	return this.$store.getters.getGalleryItems(this.master)
            }
        },
        components: { gallery },
        watch: {
			master: function(newMaster) {
				this.$store.commit('setCurrentMaster', { masterName: newMaster })
			}
        }
    }
</script>

<style lang="scss" src="./inner-pages.scss"></style>

