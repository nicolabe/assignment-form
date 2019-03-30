<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="form-item">
      <label for="firstname">First name</label>
      <input type="text" id="firstname" v-model="firstName" />
    </div>
    <div class="form-item">
      <label for="lastname">Last name</label>
      <input type="text" id="lastname" v-model="lastName" />
    </div>
    <div class="form-item">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="form-item">
      <button type="submit">Save</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "UserForm",
  props: {
    userData: Object
  },
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: ""
    }
  },
  methods: {
    onSubmit() {
      localStorage.assignmentFormUser = JSON.stringify({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      });
      this.$emit("notification", "User succesfully created");
    }
  },
  watch: {
    userData: function(newVal) {
      this.firstName = newVal.firstName;
      this.lastName = newVal.lastName;
      this.email = newVal.email;
    }
  }
}
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    width: 400px;
  }

  label {
    text-transform: uppercase;
    font-weight: 300;
  }

  .form-item {
    display: flex;
    flex-direction: column;
    padding: 12px 0;
  }

  button {
    align-items: flex-end;
    width: 70px;
    cursor: pointer;
  }
</style>


