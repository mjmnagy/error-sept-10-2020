<template>
  <div>
    <h2>Input Number</h2>
    <s-row>value: {{ value1 }}</s-row>
    <s-row padding="2rem 4rem">
      <s-input-number
        v-bind:background="background"
        v-bind:btnBackground="btnBackground"
        v-bind:disabled="dis"
        v-bind:label="label"
        v-model="value1"
        v-bind:color="color"
        v-bind:icon="icon"
        v-bind:icon-set="set"
        v-bind:min="min"
        v-bind:max="max"
        v-bind:description-text="descriptionT"
        v-bind:status="status"
        v-bind:step="step"
        v-bind:statusAuto="aa"
        v-bind:statusBackground="statusBackground"
        v-bind:statusColor="statusColor"
        v-bind:statusIcon="statusIcon"
        v-bind:statusText="statusText"
        v-bind:size="size + 'em'"
      >
        <span slot="statustitle">
          <u>Error</u>
        </span>
      </s-input-number>
    </s-row>

    <s-row padding="2rem 0" display="block">
      <s-input-color v-model="background">
        <span slot="label">Background</span>
      </s-input-color>

      <s-input-color v-model="btnBackground">
        <span slot="label">Btn Background</span>
      </s-input-color>
      <s-input-color v-model="color">
        <span slot="label">Color</span>
      </s-input-color>
      <s-input-number v-model="size" v-bind:color="color">
        <span slot="label">Size</span>
      </s-input-number>

      <s-input-number v-model="step" v-bind:color="color">
        <span slot="label">Step</span>
      </s-input-number>

      <h3>Status Options</h3>
      <s-switch v-model="status" v-bind:color="color">
        <span slot="label">status</span>
      </s-switch>
      <s-switch v-model="aa" v-bind:color="color">
        <span slot="label"> status Auto</span>
      </s-switch>
      <s-switch
        v-bind:color="color"
        v-model="dis"
        v-bind:label="'Disabled: ' + dis"
      />
      <s-input-color v-model="statusColor">status Color</s-input-color>
      <s-input-color v-model="statusBackground">
        <span slot="label">Status Background</span>
      </s-input-color>
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
      icon: 'circle',
      set: 'solid',
      dis: false,
      descriptionT: 'this is the description text',

      status: false,
      aa: false,
      btnBackground: '#d2dafb',
      statusBackground: '#8B0000',
      background: '#7782d4',
      statusColor: '#ff9900',
      statusIcon: 'times',
      statusText: ['status text', 'this is an error'],

      size: 1,
      step: 1,
      min: 1,
      max: 1000,

      value1: 3
    }
  }
}
</script>

<style></style>
