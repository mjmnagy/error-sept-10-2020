<template>
  <s-row display="block" padding="2rem">
    <sComps />
    <s-spacer icon="grid" padding="2rem 0 0 0" />
    <sInputs />
    <s-spacer icon="grid" padding="2rem 0 0 0" />
    <sLayout />
    <s-spacer icon="grid" padding="2rem 0 0 0" />

    <h2>Global Issues</h2>
    <s-list>
      <s-list-item>
        check for mouse events and see if they need touch events
      </s-list-item>

      <s-list-item>
        Review comps to ensure everything is split - consistent
      </s-list-item>
      <s-list-item>
        Convert reused code to mixins - detailed mixins
      </s-list-item>
    </s-list>

    <s-spacer icon="grid" padding="2rem 0 0 0" />
    <h2>Global Ideas</h2>
    <s-list>
      <s-list-item>
        Adjust properties
        <s-list>
          <s-list-item>
            Add opacity setting
          </s-list-item>
          <s-list-item>
            Add disabled setting
          </s-list-item>
        </s-list>
      </s-list-item>
    </s-list>
  </s-row>
</template>

<script>
export default {
  components: {
    sComps: () => import('~/components/comps'),
    sInputs: () => import('~/components/inputs'),
    sLayout: () => import('~/components/layouts')
  }
}
</script>

<style>
h2 {
  width: 100%;
}

h2:after {
  content: '\A';
  white-space: pre;
}

.case {
  text-transform: capitalize;
}

div {
  width: 100%;
}
</style>
