<template>
  <main>
    <h1>Page 1</h1>
    <UserForm v-on:notification="notification" />
  </main>
</template>

<script>
import UserForm from '../components/UserForm.vue'

export default {
  name: 'Page1',
  components: {
    UserForm
  },
  methods: {
    notification(message) {
      console.log("notify")
      console.log(message);
      this.$emit("notification", message);
    }
  }
}
</script>
