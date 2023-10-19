<template lang="">
    
    <div class="entry-view-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light">2023, martes</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">Borrar <i class="fa fa-trash-alt"></i></button>
            <button class="btn btn-primary">Subir Foto <i class="fa fa-upload"></i></button>
        </div>
    </div>
    
    <hr>
    
    <div class="entry-view-description d-flex flex-column px-3 h-75">
       <textarea placeholder="¿Qué sucedió hoy?"></textarea> 
    </div>
    <img src="data:image/jpeg;base64,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"
         alt="EntryPicture">

    <Fab icon="fa-save"/>

    
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {

    components:{
        Fab:  defineAsyncComponent( () => import('../components/Fab.vue') )
    },
}
</script>

<style lang="scss" scoped>

    textarea{
        font-size: 20px;
        border: none;
        height: 100%;
        &:focus {
            outline:none;
        }
    }
    img{
        width: 200px;
        position:fixed;
        bottom:150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
    }
    
</style>