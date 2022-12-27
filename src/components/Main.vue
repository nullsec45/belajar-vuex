<template>
  <div class="main">
    <h1 class="text-center">Daftar Anggota</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <button class="float-end btn btn-primary mb-3 mt-3" @click.prevent="addViewMethod()">Tambah Member</button>
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nama</th>
              <th scope="col">Point</th>
            </tr>
          </thead>
          <!-- <tbody v-if="singleView">
            <Member :member="active_member"></Member>
          </tbody> -->
          <tbody>
            <Member v-for="member in members" :member="member"></Member>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6" v-if="singleView">
              <button @click.prevent="close('active_member')" class="btn btn-danger float-end">X</button>
              <Detail :member="active_member"></Detail>
              <div class="mb-3 " v-if="editView">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="name" v-model="active_member.name">
                <button @click.prevent="close('edit')" class="btn btn-danger float-end mt-3">Cancel</button>
              </div>
      </div>            
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6" v-if="addView">
         <Add :member="member"></Add>
      </div>
    </div>
    
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Member from "./Member";
import Detail from "./Detail";
import Add from "./Add";

export default {
  name: 'Main',
  computed:{
    ...mapGetters(["members","singleView","active_member","editView","addView","member"])
  },
  components:{
    Member,
    Detail,
    Add
  },
  methods:{
    ...mapActions([
      "close",
      "addMember",
      "addViewMethod"
    ])
  }
}
</script>


