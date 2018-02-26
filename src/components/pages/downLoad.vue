<template>
  <div id="downLoad">
    <div class="big_bg">
      <div class="big_title">扫二维码下载小游APP用户端</div>
      <div class="img_wapper">
        <img src="../../assets/ewm3.png">
      </div>
    </div>
    <div class="footer_bottom">
      <p class="footer_bottom_text">Copyright © 2017深圳市小游国际旅行社 All Rights Reserved</p>
      <p class="footer_bottom_text">深圳市小游国际旅行社有限公司</p>
      <p class="footer_bottom_text">网站备案服务号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'downLoad',
  data(){
    return{
      
    }
  }
}
</script>


<style lang="scss" type="text/css" scoped>
@import './src/common/_reset.scss';
@import './src/common/_differentPage.scss';
#downLoad{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FCD11E;
}
.big_bg{
  position:absolute;
  width: 100%;
  height: 100%;
  top: 30%;
  @media screen and  (max-width: 1366px ){ 
     top: 20%;
  }
  // padding-top: %;
  // padding-bottom: 4rem;
  .img_wapper{
    width: 182px;
    height: 182px;
    margin: 46px auto 0 auto; 
    img{
      width: 100%;
    }
  }
  
}
.big_title{
  margin: 0 auto;
  font-size: 3rem;
  color: #333;
  text-align: center;
  //margin-top: 15.3rem;
}
.footer_bottom{
  background-color: #fff;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: .1rem solid #d2d2d2;
  p{
   font-size: 12px;
   color: #999;
  }
  p:nth-child(1){
     padding-top: 2.3rem;
  }
  p:nth-child(3){
     padding-bottom: 15px;
  }
}
</style>
