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
    <div class="form-divide" v-if="extended">
      <div class="form-item">
        <label for="address">Address</label>
        <input type="text" id="address" v-model="address" maxlength="50" />
      </div>
      <div class="form-radio">
        <div class="form-radio-container">
          <input type="radio" id="male" value="Male" v-model="gender">
          <label for="male">Male</label>
        </div>
        <div class="form-radio-container">
          <input type="radio" id="female" value="Female" v-model="gender">
          <label for="female">Female</label>
        </div>
      </div>
      <div class="form-item">
        <label for="purpose">Purpose</label>
        <select v-model="purpose" id="purpose">
          <option disabled value="">Select one</option>
          <option>Business</option>
          <option>Pleasure</option>
          <option>Both</option>
        </select>
      </div>

      <div class="form-checkbox">
        <div class="form-checkbox-container">
          <input type="checkbox" id="football" value="Football" v-model="activities">
          <label for="football">Football</label>
        </div>
        <div class="form-checkbox-container">
          <input type="checkbox" id="basketball" value="Basketball" v-model="activities">
          <label for="basketball">Basketball</label>
        </div>
        <div class="form-checkbox-container">
          <input type="checkbox" id="tennis" value="Tennis" v-model="activities">
          <label for="tennis">Tennis</label>
          </div>
        <div class="form-checkbox-container">
          <input type="checkbox" id="esports" value="E-sports" v-model="activities">
          <label for="esports">E-sports</label>
        </div>
      </div>

    </div>
    <div class="form-item">
      <button type="submit">Save</button>
    </div>
  </form>
</template>

<script>
import { setLocalStorageItem } from "../utils/localStorage"
export default {
  name: "UserForm",
  props: {
    userData: Object,
    extended: Boolean
  },
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      gender: "",
      purpose: "",
      activities: []
    }
  },
  methods: {
    onSubmit() {
      const validationMessage = this.validateForm()
      if (validationMessage) {
        this.$emit("notification", {message: "Valiation failed: " + validationMessage, error: true})
        return false;
      }
      let userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      }
      if (this.extended) {
        userData = {
          ...userData,
          details: {
            address: this.address,
            gender: this.gender,
            purpose: this.purpose,
            activities: this.activities
          }
        }
      }
      setLocalStorageItem(userData)
      const message = this.extended ? "User successfully updated" : "User successfully created";
      this.$emit("notification", {message: message, error: false});

      if (this.$route.name === "register") {
        this.$router.push({name: "details"})
      } else if (this.$route.name === "details") {
        this.$router.push({name: "summary"})
      }
    },
    validateForm() {
      if (this.extended) {
        if (this.address.length > 50) {
          return "Address cannot be more than 50 characters"
        }
        if (!this.purpose) {
          return "Purpose must be selected"
        }
        if (this.activities.length === 0 || this.activities.length > 2) {
          return "You have to select atleast one activity, but no more than two"
        }
      }
      return ""
    }
  },
  watch: {
    userData: function(newVal) {
      if (newVal) {
        this.firstName = newVal.firstName;
        this.lastName = newVal.lastName;
        this.email = newVal.email;
        if (this.extended) {
          this.address = newVal.details.address;
          this.gender = newVal.details.gender;
          this.purpose = newVal.details.purpose;
          this.activities = newVal.details.activities;
        }
      }
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 450px;
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

  .form-radio {
    display: flex;
  }

  .form-radio-container:nth-child(1) {
    padding-right: 16px;
  }

  .form-checkbox {
    display: flex;
  }

  .form-checkbox-container {
    padding-right: 16px;
    display: flex;
    align-items: center;
  }

  button {
    align-items: flex-end;
    width: 70px;
    cursor: pointer;
  }

  .form-divide {
    border-top: 1px solid #ccc;
    margin-top: 16px;
  }
</style>


