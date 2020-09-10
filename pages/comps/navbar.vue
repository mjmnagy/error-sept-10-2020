<template>
  <div>
    <h2>Navbar</h2>
    <s-navbar
      v-model="active"
      class="nabarx"
      v-bind:align-items="e"
      v-bind:color="c"
      v-bind:background="t"
      v-bind:breakpoint="n"
      v-bind:type="y"
      v-bind:collapse.sync="o"
      v-bind:position-top="p"
      title="title"
    >
      <s-navbar-item index="0" icon="fire">home</s-navbar-item>
      <s-navbar-item index="1" icon="box"> update</s-navbar-item>

      <s-navbar-group index="3" title="group index 3" icon="fire" collapse>
        <s-navbar-item index="3.1" icon="lemon"> group1</s-navbar-item>
        <s-navbar-item index="3.2" icon="fire">group index 3 </s-navbar-item>
        <s-navbar-item index="3.3" title="group usd 3" icon="star"
          >group index 3d</s-navbar-item
        >
      </s-navbar-group>

      <s-navbar-group index="4" title="group 4" icon="mouse">
        <s-navbar-item index="4.1" icon="pen">
          <a href="#">Update</a>
        </s-navbar-item>
        <s-navbar-item index="4.2">
          <a href="#"
            >iconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsiconsicons</a
          >
        </s-navbar-item>
        <s-navbar-group index="4.3" title="group 4" icon="mouse">
          <s-navbar-item index="4.3.1">
            <a href="#">Update</a>
          </s-navbar-item>
          <s-navbar-item index="4.3.2">
            <a href="#">icons</a>
          </s-navbar-item>
          <s-navbar-item index="4.3.3">
            <a href="#">pencil</a>
          </s-navbar-item>
          <s-navbar-group index="4.3.4" title="group 4" icon="mouse">
            <s-navbar-item index="4.3.4.1" icon="turtle">
              <a href="#">Update</a>
            </s-navbar-item>
            <s-navbar-item index="4.3.4.2">
              <a href="#">icons</a>
            </s-navbar-item>
            <s-navbar-item index="4.3.4.3">
              <a href="#">pencil</a>
            </s-navbar-item>
          </s-navbar-group>
        </s-navbar-group>
        <s-navbar-item index="4.4">
          <a href="#">pencil</a>
        </s-navbar-item>
      </s-navbar-group>
      <s-navbar-item index="2">
        <a href="#">Update</a>
      </s-navbar-item>
    </s-navbar>

    <s-row padding="2rem 0" display="block">
      <s-switch v-model="active" v-bind:label="'Active: ' + active" />
      <s-input-color v-model="c" label="color" />
      <s-input-color v-model="t" label="background" />
      <s-input-number v-model="n" label="breakpoint" />
      <s-switch v-model="o" v-bind:label="'Collapse: ' + o" />
      <s-switch v-model="p" v-bind:label="'position top: ' + p" />
      <s-select label="Type" v-bind:color="c" v-model="y">
        <s-select-option
          :key="index"
          :value="icon"
          :text="icon"
          v-for="(icon, index) in types"
        />
      </s-select>
      <s-select label="Alignment" v-bind:color="c" v-model="e">
        <s-select-option
          :key="index"
          :value="icon"
          :text="icon"
          v-for="(icon, index) in end"
        />
      </s-select>
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      c: '#FF00FF',
      t: '#FFF',
      y: null,
      types: ['border', 'flat', 'gradient', 'shadow'],
      end: ['end', 'start', 'center'],
      e: null,
      o: false,
      p: false,
      n: 1000
    }
  }
}
</script>

<style></style>
