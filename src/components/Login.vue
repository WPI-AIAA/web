<template>

	<div id="login">
		<div v-if="displayIntro()">

			<h1> Lounge and Lab Login </h1>
			<button v-on:click="goToLogin('lounge')" type="button" class="btn btn-outline-primary btn-lg"> Lounge </button>
			<button v-on:click="goToLogin('lab')" type="button" class="btn btn-outline-primary btn-lg"> Lab </button>


			<p> Display Location Status Here! </p>

		</div>

		<router-view/>
	</div>

</template>

<script>

	export default {
		name: 'login',
		methods: {
			goToLogin: function(destination){
				this.$router.push("/login/" + destination);
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
	}

	p {
		text-align: center;
	}

</style>