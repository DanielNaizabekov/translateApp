<template>
  <div class="notification is-warning is-light has-text-centered">
    No such page exists.
    <a @click="goToHome">Go to home</a>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' })
    },
  },
}
</script>