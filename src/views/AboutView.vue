<template>


  <div class="hello">
    <table class="users">
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
      <tr v-for="user in users" :key="user">

        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
       
      </tr>
    </table>
  </div>

  


</template>

<script>
import {mapState} from "vuex";
export default {
  name: "hello-world",
  computed: mapState(['users']),
  created() {
    this.$store.dispatch('loadUsers');
  },
  data(){
    return{
      headers: [
        {text: "id", value: "id"}
      
      ]
    }
  }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>