<template>
    <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" >
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
          
              <a class="navbar-brand" href="#">
                  <img src="./assets/logoarriba.png" alt="Logo" style="width:100px;">
                </a>

          <div class="collapse navbar-collapse" id="navbarResponsive" >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                  <router-link class="nav-link" to="/" exact>INICIO</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/deportista" >REPRESENTACION DE DEPORTISTAS</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/marcas" >MARCAS Y EMPRESAS</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link"> EVENTOS Y CAPACITACIONES</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link">ASESORAMIENTO Y VENTAS</a>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/contacto" >CONTACTO</router-link>
              </li>
  
            </ul>
          </div>
      </nav>




        <router-view/>
    </div>
</template>


<style>
.navbar {
    background: rgba(0, 0, 0, 0.8);
    color: white;
    align-items: right;
}

.nav-link {
    color: white;
}
.navbar-nav{
    z-index: 9999999;
}

.nav-item{
    color: white;
    padding: 8px;
}



</style>


