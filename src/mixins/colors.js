import _color from '../utilities/colors'

export default {
  computed: {
    bg() {
      let bg

      if (this.background) {
        bg = this.background
      } else if (this.$parent.background) {
        bg = this.$parent.bg
      }
      return _color.getColor(bg)
    },
    clr() {
      let c

      if (this.color) {
        c = this.color
      } else if (this.$parent.color) {
        c = this.$parent.color
      }
      return _color.getColor(c)
    }
  },
  props: {
    background: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    }
  }
}
