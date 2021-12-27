
<template>
  <div class="bg-[#212121] w-screen h-screen text-white">
     Recieved Data: {{obj}}
  </div>
</template>
<script>

import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      color: [],
      typo: [],
      obj: {},
      sampleColor: { name: "", color: { value: 0 } },
      sampleFont: {
          style: {
            fontFamily: "",
            fontStyle: "",
            fontSize: 0,
            fill: { value: 0 },
            charSpacing: 0,
            lineSpacing: 0,
            underline: 0,
            strikethrough: 0,
            textTransform: "",
            textScript: "",
          },
          name: "",
        },
    };
  },
  created () {
    console.log('Data in Url: ', this.$route.query)
    // this.obj = this.$route.query


    //Load in color Data
     let cdata = this.$route.query.c.split(',')
     for (let index = 0; index < cdata.length; index+=2) {
      let b = this.sampleColor
       b.name = cdata[index];
       b.color.value = cdata[index+1];
       
       //push into color
       this.color.push(b)
     }


    //Load in typo Data
    // let index = 0
  
  
//Loop all fonts
  for (let i = 1; i < Object.keys(this.$route.query).length; i++) {
    var key = Object.keys(this.$route.query)[i];
    let e = this.$route.query[key];
     let element = e.split(',')

    //Loop all font Properties
       let font = {style: {fontFamily: "",fontStyle: "",fontSize: 0,fill: { value: 0 },charSpacing: 0,lineSpacing: 0,underline: 0,strikethrough: 0,textTransform: "",textScript: "",},name: ""};
       font.style.fontFamily = element[0];
       font.style.fontStyle = element[1];
       font.style.fontSize = element[2];
       font.style.fill.value = element[3];
       font.style.charSpacing = element[4];
       font.style.lineSpacing = element[5];
       font.style.underline = element[6];
       font.style.strikethrough = element[7];
       font.style.textTransform = element[8];
       font.style.textScript = element[9];
       font.name = element[10];

       //push into typo
      this.typo.push({...font})
  }

    this.obj = this.typo
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