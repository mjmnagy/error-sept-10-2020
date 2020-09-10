<template>
  <transition name="fade">
    <div class="the-input-text span-input-text" v-show="show">
      <span class="span-input-text">{{ text }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'InputDesc',
  //Config
  data() {
    return {
      show: !this.animation
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.show = true
    })
  },
  props: {
    animation: {
      type: Boolean,
      default: true
    },
    text: {
      type: [Number, String],
      required: true
    }
  },
  watch: {
    animation() {
      this.show = !this.animation
    }
  }
}
</script>

<style scoped>
.the-input-text {
  position: relative;
  overflow: hidden;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  font-size: 0.75rem;
}
.span-input-text {
  padding: 0.1667rem 0.333rem;
  padding-bottom: 0.333rem;
  display: block;
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
