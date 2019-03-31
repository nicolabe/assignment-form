<template>
  <main>
    <h1>User registration</h1>
    <div class="form-container">
      <UserForm
        v-on:notification="notification"
        v-bind:userData="userData"
      />
      <div class="button-container">
        <button class="load-button" v-on:click="loadUserData">Load Data</button>
      </div>
    </div>
  </main>
</template>

<script>
import UserForm from '../components/UserForm.vue'
import { getLocalStorageItem } from "../utils/localStorage"
import axios from "axios"

export default {
  name: 'Register',
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
    },
    loadUserData() {
      axios.get("/api/user")
      .then(res => this.userData = res.data)
      .catch(error => this.$emit("notification", error))
    }
  },
  async created() {
    this.userData = await getLocalStorageItem()
  }
}
</script>

<style scoped>
  .form-container {
    display: flex;
  }

  .button-container {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .load-button {
    width: 80px;
  }
</style>

