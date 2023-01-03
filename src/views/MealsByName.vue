<template>
  <div class="p-8">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals..."
      v-model="keyword"
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link to="/">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl h-48 w-full object-cover"
        />
      </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, facilis
          in nesciunt officia temporibus voluptatibus!
        </p>
        <div class="flex items-center justify-between">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded border-2 border-red-600 bg-red-600 text-white"
            >YouTube</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import store from "../store/index.js";
import { useRoute } from "vue-router";

export default {
  name: "MealsByName",

  setup() {
    const route = useRoute();

    const keyword = ref("");
    const meals = computed(() => store.state.searchedMeals);

    function searchMeals() {
      store.dispatch("searchMeals", keyword.value);
      keyword.value = "";
    }

    onMounted(() => {
      keyword.value = route.params.name;
    });

    return {
      keyword,
      searchMeals,
      meals,
    };
  },
};
</script>

<style scoped></style>
