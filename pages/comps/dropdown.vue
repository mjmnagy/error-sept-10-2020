<template>
  <div id="app">
    <h2>Dropdown</h2>
    <div>
      <s-col offset="10" width="2">
        <s-dropdown
          ref="component"
          v-bind:background="b"
          v-bind:color="c"
          v-bind:pointer="p"
          v-bind:position="pos"
          v-bind:trigger-click="t"
          title="Dropdown "
        >
          <s-dropdown-item to="/components/">Option 1</s-dropdown-item>
          <s-dropdown-item>Option 2</s-dropdown-item>
          <s-dropdown-item disabled divider>Option 3</s-dropdown-item>

          <s-dropdown-group label="Option 1" collapse divider>
            <s-dropdown-item>Option Collapse 1</s-dropdown-item>
            <s-dropdown-item>Option Collapse 2</s-dropdown-item>
            <s-dropdown-group>
              <s-dropdown-item>Sub Options 1</s-dropdown-item>
              <s-dropdown-item>Sub Options 2</s-dropdown-item>

              <s-dropdown-group s-collapse>
                <s-dropdown-item s-label="Sub Collapse"
                  >Sub Collapse 1</s-dropdown-item
                >
                <s-dropdown-item>Sub Collapse 2</s-dropdown-item>
              </s-dropdown-group>
            </s-dropdown-group>
          </s-dropdown-group>
          <s-dropdown-group label="Option 1" collapse divider>
            <s-dropdown-item>Option Collapse 1</s-dropdown-item>
            <s-dropdown-item>Option Collapse 2</s-dropdown-item>
            <s-dropdown-group>
              <s-dropdown-item>Sub Options 1</s-dropdown-item>
              <s-dropdown-item>Sub Options 2</s-dropdown-item>

              <s-dropdown-group s-collapse>
                <s-dropdown-item s-label="Sub Collapse"
                  >Sub Collapse 1</s-dropdown-item
                >
                <s-dropdown-item>Sub Collapse 2</s-dropdown-item>
                <s-dropdown-group s-collapse>
                  <s-dropdown-item s-label="Sub Collapse"
                    >Sub Collapse 1</s-dropdown-item
                  >
                  <s-dropdown-item>Sub Collapse 2</s-dropdown-item>
                  <s-dropdown-group s-collapse>
                    <s-dropdown-item s-label="Sub Collapse"
                      >Sub Collapse 1</s-dropdown-item
                    >
                    <s-dropdown-item>Sub Collapse 2</s-dropdown-item>
                    <s-dropdown-group s-collapse>
                      <s-dropdown-item s-label="Sub Collapse"
                        >Sub Collapse 1</s-dropdown-item
                      >
                      <s-dropdown-item>Sub Collapse 2</s-dropdown-item>
                    </s-dropdown-group>
                  </s-dropdown-group>
                </s-dropdown-group>
              </s-dropdown-group>
            </s-dropdown-group>
          </s-dropdown-group>

          <s-dropdown-item divider>Option 3</s-dropdown-item>
        </s-dropdown>
      </s-col>
    </div>
    <s-row padding="10rem 0 2rem 0" display="block">
      <s-switch v-model="t" />
      <s-switch v-model="p">Pointer</s-switch>
      <s-input-color v-model="b" v-bind:color="b" />
      <s-input-color v-model="c" v-bind:color="c" />
      <s-select
        label="Position"
        v-bind:background="b"
        v-bind:color="c"
        v-model="pos"
      >
        <s-select-option
          :key="index"
          :value="icon"
          :text="icon"
          v-for="(icon, index) in options"
        />
      </s-select>
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      b: '#0e49d3',
      c: '#fff',
      options: [
        'bottom-center',
        'bottom-left',
        'bottom-right',
        'left',
        'right',
        'top-center',
        'top-left',
        'top-right'
      ],
      pos: 'left',
      t: false,
      p: false
    }
  }
}
</script>

<style></style>
