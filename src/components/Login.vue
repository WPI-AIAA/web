<template>

	<div>
		<div v-if="true">

			<h1> Lounge and Lab Login </h1>
			<button v-on:click=""> Lounge </button>
			<button v-on:click=""> Lab </button>

			<p> Display Lab Status Here! </p>

		</div>

		<router-view/>
	</div>

</template>

<script>

	export default {
		name: 'login',
	}

</script>

<style>

	p {
		text-align: center;
	}

</style>