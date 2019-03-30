<template>
  <div class="alert">
    <span>{{message}}</span>
    <span class="close" v-on:click="close">X</span>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    message: String
  },
  methods: {
    close() {
      this.$emit("closeAlert")
    }
  }
}
</script>


<style>
  .alert {
    background-color: #ADD8E6;
    height: 50px;
    padding: 0 16px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close {
    cursor: pointer;
  }
</style>

