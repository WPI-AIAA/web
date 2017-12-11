<template>

	<div id="login">
		<div v-if="displayIntro()">

			<h1> Lounge and Lab Login </h1>
			<button v-on:click="goToLogin('lounge')" type="button" class="btn btn-outline-secondary btn-lg"> Lounge </button>
			<button v-on:click="goToLogin('lab')" type="button" class="btn btn-outline-secondary btn-lg"> Lab </button>

		</div>

		<router-view/>
	</div>

</template>

<script>

	export default {
		name: 'login',
		methods: {
			goToLogin: function(destination){
				this.$router.push(this.$route.path + "/" + destination);
				this.displayIntro();
			},
			displayIntro: function(){
				if(this.$route.path == "/login"){
					return true;
				} else {
					return false;
				}
			}
		}
	}

</script>

<style scoped>

	button {
		width: 10%;
		margin-left: 2%;
		margin-right: 2%;
		color: #fff;
		background-color: #AC2B37;
	}

	p {
		text-align: center;
	}

</style>