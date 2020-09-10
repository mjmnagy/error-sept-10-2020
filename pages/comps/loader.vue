<template>
  <div>
    <s-row>
      <s-col xs-offset="20" xs="60">
        <s-col
          offset="2"
          width="3"
          color="red"
          v-bind:style="{ height: '300px', position: 'relative' }"
        >
          <s-loader
            v-bind:active="a"
            v-bind:background="b"
            v-bind:color="c"
            v-bind:effect="o"
            v-bind:size="s + 'em'"
            text="Loading"
            text-after
            >this slot</s-loader
          >
        </s-col>
      </s-col>
    </s-row>

    <s-row padding="2rem 0" display="block">
      <s-input-number v-model="s" label="size" />
      <s-switch v-model="a" label="active" />
      <s-switch v-model="r" />
      <s-input-color v-model="c" label="color" />
      <s-input-color v-model="b" label="background" />
    </s-row>
    <s-select label="Effect" v-model="o" v-bind:color="c" icon="snowman">
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
      s: 1,
      a: true,
      r: false,
      b: '#31d245',
      c: '#8080ff',
      o: 'border',
      options: ['border', 'corners', 'point', 'square', 'sound']
    }
  }
}
</script>
