<template>
  <transition name="fade" v-if="isActive">
    <div class="cont">
      <slot />
      <statusList v-bind:color="color" />
    </div>
  </transition>
</template>

<script>
export default {
  components: {
    statusList: () => import('./list')
  },
  computed: {
    color() {
      return this.$parent.parent.thecolor
    },
    isActive() {
      return this.$parent.parent.status && this.text != null
    }
  },
  data() {
    return {}
  },
  methods: {},
  props: {
    text: {
      type: [String, Array],
      default: null
    }
  }
}
</script>

<style>
/* Position */
.cont .list__item {
  font-size: 0.75rem;
  line-height: 0.8rem;
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
