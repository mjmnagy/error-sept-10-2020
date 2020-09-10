<template>
  <div>
    <h2>Switch</h2>
    <s-row padding="2rem 4rem">
      <s-switch
        v-bind:background="background"
        v-bind:disabled="dis"
        v-bind:color="color"
        v-model="switch1"
        icon="times"
        v-bind:size="size + 'em'"
        v-bind:type="t"
        v-bind:status="status"
        v-bind:statusAuto="aa"
        v-bind:statusBackground="statusBackground"
        v-bind:statusColor="statusColor"
        v-bind:statusIcon="statusIcon"
        v-bind:statusText="statusText"
        v-bind:label="'Value: ' + switch1"
      >
        <div class="" slot="on">
          ON
          <s-icon icon="check" size=" 1rem" />
        </div>
        <s-icon slot="off" icon="times" size="1rem" />
        <s-icon slot="circle" icon="tree" />
      </s-switch>
    </s-row>
    <s-row padding="2rem 0" display="block">
      <s-input-number v-model="size" />
      <s-select v-model="t">
        <s-select-option
          v-for="po in types"
          v-bind:key="po"
          v-bind:value="po"
          v-bind:text="po"
        >
          />
        </s-select-option>
      </s-select>

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
  </div>
</template>

<script>
export default {
  data() {
    return {
      switch1: false,
      color: '#5a3cc4',
      size: 1,
      t: 'outline',
      types: ['outline', 'skinny', 'full'],
      status: false,
      type: null,
      aa: false,
      dis: false,
      statusBackground: '#8B0000',
      background: '#7782d4',
      statusColor: '#ff9900',
      statusIcon: 'times',
      statusText: ['status text', 'this is an error']
    }
  }
}
</script>

<style></style>
