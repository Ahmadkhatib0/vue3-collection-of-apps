<template>
  <nav
    class="
      px-4
      py-2
      w-full
      bg-gradient-to-r
      from-blue-800
      to-blue-500
      text-white
    "
  >
    <router-link class="mx-2" v-for="item in list" :to="item.to" :key="item.to">
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "Dc Heros", to: "/dc-heros" },
        { title: "Calender", to: "/calender" },
        { title: "Markdown", to: "/markdown" },
      ],
    };
  },
};
</script>

<style>
</style>