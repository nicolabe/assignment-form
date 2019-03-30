<template>
  <div class="alert" v-bind:class="{error: notification.error}">
    <span>{{notification.message}}</span>
    <span class="close" v-on:click="close">X</span>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    notification: {}
  },
  methods: {
    close() {
      this.$emit("closeAlert")
    }
  }
}
</script>


<style scoped>
  .alert {
    background-color: #ADD8E6;
    height: 50px;
    padding: 0 16px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .error {
    background-color: #f8d7da;
  }

  .close {
    cursor: pointer;
  }
</style>

