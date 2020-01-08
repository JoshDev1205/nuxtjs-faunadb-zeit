<template>
  <div class="font-gelasio min-h-screen bg-blue-100">
    <Navbar />
    <div class="container mx-auto px-4 pt-4">
      <nuxt />
    </div>
  </div>
</template>
<script>
import Navbar from "~/components/Navbar";
export default {
  name: "default",
  components: {
    Navbar
  }
};
</script>
