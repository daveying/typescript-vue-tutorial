<template>
  <div id="app">
    <app-toolbar></app-toolbar>
      <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter"
import AppToolbar from "./components/AppToolbar"
import AppLogin from "./components/AppLogin"
export default {
  name: 'App',
  components:{AppFooter, AppToolbar}
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
</style>
