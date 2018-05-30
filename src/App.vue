<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="menu">
      <ul>
        <li>
          <router-link to="/" exact>首页</router-link>
        </li>
        <li>
          <router-link to="/info">介绍</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted(){
  }
}

</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .menu {
    width: 50%;
    margin: 0 auto;
    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-around;
    }
  }
}
.lactive {
  color: red;
}
</style>
