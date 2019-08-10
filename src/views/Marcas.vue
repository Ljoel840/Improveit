<template>
    <div>
        <!-- <h3>prueba</h3> -->
    <!-- <div class="container-fluid" style="padding: 0">
    <img alt="fondo" src="../assets/fondo_improveit2.jpg" style="width:100%; height: auto"></div> -->

<!-- ------------------------------------------- -->
        <div style="width:100%;height:55vw">
            <!-- Using the slider component -->
            <slider ref="slider" :options="options">
                <!-- slideritem wrapped package with the components you need -->
                <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">
                    <div>
                     <img :src="item.imagen" alt="img">
                     </div>
                </slideritem>
                <!-- Customizable loading -->
                <div slot="loading">loading...</div>
            </slider>
        </div>
 

<!-- -------------------------------------------- -->

    </div> 
</template>



<script>
import { slider, slideritem } from 'vue-concise-slider'
export default {
    name: 'Marcas',
    data () {
    return {
        //data list [array]
        someList:[
          {
            imagen:  require('@/assets/fondo_improveit2.jpg'),
            html: "<p> prueba</p>",
            style: {
              'background': '#1bbc9b'
            }
          },
          {
            imagen: require('@/assets/fondo_improveit.jpg'),
            html: 'slide2',
            style: {
              'background': '#4bbfc3'
            }
          },
          {
            imagen: require('@/assets/fondo_improveit3.jpg'),
            html: 'slide3',
            style: {
              'background': '#7baabe'
            }
          }
        ],
        //Slider configuration [obj]
        options: {
          currentPage: 0,
          thresholdDistance: 500,
          thresholdTime: 100,
          autoplay:3000,
          loop:true,
          infinite:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          duration: 300,
          
        }
      }
    },
    components: {
      slider,
      slideritem
    }
 
    
}




</script>

<style scoped>







</style>
