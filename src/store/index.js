import { createStore } from 'vuex'
import * as mutations from './mutation-types';

export default createStore({
  state: {
    active_member:null,
    singleView:false,
    editView:false,
    addView:false,
    member:{
      id:"",
      name:"",
      points:""
    },
    members:[
      {
        id:1,
        name:'Rama Fajar',
        points:10
      },
      {
        id:2,
        name:'Entong',
        points:5
      },
      {
        id:3,
        name:'Joko',
        points:10
      },
      {
        id:4,
        name:"Tatang",
        points:30
      }
    ]
  },
  getters: {
    members:state => {
      return state.members.sort((a,b) =>{
        return a["points"] - b["points"]
      })
    },
    singleView:state =>{
      return state.singleView
    },
    active_member:state=>{
      return state.active_member
    },
    editView:state => {
      return state.editView
    },
    addView:state =>{
      return state.addView
    },
    member:state=>{
      return state.member
    }
  },
  mutations: {
    [mutations.SHOW_MEMBER](state,member){
      state.singleView=true
      state.active_member=member
    },
    [mutations.CLOSE](state, type){
      switch(type){
          case "active_member":
            state.singleView=false
            state.active_member=null
          break;
          case "add":
            state.addView=false
          break;
          case "edit":
            state.editView=false
          break;
      }

    },
    [mutations.EDIT_VIEW](state){
      state.editView=true
    },
    [mutations.ADD_VIEW](state){
      state.addView=true
      state.member.id=state.members.length+1;
      state.member.name="";
      state.member.points=0;
    },
    [mutations.ADD_MEMBER](state){
      state.addView=false;
      state.members.push(state.member)
    },
    [mutations.REMOVE_MEMBER](state, id){
        state.singleView=false
        state.members=state.members.filter((member) => {
            return member.id !== id
        })
    }
  },
  actions: {
    showMember(context, member){
      context.commit(mutations.SHOW_MEMBER, member)
    },
    close(context, type){
      context.commit(mutations.CLOSE, type)
    },
    editView(context){
      context.commit(mutations.EDIT_VIEW)
    },
    addMember(context){
      context.commit(mutations.ADD_MEMBER)
    },
    addViewMethod(context){
      context.commit(mutations.ADD_VIEW)
    },
    removeMember(context, id){
      context.commit(mutations.REMOVE_MEMBER, id)

    }
  },
  modules: {
  }
})
