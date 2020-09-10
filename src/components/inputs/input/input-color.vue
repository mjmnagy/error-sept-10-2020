<template>
  <div
    v-bind:class="['s-input-color', { disabled: disabled }]"
    v-on:mouseenter="toggle()"
    v-on:mouseleave="toggle()"
  >
    <slot name="label">
      <label
        v-if="label"
        class="s-input--label"
        for=""
        v-bind:style="labelStyle"
        v-on:click.prevent="focusInput"
      >
        {{ label }}

        <transition name="icon-validate">
          <span
            v-if="status"
            ref="valArea"
            v-on:mouseenter.stop="toggleIcon($event)"
            v-on:mouseleave.stop="toggleIcon($event)"
            v-on:click.stop="dismiss()"
            class="validate-area"
          >
            <slot name="validate">
              <s-icon
                v-bind:icon="sIcon"
                v-bind:set="iconSet"
                v-bind:color="statusColor"
                ref="icon"
              ></s-icon>
            </slot>
          </span>
        </transition>
      </label>
    </slot>

    <slot name="before"></slot>

    <div class="s-con-input">
      <input
        ref="input"
        v-model="val"
        v-bind="$attrs"
        type="color"
        v-bind:autofocus="autofocus"
        v-bind:style="inputStyle"
        class="s-input-color--input"
        v-on="listeners"
      />

      <transition name="placeholderx">
        <span
          ref="spanplaceholder"
          v-bind:style="placeholderStyle"
          class="the-input-placeholder"
          v-on:click="focusInput"
        >
          {{ val }}
        </span>
      </transition>
    </div>

    <stat-us
      v-bind:auto="statusAuto"
      v-bind:active="open"
      v-bind:background="statusBackground"
      v-bind:color="statusColor"
      v-bind:icon="statusIcon"
      v-bind:text="statusText"
      v-on:close="close()"
    >
      <slot name="statustitle" />
    </stat-us>

    <slot name="after">
      <des-cr v-if="descriptionText" v-bind:text="descriptionText"></des-cr>
    </slot>
  </div>
</template>

<script>
import _color from '@utilities/colors'
import input from '@mixins/input'

export default {
  name: 'InputColor',
  //Config
  computed: {
    colr() {
      return this.val ? _color.getColor(this.val, 1) : 'rgba(0, 0, 0, 0.7);'
    },
    inputStyle() {
      let border = `${0.05 * this.sizeValue + this.sizeUnit} solid`
      let style = {
        'font-size': this.size,
        height: this.sizeValue + 1.35 + this.sizeUnit,
        color: this.thecolor,
        border: `${border} ${this.colr}`
      }

      if (this.isFocus) {
        style['-webkit-box-shadow'] = `0 0.25rem 0.833rem 0 rgba(0, 0, 0, 0.15)`
        style['box-shadow'] = `0 0.25rem 0.833rem 0 rgba(0, 0, 0, 0.15)`
      }

      if (this.status && this.statusColor) {
        style.border = `${border}  ${this.thecolor}`
      }

      return style
    },
    labelStyle() {
      return { color: this.thecolor }
    },
    listeners() {
      return {
        ...this.$listeners,
        input: evt => {
          this.$emit('input', evt.target.value)
        },
        focus: evt => {
          this.$emit('focus', evt)
          this.changeFocus(true)
        },
        blur: evt => {
          this.$emit('blur', evt)
          this.changeFocus(false)
        }
      }
    },
    placeholderStyle() {
      let style = {}
      if (this.value) {
        style.color = _color.adjust(0.75, this.val)
      } else {
        style.display = 'none'
      }

      return style
    },
    thecolor() {
      if (this.status && this.statusColor) {
        return _color.getColor(this.statusColor, 1)
      } else if (this.isFocus || this.hoverx) {
        return this.colr
      }
    }
  },
  data() {
    return {
      iconAfter: true,
      isFocus: false,
      org: null,
      val: this.value || this.color
    }
  },
  inheritAttrs: false,
  methods: {
    changeFocus(booleanx) {
      this.isFocus = booleanx
    },
    focusInput() {
      this.changeFocus(true)
      this.$refs.input.click()
    }
  },
  mixins: [input],
  props: {
    value: {
      default: null,
      type: [String]
    }
  },
  watch: {
    value() {
      this.val = this.value
    }
  }
}
</script>

<style scoped>
.s-input--label {
  color: rgba(0, 0, 0, 0.7);
  display: block;
  width: 100%;
  cursor: pointer;
}

.s-con-input {
  margin-right: 0.45rem;
}

.s-input-color {
  margin-top: 0.1rem;
  position: relative;
  display: block;
  width: 100%;
  height: calc(100% - 0.2rem);
}

.validate-area {
  padding: 0.1rem 0.2rem 0.2rem 0.15rem;
  border-style: solid;
  border-radius: 0.4167rem;
  position: relative;
  top: -0.5rem;
}

.validate-area .s-icon {
  vertical-align: middle;
}

.disabled {
  cursor: default;
  pointer-events: none;
  opacity: 0.5;
}

.s-input-color--input {
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  width: calc(100% - 0.4rem);
  min-width: 3.33rem;
  border: 0;
  border-radius: 0.4167rem;
  text-align: center;
  background: transparent;
  -moz-appearance: textfield;
  padding: 0.2rem;
  margin: 0;
}

.s-input-color--input:focus {
  outline: none;
}

.the-input-placeholder {
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  position: absolute;
  border-radius: 0.4167rem;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.7);
  white-space: nowrap;
  cursor: text;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-flex;
  align-items: center;
  height: 100%;
  top: 0;
  margin-left: 1rem;
}

/* Transition */
.icon-validate-enter,
.icon-validate-leave-to {
  opacity: 0;
  -webkit-transform: scale(0.5) !important;
  transform: scale(0.5) !important;
}

.placeholderx-enter,
.placeholderx-leave-to {
  opacity: 0;
  -webkit-transform: translate(1.25rem) !important;
  transform: translate(1.25rem) !important;
}
</style>
