<template>
    <div style="background-color: #101114">
       <div class="container-fluid" style="padding: 20px 10px; width: 100%">
            <div class="footerlogos" style="text-align: center; ">
                <div class="row" style="width: 100%">
                    <div class="col-sm-3" style="padding: 0 4vh">
                      <img src="../assets/logoabajo.png" class="logoabajo" style="width: 60%; padding: 0; bottom: 20px">
                      <p>Seguinos por nuestras redes sociales</p>
                        <span >
                            <a href="https://instagram.com/improveitsm?igshid=a4mtov6e0ty"><img src="@/assets/i_white.png" class="iconosFooter" ></a>
                            <a href="https://www.linkedin.com/company/improve-it-sport-management/about/?viewAsMember=true"> <img src="@/assets/l_white.png" class="iconosFooter"></a>
                        </span>
                    </div>

                    <div class="col-sm-3" style="padding: 4vh">
                        <div class="row">
                            <div class="col-sm-12" style="width: 100%">
                                <h4>PARTNERS</h4>
                            </div>
                        </div>
                        <div class="row justify-content-center align-items-center minh-100">
                            <div class="col-sm-12" style="padding: 0 3vw; width: 100%">
                                <a href="https://www.delfasoft.com/"><img src="@/assets/logodelfasoft2.png" style=" padding-top: 30px; width: 96%" class="iconosFooter"></a> <br>
                                <a href="https://www.delfasport.com/"><img src="@/assets/logo_white.png" style=" padding-top: 30px; width: 100%" class="iconosFooter" ></a>

                            </div>

                        </div>
                    </div>


                    <div class="col-sm-6" style="padding: 4vh; width: 100%">
                        <div class="row"></div>
                          <div class="col-sm-12" style="width: 100%">
                                <h4>ADVISORS</h4>
                          </div>
                          <div class="row width: 100%">
                              <div class="col-sm-6" style="padding: 0 3vh; width: 100%">
                                <a href="https://www.linkedin.com/in/daniel-macri-larrañaga-00754723/"><img src="@/assets/logodoctordaniel.png" style=" padding-top: 40px; width: 100%" class="iconosFooter" ></a>
                              </div>
            
                              <div class="col-sm-6" style="padding: 0 3vh; width: 100%">
                                <a href="http://fca.com.uy/"><img src="@/assets/logoFCA.png" style="padding-top: 20px; width: 60%" class="iconosFooter"></a>
                              </div>
                        </div>


                        </div>
                        

                    </div>  <!-- col-sm6 -->
  
                

                </div> <!-- primer row -->
                
            </div>
    </div> 
     
</template>


<script>
export default {
    name: 'footer'
  
}
</script>


<style scoped>
     .redes {
        color: white;
        text-align: center;
        padding-top: 30px;
    }

    .footerlogos {
        color: white;
        text-align: center;

    }
   
   .iconosFooter:hover {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

/* ---------------shake */

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }




  .box16{text-align:center;color:#fff;position:relative}
  .box16 .box-content,.box16:after{width:100%;position:absolute;left:0}
  .box16:after{content:"";height:100%;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.08) 69%,rgba(0,0,0,.76) 100%);top:0;transition:all .5s ease 0s}
  .box16 .post,.box16 .title{transform:translateY(145px);transition:all .4s cubic-bezier(.13,.62,.81,.91) 0s}
  .box16:hover:after{background:linear-gradient(to bottom,rgba(0,0,0,.01) 0,rgba(0,0,0,.09) 11%,rgba(0,0,0,.12) 13%,rgba(0,0,0,.19) 20%,rgba(0,0,0,.29) 28%,rgba(0,0,0,.29) 29%,rgba(0,0,0,.42) 38%,rgba(0,0,0,.46) 43%,rgba(0,0,0,.53) 47%,rgba(0,0,0,.75) 69%,rgba(0,0,0,.87) 84%,rgba(0,0,0,.98) 99%,rgba(0,0,0,.94) 100%)}
  .box16 img{width:100%;height:auto}
  .box16 .box-content{padding:20px;margin-bottom:20px;bottom:0;z-index:1}
  .box16 .title{font-size:22px;font-weight:700;text-transform:uppercase;margin:0 0 10px}
  .box16 .post{display:block;padding:8px 0;font-size:15px}
  .box16 .social li a,.box17 .icon li a{border-radius:50%;font-size:20px;color:#fff}
  .box16:hover .post,.box16:hover .title{transform:translateY(0)}
  .box16 .social{list-style:none;padding:0 0 5px;margin:40px 0 25px;opacity:0;position:relative;transform:perspective(500px) rotateX(-90deg) rotateY(0) rotateZ(0);transition:all .6s cubic-bezier(0,0,.58,1) 0s}
  .box16:hover .social{opacity:1;transform:perspective(500px) rotateX(0) rotateY(0) rotateZ(0)}
  .box16 .social:before{content:"";width:50px;height:2px;background:#fff;margin:0 auto;position:absolute;top:-23px;left:0;right:0}
  .box16 .social li{display:inline-block}
  .box16 .social li a{display:block;width:40px;height:40px;line-height:40px;background:#6d3795;margin-right:10px;transition:all .3s ease 0s}
  .box17 .icon li,.box17 .icon li a{display:inline-block}
  .box16 .social li a:hover{background:#bea041}
  .box16 .social li:last-child a{margin-right:0}
  @media only screen and (max-width:990px){.box16{margin-bottom:30px}
}

/* --------------- fin shake */
</style>
