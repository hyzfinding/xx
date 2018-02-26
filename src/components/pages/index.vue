<template>
  <div class="index">
    <div class="index_container">
      <div class="index_wrapper">
        <div class="bg_title_img"></div>
        <div class="bg_text">针对中国跨境旅游人群量身定做</div>
        <div class="download_app_wrapper">
          <span class="download_app" @mouseover="showEwm($event)" @mouseout="hideEwm($event)" @touchstart="showEwm($event)" @touchend="hideEwm($event)">
            下载小游
            <span class="download_app_img"></span>
          </span>
          <span class="fllow_gzh" @mouseover="showEwm($event)" @mouseout="hideEwm($event)" @touchstart="showEwm($event)" @touchend="hideEwm($event)">
            关注公众号
            <span class="fllow_gzh_img"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import osType from "../../assets/js/osType.js"
export default {
  name: 'index',
  data () {
    return {
      isMac:false,
      download_app:'download_app',
      mac_download_app:'mac_download_app',
      fllow_gzh:'fllow_gzh',
      mac_fllow_gzh:'mac_fllow_gzh'
      // index:'index',
      // mac_index:'mac_index'
    }
  },
  created:function(){
    //console.log(navigator.userAgent);
    this.isMac = osType.isMac();
    //console.log(this.isMac);
    //console.log(navigator.userAgent);
    // if( !this.isMac ){
    //   //console.log( document.getElementsByClassName('download_app')[0]);
    //   document.getElementsByClassName('download_app')[0].setAttribute('line-height','5.6rem');
    // }
  },
  methods:{
  	showEwm:function(e){
  		let targetClass = e.target.className; 
  		if(targetClass=='download_app' || targetClass =='download_app_img' || targetClass=='mac_download_app'){
          document.getElementsByClassName('download_app_img')[0].className='download_app_img show_ewm';

  		}else if(e.target.className=='fllow_gzh'|| targetClass =='fllow_gzh_img' || targetClass=='mac_fllow_gzh'){
  		  document.getElementsByClassName('fllow_gzh_img')[0].className='fllow_gzh_img show_ewm';    
  		}
  		
  	},
  	hideEwm:function(e){
  		let targetClass = e.target.className; 
  		//console.log(targetClass)
  		if(e.target.className=='download_app' || targetClass =='download_app_img show_ewm'){
          document.getElementsByClassName('download_app_img')[0].className='download_app_img';     
  		}else if(e.target.className=='fllow_gzh' || targetClass =='fllow_gzh_img show_ewm'){
  		  document.getElementsByClassName('fllow_gzh_img')[0].className='fllow_gzh_img';    
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
@import './src/common/_reset.scss';
@import './src/common/_differentPage.scss';
.index{
  //max-width: 1242px;
  min-width: 1100px;
	width: 100%;
  height: 100%;
  margin-top: 16%;
  // position:fixed;
  // right: 0;
  // margin-top: ;
  @media screen and  (max-width: 1430px ){ 
     margin-top: 14%;
  }
  // @media screen and  (max-width: 420px ){ 
  //    width: 80%;
  //    margin: 0 auto;
  // }
}
// .mac_index{
//   position:fixed;
//   z-index: 200;
//   top:25rem;
//   right: 3%;
// }
.index_container{
  zoom: 1;
  width: 60%;
  max-width: 1100px;
  min-width: 800px;
  margin: 0 auto;
  @media screen and  ( max-width: 1400px ){ 
     width: 80%;
  }
}
.index_container:after{
  content:'';
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.index_wrapper{
 // width: 53%;
  float: right;
}
.bg_title_img{
	width: 41.5rem;
	height: 4.8rem;
	background: url('../../assets/bg_title.png') no-repeat 0 0;
  // margin-left: 9.2%;
  // @media screen and  (max-width: 900px ){ 
  //    width: 80%;
  //    margin: 0 auto;
  //    background-size: 100%;
  // }
}
.bg_text{
	font-size: 3rem;
	color: #333;
	margin-top: 20px;
  // margin-left: 9.2%;
}
.download_app_wrapper{
  margin-top: 3.5px;
}
@mixin download_font{
	font-size: 2rem;
	display: inline-block;
	width: 220px;
	height: 66px;
	color: #fff;
	//line-height: 5.6rem;
	text-indent: 3.6rem;
	margin-top: 7.9rem;
	cursor: pointer;
	position:relative;
}
.ewm-img{
	display: inline-block;
	width: 223px;
	height: 0;
  background: url('../../assets/ewm.png') no-repeat 0 0;
  background-size: 100%;
	position: absolute;
	top: 0;
	left: 0;
	transition: all .6s;
  -moz-transition: all .6;  /* Firefox 4 */
  -webkit-transition: all .6s; /* Safari 和 Chrome */
  -o-transition: all .6s;  /* Opera */
	
}
.download_app{
	@include download_font;
	background: url('../../assets/app_img.png') no-repeat 0 0;
  background-size: cover;
	margin-right: 3.5rem;
  line-height: 66px;
	.download_app_img{
		@extend .ewm-img;
		visibility: hidden;
    // @media screen and  (max-width: 900px ){ 
    //   width: 14rem;
    //   height: 14rem;
    //   background-size: cover;
    // }
	}
	.show_ewm{
	    visibility: visible;
      height: 223px;
	    // transform: translateY(10rem);
     //  -ms-transform: translateY(10rem);		/* IE 9 */
     //  -webkit-transform: translateY(10rem);	/* Safari and Chrome */
     //  -o-transform: translateY(10rem);		/* Opera */
     //  -moz-transform: translateY(10rem);	
  }
  // @media screen and  (max-width: 900px ){ 
  //   width: 80%;
  //   margin: 4.4rem auto 0 auto;
  // }
}
.mac_download_app{
  @include download_font;
  background: url('../../assets/app_img.png') no-repeat 0 0;
 // margin-right: 5rem;
  line-height: 5.6rem;
  .download_app_img{
    @extend .ewm-img;
    visibility: hidden;
    // @media screen and  (max-width: 900px ){ 
    //   width: 14rem;
    //   height: 14rem;
    //   background-size: cover;
    // }
  }
  .show_ewm{
      visibility: visible;
      // transform: translateY(10rem);
      // -ms-transform: translateY(10rem);   /* IE 9 */
      // -webkit-transform: translateY(10rem); /* Safari and Chrome */
      // -o-transform: translateY(10rem);    /* Opera */
      // -moz-transform: translateY(10rem);  
      height: 223px;
  }
}
.fllow_gzh{
	@include download_font;
	background: url('../../assets/gzh_img.png') no-repeat 0 0;
	text-indent: 2.2rem;
  line-height: 66px;
  background-size: cover;
	.fllow_gzh_img{
		@extend .ewm-img;
		visibility: hidden;
    // @media screen and  (max-width: 900px ){ 
    //   width: 14rem;
    //   height: 14rem;
    //   background-size: cover;
    // }
	}
	.show_ewm{
		visibility: visible;
		// transform: translateY(10rem);
  //       -ms-transform: translateY(10rem);		/* IE 9 */
  //       -webkit-transform: translateY(10rem);	/* Safari and Chrome */
  //       -o-transform: translateY(10rem);		/* Opera */
  //       -moz-transform: translateY(10rem);
    height: 223px;
  }
  // @media screen and  (max-width: 900px ){ 
  //   margin-top: 9.4rem;
  // }
}
.mac_fllow_gzh{
  @include download_font;
  background: url('../../assets/gzh_img.png') no-repeat 0 0;
  text-indent: 2.2rem;
  line-height: 5.6rem;
  .fllow_gzh_img{
    @extend .ewm-img;
    visibility: hidden;
    // @media screen and  (max-width: 900px ){ 
    //   width: 14rem;
    //   height: 14rem;
    //   background-size: cover;
    // }
  }
  .show_ewm{
    visibility: visible;
    // transform: translateY(10rem);
    //     -ms-transform: translateY(10rem);   /* IE 9 */
    //     -webkit-transform: translateY(10rem); /* Safari and Chrome */
    //     -o-transform: translateY(10rem);    /* Opera */
    //     -moz-transform: translateY(10rem);
    height: 223px;
  }
}


.index + #navBar + .bg_page{
  display: block;
}
</style>
