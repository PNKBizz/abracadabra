<template>
    <div :style="{ marginLeft: marginLeft + 'px' }">
        <img :src="item.src" alt=""
             :class="['gallery-overlay__item',
             {
             	'active': current.id === item.id,
             	'half-active': activeSiblings.indexOf(item) !== -1
             }]"
             :id="item.id + '_overlay'"
             v-for="item in allItems">
    </div>
</template>

<script>
	export default {
		name: 'galleryWrapper',
		props: ['current', 'allItems'],
		data() {
		    return {
                currentMargin: 0,
                docWidth: 0,
                xPos: 0
            }
        },
		computed: {
		    index() {
		        return this.allItems.indexOf(this.current);
            },
            activeSiblings() {
		        return [this.allItems[this.index + 1], this.allItems[this.index - 1]];
            },
            marginLeft() {
				this.currentMargin = this.currentMargin + this.xPos - this.docWidth * 1.5;
				return this.currentMargin;
            }
        },
        mounted() {
            this.docWidth = document.documentElement.clientWidth;
            this.xPos = document.getElementById(this.current.id + '_overlay').getBoundingClientRect().left;
        }
	}
</script>