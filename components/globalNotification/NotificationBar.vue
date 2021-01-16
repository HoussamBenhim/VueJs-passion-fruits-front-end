<template>
  <div :class="notificationTypeClass">
    <div id="notificationBar" class="px-5 py-2 shadow-3xl z-50">
      <div class="flex items-start">
        <BaseIcon name="alert-circle" :color="iconColor" />
        <h1 class="text-gray-800 font-bold ml-4">
          {{ notification.tittle }}
        </h1>
      </div>
      <p class="text-md text-sm">{{ notification.message }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeOut: null,
    }
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`
    },
    iconColor() {
      return this.notification.type === 'error' ? 'red' : 'green'
    },
  },
  mounted() {
    this.timeOut = setTimeout(() => this.remove(this.notification), 3000)
  },
  beforeUnmount() {
    clearTimeout(this.timeOut)
  },
  methods: {
    ...mapActions('notificationModule', ['remove']),
  },
}
</script>

<style scoped>
.-text-error {
  background-color: rgb(245, 178, 178);
}

.-text-success {
  background-color: rgb(175, 245, 175);
}
</style>
