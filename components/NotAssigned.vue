<template>
<div class="overflow-y-auto overflow-x-hidden shadow-md h-full no-scrollbar">
  <draggable group="fonts" :list="group" class="">
    <FormatCard
      class="list-group-item"
      v-for="(font, index) in group"
      :key="index"
      :font="font"
    />
  </draggable>
</div>
</template>

<script>
export default {
    props: {
        group: {
            type: Array,
            required: true
        },
    }
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>