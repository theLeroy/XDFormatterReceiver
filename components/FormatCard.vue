<template>
  <div class="w-full bg-slate-700 h-auto my-2 p-2 rounded mx-1 text-white">
    <div class="grid row-2">
      <div>tag: {{ font.tag }}</div>
      <div>prefix: {{ font.prefix }}</div>
      <div>
        classes:
        <div v-for="(item, index) in font.classes" :key="index">
          <div>{{ item }}</div>
        </div>
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
