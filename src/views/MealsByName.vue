<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Search Meals by Name
    </h1>
  </div>
  <div class="p-8 pb-3">
    <input
      type="text"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for meals..."
      v-model="keyword"
      @change="searchMeals"
    />
  </div>

  <Meals :meals="meals" />
  <!--  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">-->
  <!--    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />-->
  <!--  </div>-->
</template>

<script>
import { computed, onMounted, ref } from "vue";
import store from "../store/index.js";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import Meals from "../components/Meals.vue";

export default {
  name: "MealsByName",
  components: { Meals, MealItem },
  setup() {
    const route = useRoute();

    const keyword = ref("");
    const meals = computed(() => store.state.searchedMeals);

    function searchMeals() {
      if (keyword.value) {
        store.dispatch("searchMeals", keyword.value);
      } else {
        store.commit("setSearchedMeals", []);
      }
    }

    keyword.value = route.params.name;
    if (keyword.value) {
      searchMeals();
    }

    return {
      keyword,
      searchMeals,
      meals,
    };
  },
};
</script>

<style scoped></style>
