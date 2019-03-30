<template>
  <aside>
    <nav>
      <ul>
        <li v-bind:class="{active: 'register' === isActive}">
          <router-link to="/">Register</router-link>
        </li>
        <li v-bind:class="{active: 'details' === isActive}">
          <router-link to="/details">Details</router-link>
        </li>
        <li v-bind:class="{active: 'summary' === isActive}">
          <router-link to="/summary">Summary</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    isActive() {
      return this.$route.name
    }
  }
}
</script>

<style scoped>
  aside {
    height: 100%;
    position: fixed;
    width: 180px;
  }
  nav {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 300;
    border-right: 2px solid #ccc;
    height: 100%;
    padding-top: 16px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    transition: background-color 150ms linear;
  }

  a {
    text-decoration: none;
    color: #333;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  a:hover {
    color: #333;
  }

  li:hover {
    background-color: #ADD8E6;
  }

  .active {
    background: #ADD8E6;
  }
</style>
