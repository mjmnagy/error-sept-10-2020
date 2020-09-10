<template>
  <div>
    <h2>Sidebar</h2>
    <div id="sidebar">
      <s-sidebar
        default-index="1"
        class="sidebarx"
        spacer
        v-model="active"
        v-bind:reduce="switch1"
        v-bind:background="b"
        v-bind:color="c"
        position
        open-hover
      >
        <div class="header-sidebar" slot="header">
          <s-switch v-model="switch1" style="position:absolute;top:5px;right:0">
            <span slot="on">On</span>
            <span slot="off">Off</span>
          </s-switch>

          <s-avatar
            size="70px"
            src="https://randomuser.me/api/portraits/women/26.jpg"
          />

          <h4>
            My Name
            <s-button
              icon="EllipsisH"
              text-color="#fff"
              color="#000"
              type="border"
            ></s-button>
          </h4>
        </div>

        <s-sidebar-group index="0" title="2323232ffad" icon="fire">
          <div slot="actions">
            <s-icon
              icon="water"
              size=".5rem"
              v-bind:color="c"
              v-on:click.native.prevent.stop="clicked()"
            />
          </div>
          <s-sidebar-item index="0.1" icon="Bomb">Dashboard</s-sidebar-item>

          <s-sidebar-group index="0.1.0" title="S3232tore" icon="water">
            <div slot="actions">
              <s-icon icon="star" />
            </div>
            <s-sidebar-item index="0.1.1" icon="Store">Store</s-sidebar-item>
            <s-sidebar-item
              index="0.1.2"
              icon="Users"
              tooltip-text="this is the text"
              tooltip-title="ttitle"
            >
              Nature
              <div slot="actions">
                <s-icon icon="star" />
              </div>
            </s-sidebar-item>
            <s-sidebar-item index="0.1.3" icon="Brain">Style</s-sidebar-item>
            <s-sidebar-group index="0.1.3.0" title="Store333" size=".9rem">
              <s-sidebar-item index="0.1.3.1" icon="Store"
                >Store</s-sidebar-item
              >
              <s-sidebar-item
                index="0.1.3.2"
                icon="Users"
                tooltip-text="this is the text"
                tooltip-title="ttitle"
                >Nature</s-sidebar-item
              >
              <s-sidebar-group index="0.1.3.3" title="Store1" size=".9rem">
                <s-sidebar-item index="0.1.3.3.1" icon="Store"
                  >Store</s-sidebar-item
                >
                <s-sidebar-item
                  index="0.1.3.3.2"
                  icon="Users"
                  tooltip-text="this is the text"
                  tooltip-title="ttitle"
                  >Nature</s-sidebar-item
                >
                <s-sidebar-item index="0.1.3.3.3" icon="Brain"
                  >Style</s-sidebar-item
                >
              </s-sidebar-group>
              <s-sidebar-item index="0.1.4" icon="Brain">Style</s-sidebar-item>
            </s-sidebar-group>
          </s-sidebar-group>
          <s-sidebar-item index="0.1.4" icon="Gavel">History</s-sidebar-item>
          <s-sidebar-item index="0.1.5" icon="Lock">Security</s-sidebar-item>
          <s-sidebar-item index="0.1.6" icon="Question">Help</s-sidebar-item>
        </s-sidebar-group>

        <s-sidebar-group index="2" title="Aplication" icon="Gavel">
          <s-sidebar-item index="2.1" icon="Bomb">Dashboard</s-sidebar-item>

          <s-sidebar-group index="2.2" title="Store" icon="snowflake">
            <s-sidebar-item index="2.2.1" icon="Store">Store</s-sidebar-item>
            <s-sidebar-item
              index="2.2.2"
              icon="Users"
              tooltip-text="this is the text"
              tooltip-title="ttitle"
              >Nature</s-sidebar-item
            >
            <s-sidebar-item index="2.2.3" icon="Brain">Style</s-sidebar-item>
          </s-sidebar-group>

          <s-sidebar-item index="2.2.4" icon="Gavel">History</s-sidebar-item>
          <s-sidebar-item index="2.2.5" icon="Lock">Security</s-sidebar-item>
          <s-sidebar-item index="2.2.6" icon="Question">Help</s-sidebar-item>
        </s-sidebar-group>

        <s-sidebar-group index="3" title="BG" background="#5682d3" icon="globe">
          <s-sidebar-item index="3.1" icon="Bomb">Dashboard</s-sidebar-item>

          <s-sidebar-group index="3.2" title="Store" background="#82d34b">
            <s-sidebar-item index="3.2.1" icon="Store">Store</s-sidebar-item>
            <s-sidebar-item
              index="3.2.2"
              icon="Users"
              tooltip-text="this is the text"
              tooltip-title="ttitle"
              >Nature</s-sidebar-item
            >
            <s-sidebar-item index="3.2.3" icon="Brain">Style</s-sidebar-item>
          </s-sidebar-group>

          <s-sidebar-item index="3.2.4" icon="Gavel">History</s-sidebar-item>
          <s-sidebar-item index="3.2.5" icon="Lock">Security</s-sidebar-item>
          <s-sidebar-item index="3.2.6" icon="Question">Help</s-sidebar-item>
        </s-sidebar-group>

        <s-spacer padding="0 .5rem">
          <s-divider icon="umbrella" position="left-center">
            <s-icon icon="umbrella"></s-icon>
          </s-divider>
        </s-spacer>

        <!--s-sidebar-item index="5" icon="Star">
          Configurations
        </s-sidebar-item-->
        <s-sidebar-item
          index="6"
          icon="User"
          tooltip-text="this is the text"
          tooltip-title="ttitle"
          >Profile</s-sidebar-item
        >

        <s-sidebar-item index="7" icon="Book">Books</s-sidebar-item>

        <!--div class="footer-sidebar" slot="footer">
          <s-button icon="Reply" color="red" text-color="blue" type="flat"
            >log out</s-button
          >
          <s-button icon="Cogs" color="#4169E1" type="border"></s-button>
        </div-->
      </s-sidebar>
    </div>
    <s-row padding="2rem 0">
      <s-col width="3" offset="2" style="position:relative;">
        <s-sidebar-group title="Store" background="#82d34b">
          <s-sidebar-item index="2.1" icon="Store">Store</s-sidebar-item>
          <s-sidebar-item
            index="2.2"
            icon="Users"
            tooltip-text="this is the text"
            tooltip-title="ttitle"
            >Nature</s-sidebar-item
          >
          <s-sidebar-item index="2.3" icon="Brain">Style</s-sidebar-item>
          <s-sidebar-group title="dsdsd" background="#4eab5e" icon="fire">
            <s-sidebar-item index="2.4" icon="Brain">Style</s-sidebar-item>
          </s-sidebar-group>
        </s-sidebar-group>

        <s-sidebar-item
          index="4"
          icon="Question"
          color="pink"
          background="#4eab5e"
          >Help</s-sidebar-item
        >
      </s-col>
    </s-row>
    <s-row padding="2rem 0" display="block">
      <s-col offset="4">
        <s-input-color v-model="b" />
        <s-input-color v-model="c" />
        <s-switch v-model="active" />
      </s-col>
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      switch1: false,
      c: '#87CEEB',
      b: '#942e94'
    }
  },
  methods: {
    clicked() {
      alert('clicked')
    }
  }
}
</script>

<style>
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.header-sidebar h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.header-sidebar > button {
  margin-left: 10px;
}
.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.footer-sidebar {
  border: 0px solid rgba(0, 0, 0, 0) !important;
  border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
  border-radius: 0px !important;
}
</style>
