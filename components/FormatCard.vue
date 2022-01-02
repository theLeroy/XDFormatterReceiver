<template>
  <div class="w-full bg-[#212121] h-auto my-2 p-2 rounded mx-1 text-white">
    <div class="">
      <div class="flex justify-between">
        <label id="prefix">Prefix: {{font.prefix}}</label>
        <input
          id="prefix"
          v-model="font.prefix"
          type="text"
          class="bg-none bg-opacity-0 rounded px-2 py-1 w-20"
        />
      </div>
      <div class="mt-2">
        
        <div>Classes:</div>
        <span v-for="(item, index) in font.classes" :key="index" class="break-normal">
         {{font.prefix + item }}
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

<style scoped>
input {
  background-color: rgba(0, 0, 0, 0);
  outline: rgba(255, 255, 255, 0.5 ) solid 1px;
}
</style>