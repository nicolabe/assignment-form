<template>
  <div id="app">
    <div id="sidebar">
      <Sidebar />
    </div>
    <div id="content">
      <Alert
        v-if="notificationMessage"
        v-bind:message="notificationMessage"
        v-on:closeAlert="closeAlert"
      />
      <router-view v-on:notification="onNotification" />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Alert from '@/components/Alert.vue'

export default {
  name: "App",
  data: function() {
    return {
      notificationMessage: ""
    }
  },
  components: {
    Sidebar,
    Alert
  },
  methods: {
    onNotification(message) {
      this.notificationMessage = message;
    },
    closeAlert() {
      this.notificationMessage = "";
    }
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
  width: 900px;
}

#sidebar {
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
}

#content {
  flex: 4;
  padding: 32px;
}

h1 {
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 300;
  margin: 0;
}
</style>
