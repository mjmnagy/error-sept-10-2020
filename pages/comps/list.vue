<template>
  <div>
    <h2>List {{ n }}</h2>
    <s-list v-bind:size="n + 'em'" v-bind:border="b">
      <s-list-header color="pink" title="title"> </s-list-header>
      <s-list-item title="One text"></s-list-item>
      <s-list-item title="Another text" subtitle="A little text"></s-list-item>
      <s-list-item title="Some more text"></s-list-item>
      <s-list-item title="Even more text" subtitle="Another little text" border>
        <p>this is the content or slot of the item</p></s-list-item
      >
    </s-list>
    <s-row padding="2rem 0" display="block">
      <s-switch v-model="b" v-bind:label="'border: ' + b" />
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      b: true,
      n: 1
    }
  }
}
</script>
