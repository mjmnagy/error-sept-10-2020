<template>
  <div>
    <h2>Button</h2>
    <s-row padding="2rem">
      <s-col xs-offset="45" xs="10">
        <s-button
          v-bind:background="bg"
          v-bind:color="c"
          v-bind:radius="ra"
          v-bind:type="o"
          icon="building"
          v-bind:size="s + 'em'"
          v-bind:icon-after="ia"
          >Button</s-button
        >
      </s-col>
    </s-row>
    <s-row padding="2rem 0" display="block">
      <s-switch v-model="ia" color="red" label="icon after" />
      <s-switch v-model="ra" color="red" label="radius" />
      <s-input-color v-model="bg" label="background" />
      <s-input-color v-model="c" label="color" />
      <s-input-number v-model="s" label="size" />
      <s-select label="Style" v-bind:color="c" v-model="o">
        <s-select-option
          :key="index"
          :value="icon"
          :text="icon"
          v-for="(icon, index) in options"
        />
      </s-select>
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bg: null, //'#2ac0b6',
      c: null, //'#ff0080',
      s: 1,
      ia: true,
      ra: false,
      o: 'relief',
      options: ['border', 'filled', 'flat', 'line', 'relief']
    }
  }
}
</script>

<style></style>
