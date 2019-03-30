<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Page 1</router-link>
      </li>
      <li>
        <router-link to="/page2">Page 2</router-link>
      </li>
      <li>
        <router-link to="/page3">Page 3</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
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
  }

  li:hover {
    background-color: #ADD8E6;
  }
</style>
