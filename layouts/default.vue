<template>
  <div>
    <s-navbar background="#fefefb" class="nav">
      <div slot="title">
        <s-row>
          <s-col xs="20" sm="20" xs-offset="4">
            <p>{{ 'BG: ' + bg }}</p>
          </s-col>
          <s-col xs="30">
            <s-input-color v-model="bg" />
          </s-col>
        </s-row>
      </div>
      <s-navbar-item index="2" icon="home" v-bind:to="{ name: 'index' }">
        Home
      </s-navbar-item>

      <s-navbar-item index="4" icon="arrow-left" v-bind:to="-1">
        Back
      </s-navbar-item>
      <s-navbar-item index="0" class="right">
        <s-button
          v-on:click="reset()"
          icon="undo"
          v-bind:background="colr"
          color="black"
          >Reset</s-button
        >
      </s-navbar-item>
    </s-navbar>

    <h1>@usersal/components( {{ amt }} )</h1>

    <s-row xs="100" v-bind:background="bg">
      <nuxt />
    </s-row>
  </div>
</template>

<script>
export default {
  computed: {
    amt() {
      return this.$router.options.routes.length - 2
    },
    colr() {
      this.bg == '#f8f8f8' ? '#7FFF00' : '#A9A9A9'
    }
  },
  data() {
    return {
      bg: '#f8f8f8'
    }
  },
  methods: {
    reset() {
      this.bg = '#f8f8f8'
    }
  }
}
</script>
<style>
body {
  font-family: Arial;
  background: #f8f8f8;
  overflow-x: hidden;
  max-width: 100%;
  height: 100%;
  font-size: 14px;
  color: black;
}
h1 {
  margin: 0.8rem 0;
}
h2 {
  margin: 0.7rem 0;
}
h3 {
  margin: 0.6rem 0;
}
div {
  width: inherit;
}
.nav .s-con-items {
  justify-content: flex-end !important;
}
</style>
