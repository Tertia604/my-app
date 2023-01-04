<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Meals for {{ ingredient.setIngredient }}
    </h1>
  </div>
  <Meals :meals="meals" />
</template>

<script>
import { computed } from "vue";

import store from "../store/index.js";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

export default {
  name: "MealsByIngredient",
  components: { Meals },
  setup() {
    const route = useRoute();
    const ingredient = computed(() => {
      return store.state.ingredient;
    });
    const meals = computed(() => store.state.searchByIngredient);

    store.dispatch("searchMealsByIngredient", route.params.ingredient);
    return {
      ingredient,
      meals,
    };
  },
};
</script>

<style scoped></style>