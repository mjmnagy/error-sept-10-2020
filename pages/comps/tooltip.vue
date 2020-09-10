<template>
  <div>
    <h2>tooltip</h2>
    <s-row padding="4rem 0 0 0">
      <s-col xs="60" xs-offset="40">
        <s-tooltip
          v-bind:active.sync="act"
          v-bind:position="p"
          text="this is a tooltip"
          title="title"
          color="blue"
          text-color="yellow"
          >this is</s-tooltip
        >
      </s-col>
    </s-row>
    <s-row padding="2rem 0">
      <s-select v-model="p">
        <s-select-option
          v-for="po in pos"
          v-bind:key="po"
          v-bind:value="po"
          v-bind:text="po"
        >
          />
        </s-select-option>
      </s-select>
    </s-row>
    <s-row padding="2rem 0" display="block">
      <s-switch v-model="act" label="active" />
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p: 'top',
      act: false,
      auto: false,
      pos: ['top', 'left', 'bottom', 'right']
    }
  }
}
</script>
