<template>
  <div>
    <h2>Icon</h2>
    <s-icon
      v-bind:icon="icon"
      v-bind:set="iconSet"
      v-bind:size="s + 'em'"
      v-bind:color="c"
      v-bind:round="r"
    ></s-icon>

    <s-row padding="2rem 0" display="block">
      <s-input-number v-model="s" />
      <s-switch v-model="r" />
      <s-input-color v-model="c" />
    </s-row>
    <s-select label="Icon" v-bind:color="c" v-bind:icon="icon" v-model="icon">
      <s-select-option
        :key="index"
        :value="icon"
        :text="icon"
        v-for="(icon, index) in options"
      />
    </s-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: 'lemon',
      iconSet: 'light',
      s: 1,
      r: false,
      b: '#31d245',
      c: '#31d245',
      options: [
        'lemon',
        'bell',
        'unicorn',
        'wind',
        'hat-wizard',
        'wreath',
        'waveform'
      ]
    }
  }
}
</script>

<style></style>
