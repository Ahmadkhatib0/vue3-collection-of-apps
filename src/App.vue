<template>
  <AppHeader />
  <div class="w-full flex">
    <!-- <DcHeros /> -->
    <Calender />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
// import DcHeros from "./components/DcHeros.vue";
import Calender from "./components/Calender.vue";
export default {
  components: { AppHeader, Calender },
  data() {},
};
</script>

<style>
</style>