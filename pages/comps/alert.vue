<template>
  <div>
    <h2>Alert</h2>
    <s-alert
      title="HEX"
      v-bind:active="active"
      v-bind:animation="ani"
      v-on:update:active="active = !active"
      v-bind:background="bg"
      v-bind:color="color"
      closable
      v-bind:opacity="op"
      icon="times"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat
    </s-alert>

    <s-row padding="2rem 0" display="block">
      <s-switch v-model="active" v-bind:color="color" label="Active" />

      <s-switch
        v-model="ani"
        v-bind:color="color"
        on="Animation"
        label="Animation"
      />
      <s-input-color v-model="color" label="color" />
      <s-input-color v-model="bg" label="bg" />

      <s-input-number
        v-model="op"
        step=".05"
        min="0"
        max="1"
        label-placeholder="opacity"
      />
      {{ op }}
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      ani: true,
      bg: '#ff0080',
      color: '#842993',
      op: 0.15
    }
  },
  methods: {
    clicked() {
      alert('Clicked: event -> update:active')
    }
  }
}
</script>

<style></style>
