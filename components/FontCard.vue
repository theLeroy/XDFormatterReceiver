<template>
  <draggable group="fonts" :list="group" class="bg-[#383838] shadow-md h-80">
      <div class="w-full">{{name}}</div>
      asdasd
    <div
      class="list-group-item"
      v-for="(font, index) in group"
      :key="index"
    >
      <FormatCard :font="font" />
    </div>
  </draggable>
</template>

<script>
export default {
    props: {
        group: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            required: false
        
        }
    }
}
</script>