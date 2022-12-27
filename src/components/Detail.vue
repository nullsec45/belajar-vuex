<template>
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nama</th>
              <th scope="col">Point</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
     
          <tbody>
            <tr >
                <td>{{member.id}}</td>
                <td>{{member.name}}</td>
                <td>{{member.points}}</td>
                <td>
                  <button class="btn btn-warning me-3"  @click.prevent="editView()">Edit</button>
                  <button class="btn btn-danger"  @click.prevent="removeMember(member.id)">Delete</button>
                </td>
           </tr>
          </tbody>
        </table>
</template>


<script>
import {mapActions } from 'vuex';

export default{
    props:[
        "member",
    ],
    methods:{
      ...mapActions([
        "editView",
        "removeMember"
      ])
    }
  
}
</script>