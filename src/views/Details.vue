<template>
  <main>
    <h1>User details</h1>
    <div class="form-container">
      <UserForm
        v-on:notification="notification"
        v-bind:userData="userData"
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
  created() {
    console.log("mounted");
  }
}
</script>
