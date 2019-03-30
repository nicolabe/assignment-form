<template>
  <main>
    <h1>User registration</h1>
    <div>
      <UserForm v-on:notification="notification" />
    </div>
  </main>
</template>

<script>
import UserForm from '../components/UserForm.vue'

export default {
  name: 'Register',
  components: {
    UserForm
  },
  methods: {
    notification(message) {
      this.$emit("notification", message);
    }
  }
}
</script>
