<template>
  <div id="nav">
    <img src="./assets/backlog.png" alt="backlog logo" width="302" height="84">
    <div class="btn">
      <Menu />
    </div>
  </div>
  <div id="main">
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/HeaderMenu.vue'
export default {
  components: {Menu}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: lightgoldenrodyellow;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#nav {
  padding: 20px 30px;
  width: 100%;
  height: 100px;
  background: #00d4aa;
  display: flex;
  justify-content: space-between;
}

#nav img {
  width: 200px;
  height: auto;
}

#nav .btn {
  align-self: flex-end;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#main {
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 100px);
  overflow-y: scroll;
}
</style>
