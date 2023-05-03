<template>
  <div class="m-auto">
    <h1 class="text-center text-2xl">Dc Heros {{ heroCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        :key="index"
      >
        <div>{{ hero.name }}</div>
        <button @click="remove(hero)">x</button>
      </li>
    </ul>
    <form @submit.prevent="addHeros" class="mt-10">
      <input
        class="border rounded"
        v-model.number="newHero"
        placeholder="Type Hero here"
        ref="newHeroRef"
      />
      <button
        type="submit"
        class="border rounded bg-gradient-to-t from-red-700 to-pink-500"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeros = ref([
      { name: "SuperGirl" },
      { name: "BatMan" },
      { name: "Superman" },
    ]);
    console.log("abc");

    onMounted(function(){
      newHeroRef.value.focus()
    })

    
    const heroCount = computed( {
      get: ()=>dcHeros.value.length,
    })


    function remove(index) {
       dcHeros.value = dcHeros.value.filter((i) => i != index);
     // dcHeros.value.pop(index)
    }
    function addHeros() {
      if (newHero.value !== "") {
        dcHeros.value.unshift({name:newHero.value});
        newHero.value = "";
      }
    }
    return {dcHeros, newHero, remove,addHeros,newHeroRef,heroCount };
  },
  data() {
    return {
      isActive: false,
    };
  },

};
</script>

<style>
</style>