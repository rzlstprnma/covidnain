<template>
  <div id="app">
    <Nav/>
    <!-- <Home/> -->
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/layout/Nav.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>
