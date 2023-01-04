<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 border-red-600 bg-red-600 text-white"
  >
    <slot>YouTube</slot>
  </a>
</template>

<script>
export default {
  name: "YouTubeButton",

  setup(props) {
    const href = props.href;
    return {
      href,
    };
  },
};
</script>

<style scoped></style>
