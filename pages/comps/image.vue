<template>
  <div>
    <h2>Image</h2>
    <s-image
      ref="component"
      src="https://picsum.photos/400/400?image=21"
      v-bind:height="s + 'px'"
      v-bind:width="s + 'px'"
    ></s-image>
    <s-row padding="2rem 0" display="block">
      <s-input-number step="10" v-model="s" />
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      s: 100
    }
  }
}
</script>

<style></style>
