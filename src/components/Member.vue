<template>
    <!-- <li class="list-group-item">{{member.name}} - {{member.points}}</li> -->

    <tr >
          <th scope="row">{{member.id}}</th>
          <td @click.native.prevent="showMember(member)">{{member.name}}</td>
          <td @click.native.prevent="showMember(member)">{{member.points}}</td>
    </tr>
</template>

<script>
import {  mapActions } from 'vuex';

export default{
    props:[
        "member",
    ],
    methods:{
        ...mapActions([
        "editView",
        "showMember",
        ])
    }
}
</script>