<template>

	<div>
		<img :src="getLogo()">

		<IdInput/>

	</div>

</template>

<script>

	import IdInput from './IdInput.vue'

	export default {
		name: 'lounge',
		data() {
			return{
				name: 'AeroLounge'
			}
		},
		components: {
			IdInput
		},
		methods: {
			getLogo: function(){
				return '/static/' + this.name + '.png';
			}

		}

	}


</script>

<style scoped>

	.input-group {
		margin-left: 35%;
		width: 30%;
	}

	img {
		width: 30%;
		margin-bottom: 30px;
	}

</style>