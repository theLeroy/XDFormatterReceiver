<template>
  <div class="flex h-screen w-screen text-white">
    <div class="w-2/12 h-full p-4 bg-[#2a2a2a] flex flex-col">
      <div class="mb-10 font-medium tracking-wider">Not Assigned</div>
      <NotAssigned :group="NotAssigned" />
      <button @click="runExport()" class="bg-white rounded text-black py-3">
        Export
      </button>
    </div>

    <div class="h-full w-10/12 bg-[#212121] p-4 overflow-y-auto overflow-x-hidden">
      <div class="mb-10 font-medium tracking-wider">Fonts</div>
      <div class="grid grid-rows-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row-dense gap-4">
        <div v-for="(group, index) in groups" :key="index">
          <FontCard :group="group.fonts"
            ><input v-model="group.name"
          /></FontCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

import { mapMutations } from "vuex";

export default {
  components: {
    //import draggable as a component
    draggable,
  },
  data() {
    return {
      NotAssigned: [],
      groups: [
        {
          name: ".typo-100",
          fonts: [],
        },
        {
          name: ".typo-200",
          fonts: [],
        },
        {
          name: ".typo-300",
          fonts: [],
        },
        {
          name: ".typo-400",
          fonts: [],
        },
        {
          name: ".typo-500",
          fonts: [],
        },
        {
          name: ".typo-600",
          fonts: [],
        },
        {
          name: ".typo-700",
          fonts: [],
        },
        {
          name: ".typo-800",
          fonts: [],
        },
        {
          name: ".typo-900",
          fonts: [],
        },
      ],
    };
  },
  mounted() {
    
    let typoOutput = this.$store.getters["typoOutput/getTypo"];

    for (let index = 0; index < typoOutput.length; index++) {
      this.NotAssigned.push({
        prefix: '',
        classes: typoOutput[index].classes,
        name: typoOutput[index].name
      });
    }

    // let color = this.$store.getters['typoOutput/getColors']
  },
  methods: {
 
    runExport() {
      let resultSass = '';

      //Gen sass
      this.groups.forEach((element) => {
        //Test if font not empty
        if (element.fonts.length > 0) {
          // build class string
          let classesString = '';
            element.fonts.forEach(font => {
              classesString += `@apply ${font.prefix}` + font.classes.join(` ${font.prefix}`) + ';\n';
          });
          // Add class name
          let css = 
            `${element.name} {
              ${classesString}
            }`;

            // Add all classes together to one string
            resultSass += css+'\n'; 
        }
      });

      //Gen colors
      let resultTailwindConfig = `theme: { \n extend: {\n colors: {\n `;
      let colors = this.$store.getters["typoOutput/getColors"];
      // Loop all colors and add them to tailwind config
      colors.forEach((color) => {
        resultTailwindConfig += `'${Object.keys(color)[0]}': '${Object.values(color)[0]}',\n`;
      });
      // add closing brackets
      resultTailwindConfig += `} \n } \n }`;

          
      this.$store.commit("cssOutput/addTypo", resultSass);
      this.$store.commit("cssOutput/addColors", resultTailwindConfig);

      //Got to css page
      this.$router.push("/css");
    },
  },
  ...mapMutations({
    cssOutput: "cssOutput",
  }),
};
</script>