<template>
  <div>
    <s-row padding="2rem 0">
      <s-input>
        <router-link v-bind:to="{ name: 'inputs-input' }" slot="label">
          Input
        </router-link>
      </s-input>
    </s-row>

    <s-row padding="2rem 0">
      <s-input-color>
        <router-link v-bind:to="{ name: 'inputs-input-color' }" slot="label">
          Input Color
        </router-link>
      </s-input-color>
    </s-row>

    <s-row padding="2rem 0">
      <s-input-number>
        <router-link v-bind:to="{ name: 'inputs-input-number' }" slot="label">
          Input Number
        </router-link>
      </s-input-number>
    </s-row>

    <s-row padding="2rem 0">
      <s-select>
        <router-link v-bind:to="{ name: 'inputs-select' }" slot="label">
          Select
        </router-link>
        <s-select-option value="item.value" text="item.text" />
        <s-select-option value="item.value1" text="item.tex1t" />
      </s-select>
    </s-row>

    <s-row padding="2rem 0">
      <s-datepicker>
        <router-link v-bind:to="{ name: 'inputs-datepicker' }" slot="label">
          Datepicker
        </router-link>
      </s-datepicker>
    </s-row>

    <s-row padding="2rem 0">
      <s-radio>
        <router-link v-bind:to="{ name: 'inputs-radio' }" slot="label">
          Radio
        </router-link>
        <s-radio-option value="item.value" text="item.text" />
        <s-radio-option value="item.value1" text="item.tex1t" />
      </s-radio>
    </s-row>
    <s-row padding="2rem 0">
      <s-checkbox>
        <router-link v-bind:to="{ name: 'inputs-checkbox' }" slot="label">
          Checkbox
        </router-link>
      </s-checkbox>
    </s-row>

    <s-row padding="2rem 0">
      <s-switch>
        <router-link v-bind:to="{ name: 'inputs-switch' }" slot="label">
          Switch
        </router-link>
      </s-switch>
    </s-row>
    <s-row padding="2rem 0">
      <s-slider>
        <router-link v-bind:to="{ name: 'inputs-slider' }" slot="label">
          Slider
        </router-link>
      </s-slider>
    </s-row>

    <s-row padding="2rem 0">
      <s-textarea>
        <router-link v-bind:to="{ name: 'inputs-textarea' }" slot="label">
          Textarea
        </router-link>
      </s-textarea>
    </s-row>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
