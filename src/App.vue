<template>
  <div class="min-vh-100">
    <nav class="navbar bg-primary">
      <div class="container">
        <a class="navbar-brand" style="color: white" href="#">
          <strong>Navbar</strong>
        </a>
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
