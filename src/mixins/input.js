import _sizing from '@utilities/sizing'

export default {
  components: {
    'des-cr': () => import('../components/inputs/shared/desc'),
    'stat-us': () => import('../components/inputs/shared/status')
  },
  computed: {
    sIcon() {
      return this.statusIconDisplay && this.hoverIcon
        ? 'exclamationCircle'
        : this.statusIcon
    },
    sizeUnit() {
      return _sizing.unit(this.size)
    },
    sizeValue() {
      return _sizing.numeral(this.size)
    },
    statusIconDisplay() {
      return !this.statusAuto && this.statusText
    }
  },
  data() {
    return {
      hoverIcon: false,
      hoverx: false,
      isFocus: false,
      open: this.status
    }
  },
  methods: {
    close() {
      this.open = !this.open
    },
    dismiss() {
      if (this.status) {
        this.open = !this.open
        this.$emit('open', this.open)
      }
    },
    toggle() {
      this.hoverx = !this.hoverx
    },
    toggleIcon(event) {
      this.hoverIcon = event.type == 'mouseenter'
    }
  },
  props: {
    autofocus: {
      default: false,
      type: [Boolean, String]
    },
    background: {
      default: null,
      type: String
    },
    color: {
      default: null,
      type: String
    },
    descriptionText: {
      default: null,
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    icon: {
      default: null,
      type: String
    },
    iconSet: {
      default: null,
      type: String
    },
    label: {
      default: null,
      type: [String, Number]
    },
    size: {
      type: [Number, String],
      default: '1em',
      validator: value => {
        return _sizing.validate(value)
      }
    },
    status: {
      default: false,
      type: Boolean
    },
    statusAuto: {
      default: false,
      type: Boolean
    },
    statusBackground: {
      default: null,
      type: String
    },
    statusColor: {
      default: null,
      type: String
    },
    statusIcon: {
      default: 'exclamation',
      type: String
    },
    statusText: {
      default: null,
      type: [String, Array]
    }
  },
  watch: {
    status() {
      this.open = this.status
    }
  }
}
