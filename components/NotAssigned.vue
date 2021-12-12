<template>
<div class="  shadow-md h-full">
<div class="text-white">{{name}}</div>
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