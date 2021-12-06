<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <h1>Token: {{ token }}</h1>
    <router-link to="/">Login</router-link>
  </div>
</template>

<script>
export default {
  props: {
    token: { type: String, default: null }
  }
}
</script>
