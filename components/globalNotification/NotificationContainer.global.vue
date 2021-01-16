<template>
  <div>
    <div v-if="notifications.length > 0">
      <div
        v-for="notification in notifications"
        id="notificationContainer"
        :key="notification.id"
        class="notification-container bg-white shadow-xl m-5 border border-gray-300 rounded-md w-96 z-50"
      >
        <NotificationBar :notification="notification" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import gsap from 'gsap'
import NotificationBar from './NotificationBar.vue'

export default {
  components: {
    NotificationBar,
  },
  computed: mapState('notificationModule', ['notifications']),

  updated() {
    gsap.from('#notificationContainer', {
      duration: 0.3,
      opacity: 0,
      y: 300,
      stagger: {
        from: 'edges',
      },
    })
  },
}
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 0;
  right: 35%;
}
</style>
