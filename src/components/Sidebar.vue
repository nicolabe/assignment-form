<template>
  <aside>
    <nav>
      <ul>
        <li>
          <router-link to="/">Register</router-link>
        </li>
        <li>
          <router-link to="/details">Details</router-link>
        </li>
        <li>
          <router-link to="/activities">Activities</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
  aside {
    height: 100%;
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
</style>
