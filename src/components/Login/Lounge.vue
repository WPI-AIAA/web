<template>

	<div>
		<img src="/static/AeroLounge.png">

		<div class="input-group input-group-lg">
			<input type="text" class="form-control" placeholder="Swipe your ID or enter your Username">
			<span class="input-group-btn"> 
				<button type="button" class="btn btn-secondary"> Login </button>
			</span>
		</div>

	</div>

</template>

<script>

	export default {
		name: 'lounge',
		data() {
			return{
				image: '/assets/AeroLounge.png'
			}
		},
		methods: {
			getLogo: function(){
				return "@/assets/AeroLounge.png"
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