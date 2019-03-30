<template>
  <div id="app">
    <div id="sidebar">
      <Sidebar />
    </div>
    <div id="content">
      <Alert
        v-if="notification.message"
        v-bind:notification="notification"
        v-on:closeAlert="closeAlert"
      />
      <router-view
        v-on:notification="onNotification"
      />
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
      notification: {}
    }
  },
  components: {
    Sidebar,
    Alert
  },
  methods: {
    onNotification(notification) {
      this.notification = notification;
    },
    closeAlert() {
      this.notification = {};
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
  width: 1000px;
}

#sidebar {
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
}

#content {
  flex: 5;
  padding: 32px;
}

h1 {
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 300;
  margin: 0;
}
</style>
