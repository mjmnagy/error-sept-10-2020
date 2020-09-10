<template>
  <div>
    <h2>Tabs</h2>
    <s-tabs v-bind:color="color" ref="component">
      <s-tab label="Home">
        <div>
          Home
        </div>
      </s-tab>
      <s-tab label="Service" icon="flower">
        <div>
          Service
        </div>
      </s-tab>
      <s-tab label="login" icon="ghost">
        <div>
          login
        </div>
      </s-tab>
      <s-tab disabled label="Disabled">
        <div>
          Disabled
        </div>
      </s-tab>
      <s-tab label="Lorem ipsum dolor sit amet">
        <div>
          Lorem ipsum dolor sit amet
        </div>
      </s-tab>
    </s-tabs>
    <s-row padding="2rem 0" display="block">
      <h3>Tab</h3>
      <s-tab
        label="Lorem ipsum dolor sit amet"
        icon="flower"
        v-bind:color="color"
      >
        <div>
          Lorem ipsum dolor sit amet
        </div>
      </s-tab>
    </s-row>
    <s-row padding="2rem 0">
      <s-input-color v-model="color" />
    </s-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    color: '#ef843d'
  })
}
</script>
