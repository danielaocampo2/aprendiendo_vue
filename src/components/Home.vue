<template>
  <div class="container my-5 ">
    <div class="d-grid gap-4 col-6 mx-auto " >
      <button class="btn btn-primary btn-xl globalColor"   type="button"  @click="goTo('login')">Iniciar Sesión</button>
      <button class="btn btn-primary btn-xl globalColor"  type="button">Preguntas Frecuentes</button>
      <button class="btn btn-primary btn-xl globalColor "  type="button">Configuración</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHome',
  methods: {
    goTo(page) {
      console.log(page)
      this.$router.push('/login');
    }
  }
}

</script>
<style scoped>

.btn-xl {
  padding: 1.25rem 2.5rem;
  font-size: 1.5rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

</style>