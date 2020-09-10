<template>
  <div>
    <h2>Chip</h2>
    <s-chip
      v-bind:closable="c"
      v-bind:background="tcolor"
      v-bind:color="color"
      v-bind:text-color="tcolor"
      v-bind:active.sync="active"
      close-icon="times"
    >
      <s-avatar
        src="https://randomuser.me/api/portraits/men/16.jpg"
        size="2rem"
      />
      Closable chip
    </s-chip>

    <s-row padding="2rem 0" display="block">
      <s-input-color v-model="color" label="color" />
      <s-input-color v-model="tcolor" label="bg" />
      <s-switch v-model="c" />
      <s-switch v-model="active" />
    </s-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: true,
    c: true,
    color: '#00BFFF',
    tcolor: '#ffffff',
    size: 1
  })
}
</script>

<style></style>
