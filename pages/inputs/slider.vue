<template>
  <div>
    <h2>Slider</h2>
    <s-row>value: {{ value1 }}</s-row>
    <s-row padding="2rem 4rem">
      <s-slider
        v-bind:background="background"
        v-bind:disabled="dis"
        v-bind:label="label"
        v-model="value1"
        v-bind:color="color"
        v-bind:icon="icon"
        v-bind:icon-set="set"
        v-bind:description-text="descriptionT"
        v-bind:status="status"
        v-bind:statusAuto="aa"
        v-bind:statusBackground="statusBackground"
        v-bind:statusColor="statusColor"
        v-bind:statusIcon="statusIcon"
        v-bind:statusText="statusText"
        v-bind:iconAfter="iconAfter"
        v-bind:size="size + 'em'"
        v-bind:max="max"
        v-bind:min="min"
        v-bind:step="step"
        v-bind:type="type"
      />
    </s-row>
    <s-row padding="2rem 0" display="block">
      <s-input-color v-model="background" label="Background"> </s-input-color>
      <s-input-color v-model="statusBackground" label="Status Background">
      </s-input-color>
      <s-input-color v-model="color" label="Color"> </s-input-color>
      <s-input-number v-model="size" v-bind:color="color" label="Size">
      </s-input-number>

      <s-switch v-model="status" v-bind:color="color" label="status">
      </s-switch>
      <s-switch v-model="aa" v-bind:color="color" label="status Auto">
      </s-switch>
      <s-switch
        v-model="dis"
        v-bind:color="color"
        v-bind:label="'Disabled: ' + dis"
      >
      </s-switch>

      <s-input-color v-model="statusColor" label="status color" />
    </s-row>
    <h3>Unique properties</h3>
    <s-row padding="2rem 0" display="block">
      <s-input-number v-model="min" v-bind:color="color" label="Min" />
      <s-input-number v-model="max" v-bind:color="color" label="Max" />
      <s-input-number v-model="step" v-bind:color="color" label="Step" />
      <s-select v-model="type" v-bind:color="color" label="Type">
        <s-select-option value="solid" />
        <s-select-option value="dotted" />
      </s-select>
    </s-row>
    <s-row padding="20rem 0" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholder: 'Placeholder',
      labelPl: 'Label Placeholder',
      label: 'label',

      color: 'purple',
      icon: 'user',
      set: 'solid',
      dis: false,
      descriptionT: 'this is the description text',

      status: false,
      type: 'dotted',
      aa: false,
      statusBackground: '#8B0000',
      background: '#7782d4',
      statusColor: '#ff9900',
      statusIcon: 'times',
      statusText: ['status text', 'this is an error'],

      iconAfter: false,
      size: 1,
      min: 10,
      step: 5,
      max: 350,

      value1: [341, 40]
    }
  }
}
</script>

<style>
.space {
  margin-top: 0.1rem;
}
body {
  font-size: 16px;
}
</style>
