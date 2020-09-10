<template>
  <autoStat v-if="auto" v-bind="{ color: $props.color, text: $props.text }">
    <slot />
  </autoStat>
  <hiddenStat v-else v-bind="$props">
    <slot />
  </hiddenStat>
</template>

<script>
export default {
  components: {
    autoStat: () => import('./auto'),
    hiddenStat: () => import('./hidden')
  },
  computed: {
    parent() {
      return this.$parent
    }
  },
  data() {
    return {
      open: this.active
    }
  },
  props: {
    auto: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    text: {
      type: [String, Array],
      default: null
    }
  }
}
</script>

<style></style>
