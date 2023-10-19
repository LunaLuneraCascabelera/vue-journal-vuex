<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola App</h1>

    <button @click="goToDayBook" class="btn btn-primary me-2">Primary</button>
    <button @click="goToDayBook" class="btn btn-secondary me-2">Secondary</button>
    <button @click="goToDayBook" class="btn btn-success">Success</button>
  </div>
</template>

<script>
  export default {
    methods: {
       goToDayBook() {
         this.$router.push({ name:'no-entry' })  //redireccionar
       }
    }
  }
</script>
