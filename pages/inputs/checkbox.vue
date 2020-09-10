<template>
  <div>
    <h2>Checkbox</h2>
    <s-row> value: {{ checkBox1 }} </s-row>
    <s-row padding="2rem 4rem">
      <s-checkbox
        v-model="checkBox1"
        v-bind:color="color"
        v-bind:background="background"
        v-bind:disabled="dis"
        v-bind:icon="icon"
        label="Primary - active"
        v-bind:description-text="descriptionT"
        v-bind:status="status"
        v-bind:statusAuto="aa"
        v-bind:statusBackground="statusBackground"
        v-bind:statusColor="statusColor"
        v-bind:statusIcon="statusIcon"
        v-bind:statusText="statusText"
        v-bind:size="size + 'em'"
        v-bind:type="type"
      ></s-checkbox>
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
        v-bind:label="'disabled: ' + dis"
      >
      </s-switch>

      <s-input-color v-model="statusColor" label="status color" />

      <s-switch v-model="checkBox1" v-bind:color="color" label="on"> </s-switch>

      <s-select v-model="type" label="type">
        <s-select-option value="round" />
        <s-select-option value="square" />
      </s-select>
    </s-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    checkBox1: false,

    color: 'purple',
    icon: 'circle',
    set: 'solid',
    dis: false,
    descriptionT: 'this is the description text',

    status: false,
    aa: false,
    statusBackground: '#8B0000',
    background: '#7782d4',
    statusColor: '#ff9900',
    statusIcon: 'times',
    statusText: ['status text', 'this is an error'],

    size: 1,
    type: null
  })
}
</script>

<style></style>
