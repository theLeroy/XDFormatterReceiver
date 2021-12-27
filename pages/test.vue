<template>
  <div>
    asd {{obj}}
  </div>
</template>

<script>





export default {
  data () {
    return {
      obj: {},
    }
  },
  created () {
    console.log(this.$route.query)
    this.obj = this.$route.query
  },
 
}
</script>
