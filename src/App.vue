<template>
	<div id="app">
		<router-view></router-view>
		<MainTabBar/>
	</div>
</template>
<script>

import MainTabBar from './components/MainTarBar.vue'

	export default {
		name: 'App',
		components: {
			MainTabBar
		}
	}
</script>
<style>
	@import url("./assets/css/base.css");
</style>
