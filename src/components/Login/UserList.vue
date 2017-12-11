<template>

	<div id="userList">

		<ul class="list-group">
			<li class="list-group-item active" id="listHeader"> Who is currently logged in? </li>
			<li class="list-group-item"> John (Buck) Doe </li>
			<li v-for="user in userList" class="list-group-item"> {{user.firstName}} {{user.nickName}} {{user.lastName}} </li>
		</ul>

	</div>

</template>

<script>

	export default{
		name: 'userList',
		data() {
			return {
			}
		},
		methods: {

		}
	}


</script>

<style scoped>

	ul {
		font-size: 16pt;
		width: 30%;
		margin-left: 35%;
		margin-top: 30px;
	}

	#listHeader {

		font-size: 16pt;
		background-color: #AC2B37;
		border-color: rgba(0,0,0,.125);
	}

</style>