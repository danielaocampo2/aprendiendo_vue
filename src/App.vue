<template>
    <Navbar />
    <div class="d-flex flex-column justify-content-center align-items-center" style="min-height: calc(100vh - 200px);">
      <router-view />
    </div>
    <Footer />
 
</template>

<script>
import Navbar from './components/Navbar.vue'

import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    
   
    Footer
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh; /* establece la altura mínima del contenedor a 100% de la altura de la ventana */
  display: flex; /* establece el contenedor como un flex container */
  flex-direction: column; /* establece la dirección de los elementos como columnas */

}

.app-container {
  flex: 1; /* hace que el contenedor se expanda para llenar todo el espacio disponible */
  display: flex; /* establece el contenedor como un flex container */
  flex-direction: column; /* establece la dirección de los elementos como columnas */
}

Footer {
  margin-top: auto; /* empuja el componente Footer al final del contenedor */
}
.globalColor{
  background:  rgb(6 156 198);
}
</style>
