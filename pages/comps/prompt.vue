<template>
  <div>
    <h2>Prompt</h2>
    <s-button @click="popupActivo = true" color="#FF6F61" type="border"
      >Open Default popup</s-button
    >

    <s-row padding="2rem 0" color="red" display="flex">
      <s-col
        offset="3"
        width="2"
        id="par"
        style="height:100rem;z-index:10;position:relative"
        color="blue"
      >
        <s-prompt
          title="Lorem ipsum dolor sit amet"
          :active.sync="popupActivo"
          color="#6B5B95"
          v-bind:background="color"
          v-bind:parent="par"
        >
          <!--template slot="header">
            custom header
          </template-->
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </s-prompt>
      </s-col>
    </s-row>
    <s-row padding="2rem 0" display="block">
      <s-input-color v-model="color" />
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupActivo: false,
      par: this.$refs.par,
      color: '#ffff00'
    }
  }
}
</script>

<style></style>
