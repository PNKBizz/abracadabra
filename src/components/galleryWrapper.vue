<template>
    <div>
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
				marginLeft: 0,
                activeSiblings: []
			}
		},
		watch: {
			current(newVal) {
				const index = this.allItems.indexOf(newVal);
				console.log(index);
				this.activeSiblings = [this.allItems[index + 1], this.allItems[index - 1]]
//				let xPos = current.getBoundingClientRect().left;
//				this.marginLeft = this.marginLeft + xPos - document.documentElement.clientWidth * 1.5;
			}
        }
	}
</script>