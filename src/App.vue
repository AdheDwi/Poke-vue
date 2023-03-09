<template>
  <div class="min-vh-100">
    <nav class="navbar bg-primary">
      <div class="container">
        <RouterLink class="navbar-brand" style="color: white" to="/">
          <strong>Navbar</strong>
        </RouterLink>
      </div>
    </nav>
    <div class="py-5">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";

export default {
  name: "App",
};
</script>
