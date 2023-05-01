<template>
  <nav class="navbar navbar-expand-xl navbar-ligth fondoImg">
  <div class="container-fluid">
    
    <a class="navbar-brand logo" href="#" ><img id="logo"  style="width: 100%; height: auto;" src="../assets/logo2.png"></a>
    
    <!-- BARRA NAVEGACION 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>-->
  </div>
</nav>
</template>

<script>
export default {
  name: 'AppNavbar',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Estilos para pantallas más grandes que 768px */
  @media screen and (min-width: 768px) {
    .logo {
      width: 100%;
      max-width: 120px; /* Tamaño máximo del logo */
      height: auto;
    }
  }

  /* Estilos para pantallas más pequeñas que 768px */
  @media screen and (max-width: 767px) {
    .logo {
      width: 100%;
      max-width: 70px; /* Tamaño máximo del logo */
      height: auto;
    }
  }

.fondoImg {
  background-image: url("../assets/swim.jpg");
  background-size: cover; /* Ajusta el tamaño de la imagen para que cubra todo el elemento */
  background-position: center; /* Centra la imagen vertical y horizontalmente */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  }

</style>
