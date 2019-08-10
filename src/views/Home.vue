<template>
  <div class="home">
    <!-- <div class="container-fluid" style="padding: 0">
    <img alt="fondo" src="../assets/fondo_improveit2.jpg" style="width:100%; height: auto"></div> -->
    <carousel></carousel>

     <!-- <div id="carouselPrincipal" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner" >
            <div class="carousel-item active" style="background-image: url('./assets/fondo_improveit2.jpg')">
                <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item" style="background-image: url('./assets/fondo_improveit.jpg')">
                <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item" style="background-image: url('./assets/fondo_improveit3.jpg')">
                <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item" style="background-image: url('./assets/fondo_improveit4.jpg')">
                <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item" style="background-image: url('./assets/fondo_improveit2.jpg')">
                <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item" style="background-image: url('./assets/fondo_improveit5.jpg')">
                <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item" style="background-image: url('./assets/fondo_improveit6.jpg')">
                <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item" style="background-image: url('./assets/fondo_improveit7.jpg')">
                <div class="carousel-caption d-none d-md-block"></div>
            </div>
        </div>
    </div> -->
<section class="informacion">
          <div class="container-fluid" style="padding: 0" >
              <img src="../assets/lineablanca.png" alt="separador1" style=" width: 100%" >
              
          </div>
          <br>
          <br>
          <br>
          <br>


          <!-- vere si puedo poner este

          <div class="sep2">
              <img src="/static/img/separador1.png" alt="separador1">
          </div> -->
            <div class="info">
              <div class="container-fluid" style="width: 100%; height: auto">
                <div class="row" style="width: 100%; height: auto">
                    <div class="col-sm-8" style="padding: 2% 5%; color:white">
                        <h3 style="font-size: 3vh ">Improve-It Sports Management es una agencia de representación y asesoramiento enfocada en potenciar a los mejores talentos y actores del deporte. Entregamos resultados, no promesas; utilizando estrategias solidas e innovadoras que mantienen a nuestros clientes a la vanguardia del mercado.  
                        </h3> 
                      
                        <h3 style="font-size: 3vh "> En base a nuestra experiencia hemos elaborado un nuevo estilo de representación individualizado y de alto impacto. Las personas que trabajan para nuestra empresa han sido seleccionadas por su dedicación, creatividad y pasión por el deporte.
                        </h3>
                    </div>
                    <div class="col-sm-4" > <img src="../assets/logomedio.png" alt="logomedio" style="width: 100%; height: auto"> </div>

                </div>

              </div>
          </div>
      </section>


<section class="servicios">
     <div class="separador"> 
          <div class="container-fluid" style="padding: 0" >
              <div class="col-md-12" style="padding: 0">
                  <div class="prueba">
                      <div class="content-section">
                              <img src="../assets/img1.png" alt="separador2" style="width: 100%; height:auto" >
                              <div class="serviciosImagenes">
                                  <a href="/deportistas.html">
                                      <img src="../assets/img2.png" alt="imagen1" style="width: 100%; height:auto">
                                      <h1 class="textoImagenes">Representación de Deportistas </h1>
                                  </a>
                              </div>
                              <div class="serviciosImagenes">
                                  <a href="/marcas.html">
                                      <img src="../assets/img3.png" alt="imagen1" style="width: 100%; height:auto">
                                      <h1 class="textoImagenes2">Marcas y Empresas</h1>
                                  </a>
                              </div>
                              <div class="serviciosImagenes">
                                  <a href="/eventos.html">
                                      <img src="../assets/img4.png" alt="imagen1" style="width: 100%; height:auto">
                                      <h1 class="textoImagenes">Eventos y Capacitaciones </h1>
                                  </a>
                              </div>
                              <div class="serviciosImagenes">
                                  <a href="/asesoramiento.html">
                                      <img src="../assets/img5.png" alt="imagen1" style="width: 100%; height:auto">
                                      <h1 class="textoImagenes2">Asesoramiento y Ventas</h1>
                                  </a>
                              </div>
                      </div> <!--content-section-->
                </div> <!-- prueba -->
              </div>
          </div>
      </div>
    </section>

    <Footer> </Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import carousel from '@/components/carousel.vue';

export default {
  name: 'home',
  components: {
    Footer,
    carousel
  }
}

$('#carouselPrincipal').carousel({
    interval: 2500
  })
  


</script>


<style>

 .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }


  .textoImagenes {
      position: absolute;
      margin-top: -30vw;
      right: 5vw;
      color: #fff;
      font-size: 3.5vw     

  }
  .textoImagenes2 {
    position: absolute;
    margin-top: -30vw;
    left: 5vw;
    color: #fff;
    font-size: 3.5vw     

}

/* P {
  color: white;
}
.carousel-item {
    height: 95vh;
    min-height: 350px;
    background: no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
   
  }

.carouselPrincipal {
    z-index: 0;
} */

</style>

