<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-48 w-full object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ $filters.truncateWords(meal.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script>
import YouTubeButton from "../components/YouTubeButton.vue";

export default {
  name: "MealItem",
  components: { YouTubeButton },
  props: {
    meal: {
      type: Object,
      required: true,
    },
  },
  // setup(props) {
  //   const meal = props.meal;
  //
  //   return {
  //     meal,
  //   };
  // },
};
</script>

<style scoped></style>
