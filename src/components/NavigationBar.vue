<template>

	<div id="navigationBar">
		
		<nav class="navbar navbar-expand-lg navbar-light bg-light">

		  <router-link class="navbar-brand" to="/"> <img src="/static/WPI.png"> </router-link>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		    <div class="navbar-nav">
		      <router-link class="nav-item nav-link" to="/">Home</router-link>
		      <router-link class="nav-item nav-link" to="/about">About</router-link>
		      <router-link class="nav-item nav-link" to="/resources">Resources</router-link>
		      <router-link class="nav-item nav-link" to="/login">Login</router-link>
		    </div>
		  </div>

		</nav>

		<div id="buffer"/>

	</div>

</template>

<script>

	export default {
		name: 'navigationBar'
	}

</script>

<style scope>

	#buffer {
		margin: 30px;
	}

	nav {
		background-color: #222222;
	}

	img {
		width: 100px;
	}

</style>