<template>
  <main>
    <h1>Summary</h1>
    <div class="summary-content">
      <p>First name: {{userData.firstName}}</p>
      <p>Last name: {{userData.lastName}}</p>
      <p>Email: {{userData.email}}</p>
      <div class="divider" />
      <div v-if="userData.details">
        <p>Address: {{userData.details.address}}</p>
        <p>Gender: {{userData.details.gender}}</p>
        <p>Purpose: {{userData.details.purpose}}</p>
        <p v-if="userData.details.activities">
          Activities: {{userData.details.activities.join(", ")}}
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import { getLocalStorageItem } from "../utils/localStorage"

export default {
  name: 'Summary',
  data: function() {
    return {
      userData: {}
    }
  },
  async created() {
    this.userData = await getLocalStorageItem()
  }
}
</script>

<style scoped>
  .divider {
    border-top: 1px solid #ccc;
  }

  p {
    font-weight: 300;
  }
</style>
