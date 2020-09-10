<template >
  <div style="padding-top:100px;">
    <s-table
 
      v-bind:background="bg"
      v-bind:color="color"
      v-bind:fixed="fixed"
      v-bind:hover="hover"
      v-bind:type="type"
      v-bind:striped="b"
  

    >
      <template slot="head">
        <tr>
        <s-table-th>Email</s-table-th>
        <s-table-th>Name</s-table-th>
        <s-table-th>Website</s-table-th>
        <s-table-th >Nro</s-table-th>
        </tr>
      </template>

    
          
        <s-table-tr :key="indextr" v-for="(tr, indextr) in users">
          <s-table-td>{{ tr.email }}</s-table-td>

          <s-table-td>{{ tr.username }}</s-table-td>

          <s-table-td>{{ tr.website }}</s-table-td>

          <s-table-td>{{ tr.id }}</s-table-td>
        </s-table-tr>
  

    </s-table>

    <s-row padding="15rem 0 30rem 0" display="block">
      <s-input-color v-model="bg" label="background"/>
     <s-input-color  v-model="color" label="color"/>
     
      <s-switch v-bind:color="color" v-model="b" v-bind:label="'striped: '+b"/></br>
       <s-switch v-bind:color="color" v-model="fixed" v-bind:label="'fixed: '+fixed"/></br>
       <s-switch v-bind:color="color" v-model="hover" v-bind:label="'hover: '+hover"/></br>

<s-select
      label="Type"
      v-bind:color="color"
      v-model="type"
    >
      <s-select-option
        :key="item"
        :value="item"
        :text="item"
        v-for="item in types"
      />
    </s-select>
    </s-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bg: '#d0f4f7',
      color: '#333536',

      //Orig

      b: true,
      hover: true,
      fixed: true,
      type: 'boxed',
      types: ['border', 'boxed','grid', 'flat'],
      users: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          website: 'hildegard.org'
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          website: 'anastasia.net'
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          website: 'ramiro.info'
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
          website: 'kale.biz'
        },
        {
          id: 5,
          name: 'Chelsey Dietrich',
          username: 'Kamren',
          email: 'Lucio_Hettinger@annie.ca',
          website: 'demarco.info'
        },
        {
          id: 6,
          name: 'Mrs. Dennis Schulist',
          username: 'Leopoldo_Corkery',
          email: 'Karley_Dach@jasper.info',
          website: 'ola.org'
        },
        {
          id: 7,
          name: 'Kurtis Weissnat',
          username: 'Elwyn.Skiles',
          email: 'Telly.Hoeger@billy.biz',
          website: 'elvis.io'
        },
        {
          id: 8,
          name: 'Nicholas Runolfsdottir V',
          username: 'Maxime_Nienow',
          email: 'Sherwood@rosamond.me',
          website: 'jacynthe.com'
        },
        {
          id: 9,
          name: 'Glenna Reichert',
          username: 'Delphine',
          email: 'Chaim_McDermott@dana.io',
          website: 'conrad.com'
        },
        {
          id: 10,
          name: 'Clementina DuBuque',
          username: 'Moriah.Stanton',
          email: 'Rey.Padberg@karina.biz',
          website: 'ambrose.net'
        }
      ]
    }
  }
}
</script>
