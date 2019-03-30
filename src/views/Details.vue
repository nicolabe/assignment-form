<template>
  <main>
    <h1>User details</h1>
    <div class="form-container">
      <UserForm
        v-on:notification="notification"
        v-bind:userData="userData"
        v-bind:extended="true"
      />
    </div>
  </main>
</template>

<script>
import UserForm from '../components/UserForm.vue'

export default {
 name: 'Details',
  components: {
    UserForm
  },
  data: function() {
    return {
      userData: {}
    }
  },
  methods: {
    notification(notification) {
      this.$emit("notification", notification);
    }
  },
  async created() {
    const userData = await localStorage.getItem("assignmentFormUser")
    if (userData) {
      this.userData = JSON.parse(userData)
    }
  }
}
</script>
