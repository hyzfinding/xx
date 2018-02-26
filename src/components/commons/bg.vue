<template>
  <div class="bg_page">
    <div class="bg_img" ></div>
    <div class="bg_mark"></div>
  </div>
</template>

<script>
import suitScreenApi from "../../assets/js/suitScreen.js"
export default {
  name: 'index',
  data () {
    return {
      isMobile:false
    }
  },
   created:function(){
    // this.isMobile = suitScreenApi.isMobile();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css">
@import './src/common/_reset.scss';
.bg_page{
  display:none;
}
.bg_img{
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background:url('../../assets/bg.png') no-repeat center center;
  background-size: cover;
  z-index: -10;
}
.bg_mark{
  width: 100%;
  height: 100%; 
  position: fixed;
  top: 0;
  z-index: -10;
}
.index + #navBar + .bg_page{
  display: block;
}
</style>
