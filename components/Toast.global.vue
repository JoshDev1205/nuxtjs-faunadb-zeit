<template>
  <transition name="fade" v-on:enter="enter">
    <div
      v-if="isActive"
      class="px-4 py-3 rounded"
      :class="statusStyles[status]"
      role="alert"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  props: {
    status: {
      type: String,
      default: "success"
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      statusStyles: {
        success: "bg-green-100 border border-green-400 text-green-700",
        error: "bg-red-100 border border-red-400 text-red-700"
      }
    };
  },
  methods: {
    enter(el, done) {
      setTimeout(() => {
        this.$emit("close");
      }, 3000);
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */

 {
  opacity: 0;
}
</style>
