<template>

<v-main style="background-color: #333;">

  <div class="table-card" >
    <v-data-table
      :headers="headers"
      :key="user"
      :items-per-page="15"
      :items="users"  
    >


    </v-data-table>
  </div>


</v-main>
</template>

<script>
  import {mapState} from "vuex";
  export default {
        name: "hello-world",
        computed: mapState(['users']),
        created() {
          this.$store.dispatch('loadUsers');
        },

    data () {
      return {
        headers: [
          {
            
            text: 'Id',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          
          { text: 'Imię i nazwisko', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Nr. telefonu', value: 'phone' },
          { text: 'Nazwa Firmy', value: 'company.name' },
          { text: 'Akcje', value: '' },
        ],
      }
    },
  }
</script>

<style>
.table-card{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 70%;
}

</style>