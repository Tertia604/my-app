<template>
  <Navbar />
  <main>
    <div class="max-w-[1200px] mx-auto">
      <router-view />
    </div>
  </main>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "DefaultLayout",
  components: { Navbar },
};
</script>

<style scoped></style>
