const icon = (icon = null, set = null) => {
  return {
    props: {
      icon: {
        type: String,
        default: icon
      },
      iconSet: {
        type: String,
        default: set
      }
    }
  }
}

export default icon
