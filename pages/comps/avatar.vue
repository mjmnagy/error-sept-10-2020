<template>
  <div>
    <h2>Avatar</h2>
    <s-avatar
      v-bind:color="color"
      v-bind:background="bg"
      v-bind:size="size + 'em'"
      v-bind:src="src"
      badge="1"
      text="Luisd"
      icon="Star"
      icon-set="duotone"
    >
      <s-chip color="red">1</s-chip>
    </s-avatar>
    <s-row padding="2rem 0" display="block">
      <s-input-color v-model="bg" label="bg" />
      <s-input-color v-model="color" label="color" />
      <s-input-number v-model="size" />
      <s-input label-placeholder="Image" v-model="src" icon="fileImage" />
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bg: '#8c17a4',
      color: '#2ac0b6',
      size: 1,
      src: ''
    }
  }
}
</script>

<style></style>
