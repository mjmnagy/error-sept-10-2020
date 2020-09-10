<template>
  <div>
    <h2>Textarea</h2>
    <s-row padding="2rem 4rem">
      <s-textarea
        v-model="val"
        v-bind:background="bg"
        v-bind:disabled="dis"
        v-bind:color="color"
        descriptionText="this is the descriptionText"
        placeholder="this is the placeholder"
        v-bind:status="status"
        v-bind:statusAuto="aa"
        v-bind:upload="up"
        v-bind:statusBackground="statusBackground"
        v-bind:statusColor="statusColor"
        v-bind:statusIcon="statusIcon"
        v-bind:statusText="statusText"
        v-bind:label="'Value: ' + val"
      ></s-textarea>
    </s-row>

    <s-row padding="2rem 0" display="block">
      <s-input-color v-model="statusBackground" label="Status Background">
      </s-input-color>
      <s-input-color v-model="bg" label="Background"> </s-input-color>
      <s-input-color v-model="color" label="Color"> </s-input-color>

      <s-switch v-model="status" v-bind:color="color" label="status">
      </s-switch>
      <s-switch v-model="aa" v-bind:color="color" label="status Auto">
      </s-switch>
      <s-switch v-model="up" v-bind:color="color" label="Upload"> </s-switch>
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
      val: '',
      color: '#5a3cc4',
      t: 'outline',
      types: ['outline', 'skinny', 'full'],
      status: false,
      type: null,
      aa: false,
      dis: false,
      up: false,
      statusBackground: '#8B0000',
      bg: '#7782d4',
      statusColor: '#ff9900',
      statusIcon: 'times',
      statusText: ['status text', 'this is an error']
    }
  }
}
</script>

<style></style>
