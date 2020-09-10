<template>
  <transition name="bounce" v-if="isActive">
    <div class="status-tip" v-bind:style="styleContainer">
      <div class="pointer" v-bind:style="stylePointer"></div>
      <div class="status-content">
        <slot>
          <div class="status-display" v-show="icon">
            <slot name="icon">
              <s-icon v-bind:icon="icon" v-bind:color="color" size="3rem" />
            </slot>
          </div>
          <div class="status-info">
            <slot name="statustitle" />
            <statusList v-bind:color="color" />
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
import _color from '@utilities/colors'

export default {
  beforeDestroy() {
    document.removeEventListener('scroll', this.close)
  },
  components: {
    statusList: () => import('./list')
  },
  computed: {
    bg() {
      return _color.getColor(this.background)
    },
    border() {
      return _color.adjust(-0.3, this.background)
    },
    isActive() {
      return this.active && this.text != null
    },
    isIconAfter() {
      return this.$parent.parent.iconAfter
    },
    styleContainer() {
      return {
        background: this.bg,
        'border-color': this.border,
        top: this.pos.top + this.pos.height + this.increment + 'px',
        'max-width': 'fit-content',
        'z-index': this.zIndex,
        right: !this.isIconAfter ? 0 : null
      }
    },
    stylePointer() {
      return {
        background: this.bg,
        'border-color': this.border,
        right: `${
          !this.isIconAfter
            ? this.dim.width - this.pos.left + this.pos.width / 2
            : this.pos.right - this.increment
        }px`,
        'z-index': this.zIndex + this.increment
      }
    }
  },
  data() {
    return {
      dim: {
        width: 0
      },
      increment: 10,
      pos: {
        height: 0,
        left: 0,
        top: 0,
        width: 0
      },
      zIndex: 0
    }
  },
  methods: {
    close() {
      if (this.active) {
        this.$parent.parent.close()
      }
    },
    setProp(ref, dataProp) {
      this[dataProp] = this.$parent.parent.$refs[ref].getBoundingClientRect()
    },
    setValArea() {
      let ref = 'valArea'
      if (this.$parent.parent.$refs[ref]) {
        this.setZIndex(ref)
        this.setProp(ref, 'pos')
      }
    },
    setZIndex(ref) {
      this.zIndex = !isNaN(
        parseInt(this.$parent.parent.$refs[ref].style.zIndex)
      )
        ? this.$parent.parent.$refs[ref].style.zIndex + this.increment
        : this.increment
    }
  },
  mounted() {
    document.addEventListener('scroll', this.close)
  },
  props: {
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
  },
  watch: {
    active(a) {
      if (a) {
        this.setValArea()
        if (this.$parent.parent.$refs.input) {
          this.setProp('input', 'dim')
        }
      }
    },
    isIconAfter() {
      this.setValArea()
    }
  }
}
</script>

<style scoped>
/* Container */
.status-tip {
  border-radius: 0.4187rem;
  border-style: solid;
  border-width: 0.1rem;
  position: fixed;
  -webkit-box-shadow: 0 0.4167rem 1.67rem 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.4167rem 1.67rem 0 rgba(0, 0, 0, 0.1);
  max-width: 100%;
  width: fit-content;
}
.status-tip:after,
.status-tip:before {
  content: '';
  position: absolute;
}

.status-content {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}
.status-display {
  order: 1;
  padding: 0.25rem;
}
.status-info {
  order: 2;
  padding-right: 0.25rem;
}

/* Pointer */
.pointer {
  order: 1;
  position: absolute;
  width: 0.6rem;
  height: 0.6rem;
  display: block;
  background: #fff;
  border-top-style: solid;
  border-left-style: solid;
  border-width: 0.1rem;
  transform: rotate(45deg) translate(-0.5rem);
  box-sizing: border-box;
}

/* Transition */
.bounce-enter-active {
  animation: bounce-in 0.25s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
