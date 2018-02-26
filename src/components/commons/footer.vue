<template>
  <div id="footerPart">
   <div class="footer">
     <div class="footer_left_text_wrapper">
       <p class="footer_left_text_title">深圳市小游国际旅行社有限公司</p>
       <p class="footer_left_text phone">电话 : 0755-82723965</p>
       <p class="footer_left_text email">邮箱 : bussiness@xiaoyoucn.com</p>
       <p class="footer_left_text address">地址 : 深圳市福田区创新广场1期A座302C</p>
     </div>
     <div class="footer_download_wrapper">
        <span class="download_app" @mouseover="showEwmFn($event)" @mouseout="hideEwmFn($event)">小游APP下载<span class="download_app_img"></span>
        </span>
        <span class="fllow_gzh" @mouseover="showEwmFn($event)" @mouseout="hideEwmFn($event)">
          关注微信公众号
          <span class="fllow_gzh_img"></span>
        </span>
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
import osType from "../../assets/js/osType.js"
export default {
  name: 'footerPart',
  data(){
    return{
      isMac:false,
      download_app:'download_app',
      // mac_download_app:'mac_download_app',
      fllow_gzh:'fllow_gzh',
      // mac_fllow_gzh:'mac_fllow_gzh',
      footer_download_wrapper:'footer_download_wrapper'
      // mac_footer_download_wrapper:'mac_footer_download_wrapper'
    }
  },
  created:function(){
    this.isMac = osType.isMac();
    // const a = 1;
    // function b(){
    //   const  a= 2;
    // }
    // b();
    // console.log(a);
    // let a = `asfdasdf`${};
    // let a = {
    //   a:'a',
    //   b:'b',
    //   c:'c',
    //   length:3
    // }
    // let e = Array.from(a);
    // console.log(e);
    // let [a,b,c] = [1,2,3];
    // console.log(a);

// let arr =Array.of('技术胖','jspang','大胖逼逼叨');
// console.log(arr);
    // let [foo = 1,fa,ba] = [,2,3];
    // console.log()
    // console.log(ba);
    // function hu(first,...arg){
    //   for( let val of arg ){
    //     console.log(arg.length);
    //   }
    // }
    // hu(1,2,3,4,5,6,7);
    // let a = '1';
    // // let b = `23123${a}123`;
    // // console.log(a.includes(''));
    // // console.log(Number.isNumber(a));
    // console.log(!isNaN(a));
  },
  methods:{
    showEwmFn:function(e){
      let targetClass = e.target.className; 
      if(targetClass=='download_app' || targetClass =='download_app_img' || targetClass=='mac_download_app'){
          document.getElementsByClassName('download_app_img')[0].className='download_app_img show_ewm';   
      }else if(targetClass=='fllow_gzh'|| targetClass =='fllow_gzh_img' || targetClass=='mac_fllow_gzh'){
        document.getElementsByClassName('fllow_gzh_img')[0].className='fllow_gzh_img show_ewm';    
      }
    },
    hideEwmFn:function(e){
      let targetClass = e.target.className; 
      console.log(targetClass)
      if(e.target.className=='download_app' || targetClass =='download_app_img show_ewm' || targetClass=='mac_download_app'){
          document.getElementsByClassName('download_app_img')[0].className='download_app_img';     
      }else if(e.target.className=='fllow_gzh' || targetClass =='fllow_gzh_img show_ewm' || targetClass=='mac_fllow_gzh'){
        document.getElementsByClassName('fllow_gzh_img')[0].className='fllow_gzh_img';    
      }
    }
  }
}
</script>


<style lang="scss" type="text/css" scoped>
@import './src/common/_reset.scss';
#footerPart{
  background-color:#f5f5f5;
  width: 100%;
  // height: 320px;
  border-top: .1rem solid #D7D7D7;
  padding-top: 4.7rem;
  position: relative;
}
.footer:after{
  content: '';
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.footer{
  zoom: 0;
  max-width: 1000px;
  // min-width: 1100px;
  width: 60%;
  @media screen and  ( max-width: 1400px ){ 
     width: 80%;
  }
  margin: 0 auto;
  position:relative;
  .footer_left_text_wrapper{
    //position:absolute;
    float: left
    //left: 20rem;
  }
  .footer_left_text_title{
    font-size: 2rem;
    color: #333;
    padding-bottom: 4rem;
    font-family: "方正正准黑简体";
  }
  .footer_left_text{
    font-size: 1.4rem;
    color: #333;
    text-indent: 3rem;
  }
  .phone{
    background:url('../../assets/phone.png') no-repeat 0 2px;
    padding-bottom: 1.9rem;
  }
  .address{
    background:url('../../assets/address.png') no-repeat 4px 0px;
    background-size: 14px;
  }
  .email{
    background:url('../../assets/email.png') no-repeat 0 4px;
     padding-bottom: 1.8rem;
  }
}
.about_ewm{
  width: 147px;
  height: 42px;
  display:inline-block;
  font-size: 1.4rem;
  color: #333;
  line-height: 42px;
  background: url('../../assets/ewmBg.png') no-repeat 0 0;
  background-size: 100%;
  cursor:pointer;
  position: relative;
  margin-top: 0; 
  margin: 0;
}
// .mac_about_ewm{
//   width: 160px;
//   height: 46px;
//   display:inline-block;
//   font-size: 1.4rem;
//   color: #333;
//   line-height: 46px;
//   background: url('../../assets/ewmBg.png') no-repeat 0 0;
//   cursor:pointer;
//   position: relative; 
// }
.footer_download_wrapper{
  //position: absolute;
  //right: 20rem;
  float: right;
  width: 362px;
  .download_app{
    @extend .about_ewm;
    text-indent: 2rem;
    
  }
  .fllow_gzh{
    @extend .about_ewm;
    text-indent: 1.3rem;
    float: right;
  }
}
// .mac_footer_download_wrapper{
//   position: absolute;
//   right: 20rem;
//   //width: 0; 
//   .mac_download_app{
//     @extend .mac_about_ewm;
//     text-indent: 3rem;
//     margin-top:0;
//   }
  
//   .mac_fllow_gzh{
//     @extend .mac_about_ewm;
//     text-indent: 2.2rem;
//     margin-top:0;
//     float: right;
//   }
// }
.download_app_img,
.fllow_gzh_img{
  width: 149px;
  height: 0;
  display: inline-block;
  background: url('../../assets/ewm2.png') no-repeat 0 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: all .8s;
  -moz-transition: all .8s;  /* Firefox 4 */
  -webkit-transition: all .8s; /* Safari 和 Chrome */
  -o-transition: all .8s;  /* Opera */
  visibility: hidden;
}
.show_ewm{
  visibility: visible;
  height: 149px;
}
.footer_bottom{
  // position: absolute;
  // bottom: 0;
  // left: 10%;
  // top: 272px;
  margin: 3.2rem auto 0 auto;
  text-align: center;
  width: 60%;
  @media screen and  ( max-width: 1400px ){ 
     width: 80%;
  }
  max-width: 1000px;
  border-top: .1rem solid #d2d2d2;
  p{
   font-size: 12px;
   color: #999;
  }
  p:nth-child(1){
     padding-top: 2.3rem;
  }
  p:nth-child(3){
     padding-bottom: 1.7rem;
  }
}
</style>
