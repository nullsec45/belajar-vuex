<template>
         <h4 class="text-center">Add Member</h4>
         <form @submit.prevent="storeMember">
            <div class="mb-3">
                <label for="id" class="form-label">Id</label>
                <input type="text" class="form-control" id="id" placeholder="name" v-model="member.id">
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="name" v-model="member.name">
            </div>
            <div class="mb-3">
                <label for="points" class="form-label">Points</label>
                <input type="text" class="form-control" id="points" placeholder="points" v-model="member.points">
            </div>
            <button class="btn btn-success float-end" @click.prevent="addMember()">Add</button>
            <button class="btn btn-danger float-end me-3" @click.prevent="close('add')">Cancel</button>
          </form>
</template>
<script>
import {  mapActions, mapGetters } from 'vuex';

export default{
    props:[
        "member"
    ],
    computed:{
        ...mapGetters(["member"])
    },
    methods:{
       ...mapActions([
        "close",
        "addMember"
      ])
    },
}
</script>