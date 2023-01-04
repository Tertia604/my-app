<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
  </div>
  <div class="flex justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters.split('')"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
      >{{ letter }}</router-link
    >
  </div>

  <Meals :meals="meals" />
</template>

<script>
import { computed, watch } from "vue";
import store from "../store/index.js";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import Meals from "../components/Meals.vue";

export default {
  name: "MealsByLetter",
  components: { Meals, MealItem },
  setup() {
    const route = useRoute();
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const meals = computed(() => store.state.searchByLetter);

    store.dispatch("searchMealsByLetter", route.params.letter);

    watch(route, () => {
      store.dispatch("searchMealsByLetter", route.params.letter);
    });

    return {
      letters,
      meals,
    };
  },
};
</script>

<style scoped></style>
