<template>
  <div id="app">
    <h2>Breadcrumb</h2>

    <s-breadcrumb color="orange" v-bind:size="size + 'em'">
      <s-crumb
        v-for="k in bread"
        v-bind:key="k"
        v-bind:disabled="k.disabled"
        v-bind:active="k.active"
      >
        <s-icon v-bind:icon="k.icon" />
        {{ k.title }}
      </s-crumb>
      <s-crumb>
        this is the stuff 2
      </s-crumb>
    </s-breadcrumb>

    <s-row padding="2rem 0" display="block">
      <s-input-number v-model="size" />
    </s-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    size: 1,
    bread: [
      {
        title: 'Dashboard',
        url: 'dashboard',
        icon: 'flame'
      },
      {
        title: 'Link 1',
        url: 'link-1',
        icon: 'flame'
      },
      {
        title: 'Link 2',
        disabled: true,
        icon: 'flame'
      },
      {
        title: 'Active',
        active: true,
        icon: 'flame'
      }
    ]
  })
}
</script>

<style>
.cont {
}
</style>
