<template>

  <div id="app">

    <NavigationBar/>
    <router-view/>

  </div>

</template>


<script>

  import NavigationBar from './components/NavigationBar'

  export default {
    name: 'app',
    components: {
      NavigationBar
    }
  }

</script>


<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

p {
    text-align: justify;
    width: 60%;
    margin-left: 20%;
  }

</style>
