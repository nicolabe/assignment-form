<template>
  <main>
    <h1>Summary</h1>
    <div class="summary-content">
      <p>First name: {{userData.firstName}}</p>
      <p>Last name: {{userData.lastName}}</p>
      <p>Email: {{userData.email}}</p>
      <div class="divider" />
      <p>Address: {{userDetails.address}}</p>
      <p>Gender: {{userDetails.gender}}</p>
      <p>Purpose: {{userDetails.purpose}}</p>
      <p v-if="userDetails.activities">Activities: {{userDetails.activities.join(", ")}}</p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Summary',
  data: function() {
    return {
      userData: {},
      userDetails: {}
    }
  },
  async created() {
    const userData = await localStorage.getItem("assignmentFormUser")
    if (userData) {
      this.userData = JSON.parse(userData)
    }
    const userDetails = await localStorage.getItem("assignmentFormUserDetails")
    console.log(userDetails)
    if (userDetails) {
      this.userDetails = JSON.parse(userDetails)
    }
  }
}
</script>

<style scoped>
  .divider {
    border-top: 1px solid #ccc;
  }
</style>
