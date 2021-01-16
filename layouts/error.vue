<template>
  <div class="text-center">
    <p class="error">404</p>
    <h1 v-if="error.statusCode === 404" class="mb-8">Page not found</h1>
    <h1 v-else class="mb-8">An error occurred</h1>
    <nuxt-link to="/" class="text-lg font-bold text-secondary">
      revenir à la page d'acceuil
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    },
  },
  head() {
    return {
      title: this.message,
    }
  },
}
</script>
<style scoped>
.error {
  font-size: 120px;
}
</style>
