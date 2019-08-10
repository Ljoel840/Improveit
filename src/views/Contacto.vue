<template>
    <div>
        <div class="container-fluid"  style="padding: 0">
          <img src="../assets/fondo_contacto.jpg" alt="fondo" class="fondo">
        </div>
<!-- ----------------------------------------------------------------  -->

    <div class="contacto" >
          <div class="container-fluid" >
                <div class="row">
                    <div class="col-sm-4" style="padding: 3vw">
                            <div id="textoContacto">
                                <h3>ESCRIBE TU CONSULTA</h3> <br>
                            </div>
                            <form @submit.prevent="validateBeforeSubmit">
                                <div class="column is-12">
                                    <!-- <label class="label">Correo</label> -->
                                    <p class="control has-icon has-icon-right">
                                        <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Correo">
                                        <i v-show="errors.has('email')" class="fa fa-warning"></i>
                                        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                                    </p>
                                </div>
                                <div class="column is-12">
                                    <!-- <label class="label">Nombre</label> -->
                                    <p class="control has-icon has-icon-right">
                                        <input name="name" v-model="name" v-validate="'required|alpha_spaces'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Nombre">
                                        <i v-show="errors.has('name')" class="fa fa-warning"></i>
                                        <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                                    </p>
                                </div>
                                <div class="column is-12">
                                    <!-- <label class="label">Teléfono</label> -->
                                    <p class="control has-icon has-icon-right">
                                        <input name="phone" v-model="phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Teléfono">
                                        <i v-show="errors.has('phone')" class="fa fa-warning"></i>
                                        <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
                                    </p>
                                </div>
                                <div class="column is-12">
                                    <!-- <label class="label">Mensaje</label> -->
                                    <p class="control has-icon has-icon-right">
                                        <textarea name="message" v-model="message" v-validate="'required|min:5'" :class="{'input': true, 'is-danger': errors.has('message') }" type="text" placeholder="Consulta"></textarea>
                                        <i v-show="errors.has('message')" class="fa fa-warning"></i>
                                        <span v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</span>
                                    </p>

                                </div>

                                <div class="column is-12">
                                    <p class="control">
                                        <button class="button is-primary " type="submit">Enviar</button>
                                    </p>
                                </div>
                            </form>


                    </div>

<!-- ------------------------------------------------------------------------- -->
                    <div class="col-sm-4 medio" style="background: rgba(0,0,0,0.8);  padding: 50px; height: 80vh" >
                            <h3 class="textoContacto" style="font-weight: lighter"> Agencia de representación y asesoramiento enfocada en potenciar a los mejores talentos y actores del deporte. </h3>
                            <h3 class="textoContacto" style="font-weight: lighter">Lo que inspira nuestro trabajo es formar deportistas de élite altamente capacitados para participar del esfuerzo que les lleva a cumplir sus sueños.</h3>
                            <br><br>
                            <br><br>
                            <button class="botonCorreo btn"><span class="glyphicon glyphicon-envelope"></span>andres@improvesm.uy</button>
                            <br><br><br><br>
                    </div>
                    <div class="col-sm-4" style="padding: 0 0 0 15px">
                            <div class="row">
                                <a href="https://instagram.com/improveitsm?igshid=a4mtov6e0ty"><img src="../assets/i_color.png" alt="instagram" class="botonColor"> </a>
                            </div>
                            <div class="row">
                                <a href="https://www.linkedin.com/company/improve-it-sport-management/about/?viewAsMember=true">
                                <img src="../assets/l_color.png" alt="lidekin" class="botonColor"> </a>
                            </div>
                            <div class="row" style=" padding: 15vw 0 0 0; display: flex; justify-content: center; align-items: center">
                                    <img src="../assets/logoabajo.png" alt="logoabajo" >
                            </div>
                    </div>
            
                </div><!-- /row -->
            </div> <!-- /container-fluid -->
        </div><!-- /contacto -->
        <!-- <Footer></Footer> -->

     </div> <!--principal -->
</template>

<script>
let emailjs = require("emailjs-com");
import Footer from '@/components/Footer.vue';
import VeeValidate from 'vee-validate';
// import axios from 'axios'
export default {
    name: 'Contacto',
      components: {
    Footer
  },
    data: () => ({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
    email: '',
    name: '',
    phone: '',
    message: '',
    message_html: "",
    to_name:""
  }),

  created(){
    emailjs.init("user_JreKAVScxbzVaqoyScVhB");
  },

  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Formulario Enviado');
          
      let data = {
        from_name: this.name,
        to_name: this.email,
        phone: this.phone,
        message_html: this.message,
        subject: 'Consulta'
      };

      // if (this.$refs.form.validate()) {
      console.log(data);

        emailjs.send("default_service", "contacto", data).then(
          function(Response) {
            if (Response.text === "OK") {
              //alert("El correo se ha enviado con éxito");
            }
            console.log(
              "SUCCESS. status=%d, text=%s",
              Response.status,
              Response.text
            );
          },
          function(err) {
            alert("Ocurrio un problema al enviar  el correo");
            console.log("FAILDED. error=", err);
          },
          // this.$refs.form.reset()
        );
        //   submit();
          return;
        }


        alert('Corrige estos errores');
      });
    }
  },


}




</script>

<style scoped>

.is-danger {
    color:#5069C3;
  
}
.contacto {
    position: absolute;
    top: 90px;
    color:  white;
}

.contacto col-sm-4 {
    padding: 15px;
}

.fondo {
    width: 100%;
    height: auto;
    top: 0;

}

    /* --------------formulario Contacto */
form{
    margin: 0 auto;
    width: 100%;
    color: white;
    border-radius: 7px;
    box-sizing:border-box;
    margin-top:10px;
    text-align: left;
   } 
   input,textarea,select{
    color: white;
    width: 100%;
    margin-bottom: 20px;
    padding: 7px;
    box-sizing:border-box;
    font-size: 17px;
    border: none;
    background: rgba(254, 254, 254, 0.3)
   }
   
   form h2{
    color: white;
    margin-bottom: 20px;
    display:inline-block;
   }
   textarea{
    max-height: 300px;
    min-height:200px;
    max-width: 100%;
   }

   label {
       font-size: 12px
   }
   .botonAcceder {
       width : 50%;
   }


   .button {
    width: 50%;
    border: none;
    color: white;
    background: transparent;
    background-color: #9A175B;
    padding: 20px 40px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
}

   .button:hover{
    cursor:pointer;
    color: white;
    background-color: #5069C3;
   }

   ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
     color: rgba(254, 254, 254, 0.4);
     opacity: 1; /* Firefox */
   }
   
   :-ms-input-placeholder { /* Internet Explorer 10-11 */
     color: rgba(254, 254, 254, 0.4);
   }
   
   ::-ms-input-placeholder { /* Microsoft Edge */
     color: rgba(254, 254, 254, 0.4);
   }



/* -----------Fin formulario Contacto */

.botonCorreo {
    width: 300px;
    border: none;
    color: white;
    background: transparent;
    background-color: #5069C3;
    padding: 20px 40px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    text-decoration: none;
}

.botonCorreo:hover{
    cursor:pointer;
    color: white;
    background-color: #9A175B;

}



</style>
