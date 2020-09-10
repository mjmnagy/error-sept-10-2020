<template>
  <div style="width:100%">
    <h2>Checkbox</h2>
    <s-row background="pink">
      <s-col xs="20" current="xs" background="blue">
        <s-image
          ref="component"
          src="https://picsum.photos/400/400?image=21"
          height="150px"
          width="100px"
        ></s-image>
      </s-col>
      <s-col xs="50" current="xs" background="orange" class="st">
        <s-image
          ref="component"
          src="https://picsum.photos/400/400?image=21"
          height="150px"
          width="100px"
        ></s-image>
      </s-col>
    </s-row>
    <s-row
      background="red"
      style="margin-top:1rem"
      direction="row"
      align-items="baseline"
      wrap="nowrap"
    >
      <s-col xs="90" current="xs" background="blue" order="3">
        <s-image
          ref="component"
          src="https://picsum.photos/400/400?image=21"
          height="150px"
          width="100px"
        ></s-image>
      </s-col>
      <s-col xs="90" current="xs" background="orange" class="st" order="1">
        <s-image
          ref="component"
          src="https://picsum.photos/400/400?image=21"
          height="150px"
          width="100px"
        ></s-image>
      </s-col>
    </s-row>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.st {
  margin-left: 1rem;
}
</style>
