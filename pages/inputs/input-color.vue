<template>
  <div>
    <h2>Input - Color</h2>
    <s-row>value: {{ color }}</s-row>
    <s-row padding="2rem" width="inherit">
      <s-color-input
        v-bind:label="label"
        v-bind:description-text="descriptionT"
        v-bind:disabled="dis"
        v-model="color"
        v-bind:icon-set="set"
        v-bind:status="status"
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
      </s-color-input>
    </s-row>
    <s-row padding="2rem 0" display="block">
      <s-input-color v-model="color">
        Color
      </s-input-color>
      <s-input-number v-model="size" v-bind:color="color">
        Size
      </s-input-number>

      <h3>Status Options</h3>
      <s-switch v-model="status" v-bind:color="color">
        status
      </s-switch>
      <s-switch v-model="aa" v-bind:color="color">
        status Auto
      </s-switch>

      <s-switch
        v-model="dis"
        v-bind:color="color"
        v-bind:label="'Disabled: ' + dis"
      ></s-switch>

      <s-input-color v-model="statusColor"> Status Color</s-input-color>
      <s-input-color v-model="statusBackground">
        Status Background
      </s-input-color>
    </s-row>
    <s-row padding="20rem 0" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: 'label',

      color: '#46ce98',
      icon: 'circle',
      set: 'solid',
      descriptionT: 'this is the description text',
      status: false,
      aa: false,
      statusBackground: '#8B0000',
      statusColor: '#ff9900',
      statusIcon: 'times',
      statusText: ['status text', 'this is an error'],
      dis: false,
      size: 1
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
