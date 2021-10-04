<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Dc heros {{ herosCount }}</h1>
      <ul>
        <li
          class="justify-between flex"
          v-for="(hero, index) in dcHeros"
          v-bind:key="hero.name"
        >
          <div>
            {{ hero.name }}
          </div>
          <button v-on:click="remove(index)">x</button>
        </li>
      </ul>

      <form @submit.prevent="addHero" class="m-10">
        <input
          v-model="newHero"
          class="border rounded"
          placeholder="Type hero name here "
        />
        <button
          type="submit"
          class="
            border
            rounded
            bg-gradient-to-r
            from-red-700
            to to-pink-500
            text-white
          "
        >
          add hero
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    herosCount() {
      return this.dcHeros.length;
    },
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeros.push({ name: this.newHero });
        this.newHero = "";
      }
    },

    remove(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i !== index);
    },
  },

  data() {
    return {
      newHero: "aquaman",
      //  dcHeros :  ['superGirl' ,"batMan" , 'Superman' ]
      dcHeros: [
        { name: "superGirl" },
        { name: "batMan" },
        { name: "Superman" },
      ],
    };
  },
};
</script>

<style>
</style>