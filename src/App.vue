<template>
  <AppHeader />
  <div class="w-full flex">
    <DcHeros />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import DcHeros from "./components/DcHeros.vue";
export default {
  components: { AppHeader, DcHeros },
  data() {},
};
</script>

<style>
</style>