<template>
  <div>
    <h2>Radio</h2>
    <s-row padding="2rem 0"> value: {{ radios1 }} </s-row>
    <s-row padding="2rem 3rem">
      <s-radio
        v-model="radios1"
        v-bind:background="background"
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
        v-bind:size="size + 'em'"
        v-bind:type="sel"
        v-bind:disabled="d"
        label="Who is the best actor in martian films"
      >
        <s-radio-option value="luis" label="lui" />
        <s-radio-option value="lolo" icon="hammer" />
        <s-radio-option value="judge" icon="lemon" label="green" />
        <s-radio-option value="fudge" disabled icon="times" label="reduce" />
      </s-radio>
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
      <s-switch v-model="d" v-bind:color="color" label="Disabled"> </s-switch>

      <s-input-color v-model="statusColor" label="status color" />
      <s-select v-model="sel" v-bind:color="color">
        <s-select-option value="horizontal" />
        <s-select-option value="vertical" />
      </s-select>
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: 'label',

      color: 'purple',
      icon: 'circle',
      set: 'solid',
      descriptionT: 'this is the description text',

      d: false,
      checked: false,
      status: false,
      aa: false,
      btnBackground: '#d2dafb',
      statusBackground: '#8B0000',
      background: '#7782d4',
      statusColor: '#ff9900',
      statusIcon: 'times',
      statusText: ['status text', 'this is an error'],
      size: 1,

      radios1: 3,
      sel: 'vertical'
    }
  }
}
</script>

<style></style>'
