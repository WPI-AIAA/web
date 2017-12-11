<template>

	<div>
		<img :src="getLogo()">

		<div v-if="showNewUser()">
			<AddUser/>
		</div>
		<div v-else>
			<IdInput/>
			<UserList/>
		</div>


	</div>

</template>

<script>

	import IdInput from './IdInput'
	import UserList from './UserList'
	import AddUser from './AddUser'

	export default {
		name: 'lounge',
		data() {
			return{
				name: 'AeroLounge'
			}
		},
		components: {
			IdInput,
			UserList,
			AddUser
		},
		methods: {
			getLogo: function(){
				return '/static/' + this.name + '.png';
			},
			// Checks if the New User Dialoge should be displayed
			showNewUser: function(){
				return false;
			},
			registerUser: function(){
				//Gets triggered by unknown id swipe
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