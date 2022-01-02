<template>
  <div class="flex flex-col min-h-screen bg-[#2a2a2a] w-screen text-white p-4">
    <div>
      <pre>
        <code v-highlight class="javascript">{{ tailwindConfig }}</code>
      </pre>
      <pre>
        <code v-highlight class="css">{{ typoCss }}</code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {

  
  computed: {
    tailwindConfig() {
      return this.$store.getters["cssOutput/getColors"];
    },
    typoCss() {
      return this.$store.getters["cssOutput/getTypo"];
    },
  },
};
</script>