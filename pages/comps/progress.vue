<template>
  <div>
    <h2>Progress {{ percent }}</h2>
    <s-progress
      v-bind:background="bg"
      v-bind:color="color"
      v-bind:continuous="cont"
      v-bind:percent="percent"
      v-bind:height="h + 'em'"
      >HEX</s-progress
    >

    <s-row padding="2rem 0" display="block">
      <s-switch v-model="cont" v-bind:color="color" v-bind:background="bg" />

      <s-input-color v-model="bg" label="background" />
      <s-input-color v-model="color" label="color" />

      <s-input-number v-model="h" v-bind:color="color" v-bind:background="bg" />
    </s-row>
  </div>
</template>

<script>
export default {
  beforeDestroy() {
    clearInterval(this.int)
  },
  data() {
    return {
      percent: 10,
      bg: '#F0F8FF',
      color: '#FF69B4',
      cont: false,
      h: 1
    }
  },
  mounted() {
    this.int = setInterval(() => {
      this.percent += 2
      if (this.percent == 100) {
        this.percent = 0
      }
    }, 500)
  }
}
</script>
