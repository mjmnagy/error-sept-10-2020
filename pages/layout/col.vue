<template>
  <div>
    <h2>Column in div</h2>
    <div style="width: 100%;">
      <s-col
        xs="20"
        xs-offset="10"
        background="pink"
        color="white"
        border="1px solid blue"
      >
        <s-spacer style="height:50px">
          This is a small div
        </s-spacer></s-col
      ><s-col
        xs="36"
        xs-offset="30"
        background="orange"
        border="1px dotted green"
      >
        <s-spacer style="height:50px"></s-spacer>
      </s-col>
    </div>
    <h2>Column in row</h2>
    <s-row>
      <s-col
        xs="20"
        xs-offset="10"
        background="pink"
        color="white"
        border="1px solid blue"
      >
        <s-spacer style="height:50px">
          This is a small div
        </s-spacer>
      </s-col>
      <s-col
        xs="36"
        xs-offset="30"
        background="orange"
        border="1px dotted green"
      >
        <s-spacer style="height:50px"></s-spacer>
      </s-col>
    </s-row>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
