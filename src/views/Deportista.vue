<template>
    <div style="color: black">
        <div class="container-fluid" style="padding: 0; margin-top: 100px">
            <div class="tope" >
                <h1  style="color: white; text-align: center; font-size: 4vh; padding: 8% 0">Representación de Deportistas </h1>
            </div>
        </div>
        
        <cargarDeportistas></cargarDeportistas>
        <div class="container-fluid" style="padding: 0" >
              <img src="../assets/lineablanca.png" alt="separador1" style=" width: 100%" >
        </div>
        <Footer></Footer>


    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import cargarDeportistas from '@/components/cargarDeportistas.vue'


export default {
  name: "Deportista",
   components: {
    Footer,
    cargarDeportistas
  }

};
</script>

<style scoped>
.tope {
    background-image: url("../assets/deportista.jpg");
    background-size: cover;
    height: auto;

}
</style>
