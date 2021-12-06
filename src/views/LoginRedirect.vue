<template>
  <div> loading... </div>
</template>

<script>
export default {
  created () {
    const token = this.$route.query.token
    this.$router.push({
      name: 'Dashboard',
      params: { token }
    })
  }
}
</script>
