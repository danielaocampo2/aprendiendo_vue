<template>
  <div class="container d-flex justify-content-center">
    <div class="bg-white my-5 py-1 card">
      <div class="card-body">
        <div class="d-flex justify-content-center">
          <img
            src="../assets/login-icon.svg"
            alt="login-icon"
            style="height: 7rem"
          />
        </div>
        <div class="input-group mt-4">
          <div class="input-group-text globalColor">
            <img
              src="../assets/username-icon.svg"
              alt="username-icon"
              style="height: 1rem"
            />
          </div>
          <input class="form-control bg-light" type="text" placeholder="ID" />
        </div>
        <div class="input-group mt-1">
          <div class="input-group-text globalColor">
            <img
              src="../assets/password-icon.svg"
              alt="password-icon"
              style="height: 1rem"
            />
          </div>
          <input
            class="form-control bg-light"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div class="d-flex justify-content-around mt-1">
          <div class="d-flex align-items-center gap-1">
            <input class="form-check-input" type="checkbox" />
            <div class="pt-1" style="font-size: 0.9rem">Recuerdame</div>
          </div>
          <div class="pt-1">
            <a
              href="#"
              class="text-decoration-none text-info fw-semibold fst-italic"
              style="font-size: 0.9rem"
              >¿Olvido la contraseña?</a
            >
          </div>
        </div>
        <button
          class="btn btn-primary btn-lg globalColor w-100 mt-4 fw-semibold shadow-sm"
          type="button"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLogin",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
