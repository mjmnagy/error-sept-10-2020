<template>
  <div>
    <h2>Card</h2>
    <s-card
      v-bind:actionable="actionable"
      v-bind:fixed-height="height"
      v-bind:background="bg"
      v-bind:color="color"
    >
      <div slot="header">
        <h3>
          Hello world !
        </h3>
      </div>
      <div slot="media">
        <img
          src="https://cdn.pixabay.com/photo/2018/03/09/17/21/girl-3212061_960_720.jpg"
        />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div slot="footer" v-bind:style="{ backgroundColor: 'blue' }">
        <s-row s-justify="flex-end" display="block">
          <s-button color="danger" icon="Heart"></s-button>
          <s-button color="rgb(230,230,554)" icon="paper-plane"></s-button>
          <s-button
            color="rgb(230,230,230)"
            color-text="rgb(50,50,50)"
            icon="Cogs"
          ></s-button>
          this is the
        </s-row>
      </div>
    </s-card>
    <s-row padding="2rem 0" display="block">
      <s-input-color v-model="bg" label="bg" />
      <s-input-color v-model="color" label="color" />
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actionable: true,
      height: false,
      bg: '#409711',
      color: '#61e229'
    }
  }
}
</script>

<style></style>
