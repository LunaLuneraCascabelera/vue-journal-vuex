<template>

    <div class="entry-container mb-3 pointer p-2" 
        @click="$router.push({ name:'entry', params: { id: 10 } })">
    
        <!-- Título -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">16</span>
            <span class="mx-1 fs-5">Octubre</span>
            <span class="mx-2 fw-light">2023, lunes</span>
        </div>
         <!-- Descrip -->
        <div class="entry-description">
            Cillum esse nostrud reprehenderit qui incididunt culpa pariatur excepteur ullamco. Aliquip irure ea dolor mollit commodo do duis aute tempor dolor fugiat. Pariatur eu eu sit tempor occaecat dolor laboris consectetur Lorem deserunt commodo do.
        </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .entry-container{
       border-bottom: 1px solid #2c3e50;
       transition: 0.2s all ease-in; 
       &:hover{
         background-color: lighten($color: grey, $amount: 45);
         transition: 0.2s all ease-in; 
       }
       .entry-title{
          margin: 0;
       }
       .entry-description{
            font-size: 14px;
        }
    } 
       
</style>