<template>
  <div class="w-full bg-[#212121] h-auto my-2 p-2 rounded mx-1 text-white">
    <div class="grid row-2">
      <div>prefix: {{ font.prefix }}</div>
      <div>
        classes:
        <span v-for="(item, index) in font.classes" :key="index">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    font: {
      type: Object,
      required: true,
    },
  },
};
</script>
