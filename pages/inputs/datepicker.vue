<template>
  <div>
    <h2>Datepicker</h2>
    <s-row>value: {{ value1 }}</s-row>
    <s-row padding="2rem 4rem">
      <s-datepicker
        v-bind:background="background"
        v-bind:config="config"
        v-bind:disabled="dis"
        v-bind:label="label"
        v-model="value1"
        v-bind:color="color"
        v-bind:icon="icon"
        v-bind:iconBorder="iconBorder"
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
      ></s-datepicker>
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

      <s-switch v-model="iconAfter" v-bind:color="color" label="iconAfter">
      </s-switch>

      <s-switch v-model="iconBorder" v-bind:color="color" label="iconBorder">
      </s-switch>

      <s-input-color v-model="statusColor" label="status color" />
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
      config: {
        enableTime: false,
        dateFormat: 'Y-m-d',
        noCalendar: false,
        allowInput: false,
        time_24hr: false,
        inline: false
      },
      color: 'purple',
      dis: false,
      icon: 'circle',
      set: 'solid',

      descriptionT: 'this is the description text',

      status: false,
      aa: false,
      statusBackground: '#8B0000',
      background: '#7782d4',
      statusColor: '#ff9900',
      statusIcon: 'times',
      statusText: ['status text', 'this is an error'],

      iconAfter: false,
      iconBorder: true,
      size: 1,

      value1: ''
    }
  }
}
</script>

<style></style>
