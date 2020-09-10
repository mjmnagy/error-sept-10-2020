<template>
  <s-row display="block">
    <h2>Select</h2>
    <s-row>value: {{ select1 }}</s-row>
    <s-row padding="2rem 4rem">
      <s-select
        class="selectExample"
        v-bind:multiple="mult"
        v-model="select1"
        v-bind:background="background"
        v-bind:disabled="dis"
        v-bind:label="label"
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
      >
        <s-select-option
          :key="index"
          :value="item.value"
          :text="item.text"
          v-for="(item, index) in options1"
        />

        <s-select-group title="blah" color="pink" background="green">
          <s-select-option
            :key="index"
            :value="item.value"
            :text="item.text"
            v-for="(item, index) in options1"
          />
        </s-select-group>
        <!-- 

<s-select-group>
          <s-select-option value="item.value" text="item.text" />
        <s-select-option value="item.value1" text="item.tex1t" />

        </s-select-group>

 -->
      </s-select>
    </s-row>
    <s-row padding="2rem 0" display="block">
      <s-input-color v-model="background">
        <span slot="label"> Background</span>
      </s-input-color>

      <s-input-color v-model="statusBackground">
        <span slot="label"> Status Background</span>
      </s-input-color>

      <s-input-color v-model="color">
        <span slot="label"> Color</span>
      </s-input-color>

      <s-input-number v-model="size" v-bind:color="color">
        <span slot="label"> Size</span>
      </s-input-number>

      <s-switch v-model="status" v-bind:color="color">
        <span slot="label">status</span>
      </s-switch>
      <s-switch
        v-model="dis"
        v-bind:color="color"
        v-bind:label="'Disabled: ' + dis"
      />
      <s-switch v-model="aa" v-bind:color="color">
        <span slot="label"> status Auto</span>
      </s-switch>

      <s-switch v-model="iconAfter" v-bind:color="color">
        <span slot="label">iconAfter</span>
      </s-switch>

      <s-switch v-model="iconBorder" v-bind:color="color">
        <span slot="label">iconBorder</span>
      </s-switch>

      <s-input-color v-model="statusColor" />

      <h2>Unique Properties</h2>

      <s-switch v-model="mult" v-bind:color="color">
        <span slot="label"> Multiple</span>
      </s-switch>

      <s-switch v-model="auto" v-bind:color="color">
        <span slot="label">Autocomplete</span>
      </s-switch>
    </s-row>

    <s-row padding="20rem 0" />
  </s-row>
</template>

<script>
export default {
  data() {
    return {
      placeholder: 'Placeholder',
      labelPl: 'Label Placeholder',
      label: 'label',

      color: '#2E0854',
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

      iconAfter: false,
      iconBorder: true,
      size: 1,

      mult: true,
      auto: true,

      options1: [
        { text: 'IT', value: 0 },
        { text: 'Blade Runner', value: 2 },
        { text: 'Thor Ragnarok', value: 3 },
        { text: 'IT', value: 1 },
        { text: 'Blade Runner', value: 12 },
        { text: 'Thor Ragnarok', value: 13 },
        { text: 'IT', value: 10 },
        { text: 'Blade Runner', value: 21 },
        { text: 'Thor Ragnarok', value: 31 },
        { text: 'IT', value: 110 },
        { text: 'Blade Runner', value: 112 },
        { text: 'Thor Ragnarok', value: 113 }
      ],
      select1: ''
    }
  }
}
</script>

<style></style>
