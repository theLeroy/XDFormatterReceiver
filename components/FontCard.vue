<template>
  <div>
  <slot></slot>
    <draggable
      group="fonts"
      :list="group"
      class="bg-[#383838] shadow-md h-80 p-2"
    >
      <div class="list-group-item" v-for="(font, index) in group" :key="index">
        <FormatCard :font="font" />
      </div>
    </draggable>
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
input {
  @apply w-full bg-transparent;
}
</style>