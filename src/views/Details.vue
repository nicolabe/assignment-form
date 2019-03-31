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
import { getLocalStorageItem } from "../utils/localStorage"

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
    this.userData = await getLocalStorageItem();
  }
}
</script>
