import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    atletas:   [{nombre:'Crsthian Zamora',especialidad:'Atletismo',foto:require('@/assets/CristhianZamora.jpg')},
                {nombre:'Andres Silva',especialidad:'Atletismo',foto:require('@/assets/AndresSilva.jpg')},
                {nombre:'Maria Pia Fernandez',especialidad:'Atletismo',foto: require('@/assets/MariaPiaFernandez.jpg')},
                {nombre:'Gaspar Cardozo',especialidad:'Atletismo',foto:require('@/assets/GasparCardozo.jpg')},
                {nombre:'Marcos Viera',especialidad:'Atletismo',foto:require('@/assets/MarcosViera.jpg')}
        ]

  },
  mutations: {

  },
  actions: {

  }
})
