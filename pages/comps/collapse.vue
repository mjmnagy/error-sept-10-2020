<template>
  <div>
    <h2>Collapse</h2>
    <s-collapse
      type="margin"
      v-bind:accordion="a"
      v-bind:background="bg"
      v-bind:color="color"
    >
      <s-collapse-item v-for="(item, i) in d" v-bind:key="i">
        <div slot="header">
          {{ item.name }}
        </div>
        <div v-html="item.cont" />
      </s-collapse-item>
      <div>
        <div>
          <s-collapse-item icon="flower">
            <div slot="header">
              header
            </div>
            this is the stranded content
          </s-collapse-item>
        </div>
      </div>
    </s-collapse>

    <s-row padding="2rem 0" display="block">
      <s-switch v-model="a" v-bind:color="'pink'" />
    </s-row>

    <s-row padding="2rem 0">
      <h2>Collapse item</h2>
      <s-collapse-item icon="flower">
        <div slot="header">
          <h2>header</h2>
        </div>
        this is the stranded content
      </s-collapse-item>
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: true,
      bg: '#2ac0b6',
      color: '#0e1cc9',
      d: [
        {
          name: 'Collapse item',
          cont: `
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus
          eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante.
          Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a
          tortor viverra, ornare tellus in, consectetur leo.
          <br /><br />
          Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit.
          Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna
          massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex
          enim. Quisque consequat dui libero, vel blandit lorem porttitor sit
          amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Nullam sed lobortis nisl, quis eleifend metus.
          </div>
          `
        },
        {
          name: 'Collapse item',
          cont: `
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus
          eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante.
          Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a
          tortor viverra, ornare tellus in, consectetur leo.
          <br /><br />
          Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit.
          Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna
          massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex
          enim. Quisque consequat dui libero, vel blandit lorem porttitor sit
          amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Nullam sed lobortis nisl, quis eleifend metus.
          </div>
          `
        },
        {
          name: 'Collapse item',
          cont: `
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus
          eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante.
          Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a
          tortor viverra, ornare tellus in, consectetur leo.
          <br /><br />
          Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit.
          Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna
          massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex
          enim. Quisque consequat dui libero, vel blandit lorem porttitor sit
          amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Nullam sed lobortis nisl, quis eleifend metus.
          </div>
          `
        }
      ]
    }
  }
}
</script>

<style></style>
