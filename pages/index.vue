<template>
  <div>
    <textarea
      v-model="color"
      type="textarea"
      id="color"
      class="w-1/2 h-96 outline m-12"
    >
color</textarea
    >
    <textarea
      v-model="typo"
      type="textarea"
      id="typo"
      class="w-1/2 h-96 outline m-12"
    >
typo</textarea
    >
    <button @click="gen(typo, color)">Run</button>
  </div>
</template>

<script>
import {convertFontSize} from "~/modules/convert/convertFontSize.js";
export default {
  data() {
    return {
      generatroConfig: {
        genColors: true,
        genTypo: true,
        settings: {
          remConversion: 16,
        },
        tailwindTree: {
          theme: {
            extend: {
              textColor: {},
            },
          },
        },
      },
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
            fontSize: 22,
            fill: ["Object"],
            charSpacing: 0,
            lineSpacing: 30,
            underline: false,
            strikethrough: false,
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
            fill: ["Object"],
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
            fill: ["Object"],
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
            fill: ["Object"],
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
            fill: ["Object"],
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
            fill: ["Object"],
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
            fill: ["Object"],
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
            fill: ["Object"],
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
            fill: ["Object"],
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
            fill: ["Object"],
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
            fill: ["Object"],
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
      var resultTailwind, resultSass;

      //taiwlind
      resultTailwind = this.genColors(colrs);
      //css
      resultSass = this.genTypo(fonts);
      console.log("Tailwind Config: ", resultTailwind);
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
    genTypo(fonts) {
      
      // return fonts;
      return this.genCss(fonts[0].style);;
    },
    genCss(style, prefix) {
      let tailwindClasses = [];
      let SassClasses = [];
      console.log(style);
      //Loop through all the styles properties from xd Plugin
        for (var property in style) {
        let ClassName = this.classBuilder(property, style[property]);
      //Test if conversion was succsessfull
      if (ClassName) {
        tailwindClasses.push(ClassName)
      } else {
        //Not Tailwind compatible
        console.log("Not Tailwind compatible");
      }
        }
        return tailwindClasses;
    },
    classBuilder(key, value, prefix = "") {
      let returnClass = "";
      switch (key) {
        case "fontFamily":
          returnClass = `${prefix}font-${this.kebalize(value)}`;
          break;
        case "fontStyle":
          switch (value) {
            case "Bold":
              returnClass = `${prefix}font-bold`;
              break;
            case "Book, Regular":
              returnClass = `${prefix}font-normal`;
              break;
            case "Italic":
              returnClass = `${prefix}font-italic`;
              break;
            case "Medium":
              returnClass = `${prefix}font-medium`;
              break;
            case "SemiBold":
              returnClass = `${prefix}font-semibold`;
              break;
            case "Thin":
              returnClass = `${prefix}font-thin`;
              break;
            default:
              returnClass = `${prefix}font-normal`;
          }
          break;
        case "fontSize":
          console.log(value);
          let fsize = convertFontSize(value, this.generatroConfig.settings.remConversion);
          returnClass = `${prefix}font-size-${fsize}`;
          break;
        case "fill":
          break;
        case "charSpacing":
          break;
        case "lineSpacing":
          break;
        case "underline":
          break;
        case "strikethrough":
          break;
        case "textTransform":
          break;
        case "textScript":
          break;
        default: false;
      }
      return returnClass;
    },
  },
};
</script>

