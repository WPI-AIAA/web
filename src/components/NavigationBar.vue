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

		  <div v-if="showLabStatus()">

		  	<span>
		  		<span class="btn btn-disable"> 
		  			Lounge 
		  			<span v-if="getStatus('lounge')" class="badge badge-success"> Open </span> 
		  			<span v-else class="badge badge-danger"> Closed </span>
		  		</span>
		  	</span>

		  	<span>
		  		<span class="btn btn-disable"> 
		  			Lab
		  			<span v-if="getStatus('lab')" class="badge badge-success"> Open </span>
		  			<span v-else class="badge badge-danger"> Closed </span>

		  		</span>
		  	</span>

		  </div>

		</nav>

		<div id="buffer"/>

	</div>

</template>

<script>

	export default {
		name: 'navigationBar',
		methods: {

			// Determine if the Lab status should be displayed
			showLabStatus: function(){
				// Change "blank" later if need be
				if(this.$route.name != "blank"){
					return true;
				} else {
					return false;
				}
			},

			// Determine if the Lounge/Lab is open or closed
			getStatus: function(location){
				// Figure out later
				if(location == "lounge"){
					return true;
				} else if(location == "lab") {
					return false;
				} else {
					return false;
				}
			}
		}

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

	.btn-disable {
		width: 160px;
		background-color: #A9B0B7;
		margin: 5px;
	}

</style>