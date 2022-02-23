<template>


 <!-- ---------- -->
<v-app>

         <v-navigation-drawer permanent app style="margin-top: 70px; border: 1px solid black">
        
        <v-list
          dense
          nav
        >
       <router-link to="/" class="list-item">
        <v-list-item  class="list-item">
           <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
        </v-list-item>
        </router-link>

        <router-link to="/about" class="list-item">
        <v-list-item >
          <v-list-group
        :value="true"
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        </v-list-group>
        </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
 <router-view></router-view>
  </v-app>
 

 

  
</template>


<script>
  export default {
    data () {
      return {
        right: null,
      }
    },
  }
</script>

<style>

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
    
  }

  .list-item{
    text-decoration: none;
  }

</style>