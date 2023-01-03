<template>
  <div class="flex flex-col p-8">


    <div class="flex justify-center gap-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters.split('')"
        :key="letter"
        >{{ letter }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";

export default {
  name: "Home",
  setup() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const ingredients = ref([]);

    onMounted(async () => {
      const response = await axiosClient.get("/list.php?i=list");
      ingredients.value = response.data;
    });

    return {
      letters,
      ingredients,
    };
  },
};
</script>

<style scoped></style>
