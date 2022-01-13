
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
      
    };
  },
  created () {
    console.log('Data in Url: ', this.$route.query)
    // this.obj = this.$route.query


    //Load in color Data

    //Test if color data is definde
    let cdata = []
    if ( this.$route.query.c ) {
       cdata = this.$route.query.c.split(',')
      } 
     for (let index = 0; index < cdata.length; index+=2) {
      let b = { name: "", color: { value: 0 } }

      // If color name is index then set name
      if (cdata[index] == index) {
          b.name = 'UnnamedColor'+index
        } else {
          b.name = cdata[index]
      }
       b.color.value = cdata[index+1];
       
       //push into color
       this.color.push(b)
     }

  
  
//Loop all fonts
  for (let i = 1; i < Object.keys(this.$route.query).length; i++) {
    var key = Object.keys(this.$route.query)[i];
    let e = this.$route.query[key];
     let element = e.split(',')
    
  
    //Loop all font Properties and map to required format
       let font = {style: {fontFamily: "",fontStyle: "",fontSize: 0,fill: { value: 0 },charSpacing: 0,lineSpacing: 0,underline: 0,strikethrough: 0,textTransform: "",textScript: "",},name: ""};
       font.style.fontFamily = element[0];
       font.style.fontStyle = element[1];
       font.style.fontSize = element[2];
       font.style.fill.value = element[3];
       font.style.charSpacing = element[4];
       font.style.lineSpacing = element[5];
       element[6] === "0" ?  font.style.underline = false : font.style.underline = element[6];
       element[7] === "0" ?  font.style.strikethrough = false : font.style.strikethrough = element[7];
       element[8] === "0" ?  font.style.textTransform = "none" : font.style.textTransform = element[8];
       element[9] === "0" ?  font.style.textScript = "none" : font.style.textScript = element[9];
       font.name = element[10];

       //push into typo
      this.typo.push({...font})
  }

    this.obj = this.typo

    //Save data into store  
    this.saveData(this.typo, this.color)
},

  methods: {
    saveData(typo, color) {

        this.$store.commit('typoInput/addTypo', typo)

        this.$store.commit('typoInput/addColors', color)
        // redirect to converter
        this.$router.push('converter')
        }
    },
    
    ...mapMutations({
      typoInput: 'typoInput'
    })
};
</script>