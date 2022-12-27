<template>
  <Navbar></Navbar>
 <div class="container mt-3">
  <Main></Main>
 </div>
</template>

<script>
import Main from './components/Main.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Main, 
    Navbar
  }
}
</script>
