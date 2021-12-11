<template>
  <div>
    <textarea
      v-model="color"
      type="textarea"
      id="color"
      class="w-1/2 h-96 outline m-12"
    >
color </textarea
    >
    <textarea
      v-model="typo"
      type="textarea"
      id="typo"
      class="w-1/2 h-96 outline m-12"
    >
typo </textarea
    >
    <button @click="gen(typo, color)">Run</button>
    <div>   <textarea
      v-model="colorOutput"
      type="textarea"
      id="colorOutput"
      class="w-1/2 h-96 outline m-12"
    >
colorOutput </textarea
    >
    <textarea
      v-model="typoOutput"
      type="textarea"
      id="typoOutput"
      class="w-1/2 h-96 outline m-12"
    >
typoOutput </textarea
    ></div>
  </div>
</template>

<script>
import { convertFontSize } from "~/modules/convert/convertFontSize.js";
import { convertFontStyle } from "~/modules/convert/convertFontStyle.js";
import { convertCharSpacing } from "~/modules/convert/convertCharSpacing.js";
import { convertLineHeight } from "~/modules/convert/convertLineHeight.js";
import { convertColor } from "~/modules/convert/convertColor.js";
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

      console.log("Tailwind Config: ", resultTailwindConfig);
      console.log("Sass File: ", resultSass);
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
      let ColorObject = [];
      if (this.generatroConfig.genColors) {
        colrs.forEach((color) => {
          let colorName = this.camelize(color.name);
          let colorvalue = "#" + color.color.value.toString(16);
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
 // Convert Color Number to hex
      try {
          let color = '#' + value.value.toString(16)
          let tColor = convertColor(
            color,
            this.generatroConfig.settings,
            TailwindColors
          );
          return tColor[0] ? `${prefix}${tColor[1]}` : `${prefix}text-[${tColor[1]}]`;
      } catch (error) {
        console.error('error converting color, Value Provided is curupt', error);
      }
    }
  },
};
</script>

