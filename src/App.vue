<template>
  <div id="app">
    <div id="sidebar">
      <Sidebar />
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: "App",
  components: {
    Sidebar
  }
}
</script>


<style>
body {
  margin: 0;
  height: 100vh;
}

#app {
  font-family: Roboto;
  display: flex;
  height: 100%;
}

#sidebar {
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
}

#content {
  flex: 7;
  padding: 32px;
}

h1 {
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 300;
  margin: 0;
}
</style>
