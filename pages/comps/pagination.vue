<template>
  <div>
    <h2>Pagination</h2>
    <s-pagination
      v-bind:total="total"
      v-bind:max="max"
      v-model="currentx"
      v-bind:background="b"
      v-bind:color="c"
      v-bind:goto="true"
    ></s-pagination>
    <s-row padding="2rem 0" display="block">
      <s-input-color v-model="b" label="background" />
      <s-input-color v-model="c" label="color" />
      <s-input-number v-model="max" label="max" />
      <s-input-number v-model="total" label="total" />
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      b: '#FF00FF',
      c: '#2ac0b6',
      currentx: 10,
      max: 4,
      total: 100
    }
  }
}
</script>

<style></style>
