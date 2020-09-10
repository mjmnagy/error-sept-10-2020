<template>
  <s-row display="block">
    <h2>Divider</h2>
    <s-row padding="2rem 0">
      <s-divider
        v-bind:background="b"
        v-bind:color="c"
        v-bind:position="p"
        icon="star"
        v-bind:size="s + 'em'"
      >
        <p style="text-size:4rem">My Text</p>
      </s-divider>
    </s-row>
    <s-row padding="2rem 0" display="block">
      <s-input-color v-model="b" label="background" />
      <s-input-color v-model="c" label="color" />
      <s-input-number step=".1" v-model="s" label="size" />

      <s-select label="Type" v-bind:color="c" v-model="p">
        <s-select-option
          :key="index"
          :value="icon"
          :text="icon"
          v-for="(icon, index) in options"
        />
      </s-select>
    </s-row>
  </s-row>
</template>

<script>
export default {
  data() {
    return {
      b: '#2ac0b6',
      c: '#6f23c2',
      s: 0.11,
      p: 'left',
      options: ['left', 'right', 'left-center', 'right-center']
    }
  }
}
</script>

<style></style>
