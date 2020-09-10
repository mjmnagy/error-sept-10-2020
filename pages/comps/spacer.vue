<template>
  <s-spacer ref="component" padding="5rem" v-bind:color="color">
    <s-col width="4" background="blue">
      this is the row
    </s-col>
  </s-spacer>
</template>

<script>
export default {
  data() {
    return {
      color: 'red'
    }
  }
}
</script>
