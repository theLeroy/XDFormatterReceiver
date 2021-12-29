<template>
  <div class="bg-[#212121] w-screen h-screen text-white">
    <div>Error Log output:</div>

     <button
      class="bg-white py-6 rounded px-10 text-black"
      @click="$router.push('/interface')"
    >
      Weiter
    </button>
  </div>
</template>

<script>
import { convertFontSize } from "~/modules/convert/convertFontSize.js";
import { convertFontStyle } from "~/modules/convert/convertFontStyle.js";
import { convertCharSpacing } from "~/modules/convert/convertCharSpacing.js";
import { convertLineHeight } from "~/modules/convert/convertLineHeight.js";
import { convertColor } from "~/modules/convert/convertColor.js";

import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      generatroConfig: {
        genColors: true,
        genTypo: true,
        settings: {
          remConversion: 16,
          autoConvertColor: true,
        },
        tailwindTree: {
          theme: {
            extend: {
              textColor: {},
            },
          },
        },
      },
      typoOutput: "",
      colorOutput: "",
     
    };
  },
  mounted() {
    let typo = this.$store.getters['typoInput/getTypo']
    let color = this.$store.getters['typoInput/getColors']
    this.gen(typo, color);
  },
  methods: {
    gen(typo, color) {
      //Setup
      // const colrs = JSON.parse(color);
      // const fonts = JSON.parse(typo);
      const fonts = typo;
      const colrs = color;
      // const fonts = typo;
      var resultTailwindConfig = {}
      var resultSass = {}

      //taiwlind
      resultTailwindConfig.colors = this.genColors(colrs);
        this.colorOutput = resultTailwindConfig
      //css
      resultSass = this.genTypo(fonts, resultTailwindConfig);
      this.typoOutput = resultSass; 

      // log results
      console.log("Tailwind Config: ", resultTailwindConfig);
      console.log("Sass File: ", resultSass);

      //Push to store
      this.$store.commit('typoOutput/addTypo', resultSass)
      this.$store.commit('typoOutput/addColors', resultTailwindConfig)

      //Push to router
      this.$router.push('/interface')
    },
    camelize(str) {
      return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
    },
    kebalize(str) {
      return str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map((x) => x.toLowerCase())
        .join("-");
    },
    genColors(colrs) {
      //Function to generate tailwind colors for the tailwind config file. This obect is then used to generate the classes for the typo css
      let ColorObject = [];
      if (this.generatroConfig.genColors) {
        colrs.forEach((color) => {
          let colorName = this.camelize(color.name);
          let colorvalue = color.color.value
          let obj = { [colorName]: colorvalue };
          ColorObject.push(obj);
        });
      }
      return ColorObject;
    },
    genTypo(fonts, TailwindConfig) {
      // return fonts;
      let TypoObject = [];
      for (let index = 0; index < fonts.length; index++) {
        TypoObject.push( this.genCss(fonts[index].style, TailwindConfig));
      }
      return TypoObject
    },
    genCss(style, TailwindConfig = [], prefix = "") {
      let tailwindClasses = [];
      //Loop through all the styles properties from xd Plugin
      for (var property in style) {
        let ClassName = this.classBuilder(property, style[property], TailwindConfig.colors, prefix);
        //Test if conversion was succsessfull
        if (ClassName) {
          tailwindClasses.push(ClassName);
        } else {
          //Not Tailwind compatible
          console.log("Not Tailwind compatible; ", property, style[property]);
        }
      }
      return tailwindClasses;
    },
    classBuilder(key, value, TailwindColors = [], prefix = "") {

      //Case devider
      switch (key) {
        case "fontFamily":
          return `${prefix}font-${this.kebalize(value)}`;
        case "fontStyle":
          return convertFontStyle(value, prefix);
        case "fontSize":
          let fSize = convertFontSize(
            value,
            this.generatroConfig.settings.remConversion
          );
          return fSize[0] ? `${prefix}${fSize[1]}` : `${prefix}leading-[${fSize[1]}]`;
        case "fill":
          return this.colorClass(value, TailwindColors)
          break;
        case "charSpacing":
          let lSpacing = convertCharSpacing( value,
            this.generatroConfig.settings.remConversion
            );
             return lSpacing[0] ? `${prefix}${lSpacing[1]}` : `${prefix}tracking-[${lSpacing[1]}rem]`;
          break;
        case "lineSpacing":
            let lHeight = convertLineHeight( value,
            this.generatroConfig.settings.remConversion
            );
            return lHeight[0] ? `${prefix}${lHeight[1]}` : `${prefix}leading-[${lHeight[1]}]`;
          break;
        case "underline":
          return value ? `${prefix}underline` : `${prefix}no-underline`; 
          break;
        case "strikethrough":
           return value ? `${prefix}line-through` : ""; 
          break;
        case "textTransform":
          break;
        case "textScript":
          break;
        default:
          return false;
      }
    },
    colorClass(value, TailwindColors){
      console.log('TailwindColors',TailwindColors)
      try {
          let color = value.value
          console.log('color', color);
          let tColor = convertColor(
            color,
            this.generatroConfig.settings,
            TailwindColors
          );
          return tColor[0] ? `${prefix}${tColor[1]}` : `${prefix}text-[${tColor[1]}]`;
      } catch (error) {
        console.error('error converting color, Value Provided is curupt', error);
      }
    },
  },
  ...mapMutations({
      typoOutput: 'typoOutput'
    })
};
</script>

