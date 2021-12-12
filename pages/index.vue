
<template>
  <div class="bg-[#212121] w-screen h-screen text-white">
    <div class="text-lg">Color Vals</div>
    <textarea
    name="textarea-name"
      v-model="color"
      type="textarea"
      id="color"
      class="w-1/2 h-96 bg-[#212121] outline m-12"
    />
    <div class="text-lg">Typo Vals</div>
    <textarea
    name="textarea-name"
      v-model="typo"
      type="textarea"
      id="typo"
      class="w-1/2 h-96 outline m-12 bg-[#212121]"
    />
    <button
      class="bg-white py-6 rounded px-10 text-black"
      @click="saveData(typo, color)"
    >
      Run
    </button>
  </div>
</template>
<script>

import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      color: [
        { name: "Primary color", color: { value: 4280181677 } },
        { name: "Tertiary color", color: { value: 4287475925 } },
        { name: "Black", color: { value: 4279382357 } },
        { name: "White", color: { value: 4294967295 } },
        { name: "Secondary color", color: { value: 4278214865 } },
        { name: "Quaternary color", color: { value: 4294310399 } },
        { name: "Fifth color", color: { value: 4294949376 } },
      ],
      typo: [
        {
          style: {
            fontFamily: "Circular Std",
            fontStyle: "Book",
            fontSize: 5678,
            fill: { value: 4280181677 },
            charSpacing: -40,
            lineSpacing: 0,
            underline: false,
            strikethrough: true,
            textTransform: "none",
            textScript: "none",
          },
          name: "typo-400 Circular Std — 22pt",
        },
        {
          style: {
            fontFamily: "Circular Std",
            fontStyle: "Bold",
            fontSize: 16,
            fill: { value: 4279382357 },
            charSpacing: 150,
            lineSpacing: 0,
            underline: false,
            strikethrough: false,
            textTransform: "uppercase",
            textScript: "none",
          },
        },
        {
          style: {
            fontFamily: "Circular Std",
            fontStyle: "Book",
            fontSize: 42,
            fill: { value: 4279382357 },
            charSpacing: 10,
            lineSpacing: 52,
            underline: false,
            strikethrough: false,
            textTransform: "none",
            textScript: "none",
          },
          name: "typo-700 Circular Std — 42pt",
        },
        {
          style: {
            fontFamily: "Circular Std",
            fontStyle: "Bold",
            fontSize: 42,
            fill: { value: 4279382357 },
            charSpacing: 20,
            lineSpacing: 45,
            underline: false,
            strikethrough: false,
            textTransform: "none",
            textScript: "none",
          },
          name: "typo-800 Circular Std — 42pt",
        },
        {
          style: {
            fontFamily: "Circular Std",
            fontStyle: "Bold",
            fontSize: 24,
            fill: { value: 4279382357 },
            charSpacing: 0,
            lineSpacing: 30,
            underline: false,
            strikethrough: false,
            textTransform: "none",
            textScript: "none",
          },
          name: "typo-500 Circular Std — 24pt",
        },
        {
          style: {
            fontFamily: "Circular Std",
            fontStyle: "Book",
            fontSize: 18,
            fill: { value: 4279382357 },
            charSpacing: 0,
            lineSpacing: 26,
            underline: false,
            strikethrough: false,
            textTransform: "none",
            textScript: "none",
          },
        },
        {
          style: {
            fontFamily: "Circular Std",
            fontStyle: "Book",
            fontSize: 20,
            fill: { value: 4279382357 },
            charSpacing: 0,
            lineSpacing: 30,
            underline: false,
            strikethrough: false,
            textTransform: "none",
            textScript: "none",
          },
        },
        {
          style: {
            fontFamily: "Circular Std",
            fontStyle: "Bold",
            fontSize: 35,
            fill: { value: 4279382357 },
            charSpacing: 0,
            lineSpacing: 42,
            underline: false,
            strikethrough: false,
            textTransform: "none",
            textScript: "none",
          },
          name: "typo-600 Circular Std — 35pt",
        },
        {
          style: {
            fontFamily: "Circular Std",
            fontStyle: "Bold",
            fontSize: 54,
            fill: { value: 4279382357 },
            charSpacing: 20,
            lineSpacing: 45,
            underline: false,
            strikethrough: false,
            textTransform: "none",
            textScript: "none",
          },
          name: "typo-900 Circular Std — 54pt",
        },
        {
          style: {
            fontFamily: "Circular Std",
            fontStyle: "Book",
            fontSize: 16,
            fill: { value: 4279382357 },
            charSpacing: 0,
            lineSpacing: 24,
            underline: false,
            strikethrough: false,
            textTransform: "none",
            textScript: "none",
          },
        },
        {
          style: {
            fontFamily: "Circular Std",
            fontStyle: "Book",
            fontSize: 14,
            fill: { value: 4279382357 },
            charSpacing: 0,
            lineSpacing: 20,
            underline: false,
            strikethrough: false,
            textTransform: "none",
            textScript: "none",
          },
        },
      ],
    };
  },
  computed: {
    color () {
      return this.$store.state.typoInput.colors
    },
    typo () {
      return this.$store.state.typoInput.fonts
    }
  },
  methods: {
    saveData(typo, color) {
        // typo.replace(/ /g,'')
        // color.replace(/ /g,'')

        // console.log(JSON.parse(typo));
        // JSON.parse(typo).forEach(element => {
        //   this.$store.commit('typoInput/addTypo', element)
        // });
        // JSON.parse(color).forEach(element => {
        //   this.$store.commit('typoInput/addColors', element)
        // });

        this.$store.commit('typoInput/addTypo', typo)
        this.$store.commit('typoInput/addColors', color)
        this.$router.push('converter')
        }
    },
    
    ...mapMutations({
      typoInput: 'typoInput'
    })
};
</script>