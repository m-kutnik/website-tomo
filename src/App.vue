<template>
  <div id="app">
    <app-header/>
    <app-content/>
    <app-footer/>
    <app-cookies/>
  </div>
</template>

<script>
const AppContent = () => import("@/components/AppContent")
const AppHeader = () => import("@/components/AppHeader")
const AppFooter = () => import("@/components/AppFooter")
const AppCookies = () => import("@/components/AppCookies")

export default {
  name: "App",
  components: {
    AppContent,
    AppHeader,
    AppFooter,
    AppCookies,
  },
}
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 5000px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
