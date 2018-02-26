<template>
  <div id="navBar">
    <div class="nav_bar_wrapper">
        <div class="logo" @click="changeStyle($event)">
          <router-link to="/"></router-link>
        </div>
      <div class="logo_text">
        <div class="logo_text_top"></div>
        <div class="logo_text_bottom">境外旅游专业平台</div>
      </div>
      <div class="nav_bar_container">     
        <div :class="isShow?show_nav_list:nav_list">
           <ul @click="changeStyle($event)">
            <li>
              <router-link to="/xiaoyou" :class="statePage==0?red:black">
                小游
              </router-link>
            </li>
            <li>
              <router-link to="/downLoad" :class="statePage==1?red:black">
                下载小游
              </router-link>
            </li>
            <li>
              <router-link to="/aboutUs" :class="statePage==2?red:black">
                关于我们
              </router-link>
            </li>
            <li>
              <router-link to="/joinUs" :class="statePage==3?red:black">
                加入我们
              </router-link>
            </li>
          </ul>
        </div>
        <div class="index_page" v-if="!isShow" @click="changeStyle($event)">
          <router-link to="/" >
            首页
          </router-link>
        </div>
         <div :class="isShow?show_nav:nav_btn" @click="showNav()"></div>
      </div>
    </div>
    <!-- pc端导航  -->
  <!--   <div class="pc" >
      <div :class="isMac?mac_logo_wrapper:logo_wrapper">
        <router-link to="/">
          <div class="logo"></div>
        </router-link>
        <div class='logo_tilte_wrapper'>
          <router-link to="/">
            <div class="logo_title"></div>
            <div class="logo_text">深圳市小游国际旅行社有限公司</div>
          </router-link>
        </div>
      </div>
      <div :class="isMac?mac_first_page:first_page" @click="changeStyle($event)">
        <router-link to="/" >
          首页
        </router-link>
      </div>
      
      <div :class="isShow?mac_show_nav_bar_wrapper:mac_nav_bar_wrapper" v-if="isMac">  
        <div :class="isShow?show_nav:click_btn" @click="showNav"></div>
        <div class="nav_bar">
          <ul @click="changeStyle($event)">
            <li class="li_one" >
              <router-link to="/xiaoyou" :class="statePage==0?red:black">
                小游
              </router-link>
            </li>
            <li class="li_two">
              <router-link to="/downLoad" :class="statePage==1?red:black">
                下载小游
              </router-link>
            </li>
            <li class="li_three">
              <router-link to="/aboutUs" :class="statePage==2?red:black">
                关于我们
              </router-link>
            </li>
            <li class="li_four">
              <router-link to="/joinUs" :class="statePage==3?red:black">
                加入我们
              </router-link>
            </li>
          </ul>
        </div>     
      </div>
      <div :class="isShow?show_nav_bar_wrapper:nav_bar_wrapper"   v-else>  
        <div :class="isShow?show_nav:click_btn" @click="showNav"></div>
        <div class="nav_bar">
          <ul @click="changeStyle($event)">
            <li class="li_one" >
              <router-link :to="{name:'xiaoyou',params:{passWord:'aa',username:'hh'}}" :class="statePage==0?red:black">
                小游
              </router-link>
            </li>
            <li class="li_two">
              <router-link to="/downLoad" :class="statePage==1?red:black">
                下载小游
              </router-link>
            </li>
            <li class="li_three">
              <router-link to="/aboutUs" :class="statePage==2?red:black">
                关于我们
              </router-link>
            </li>
            <li class="li_four">
              <router-link to="/joinUs" :class="statePage==3?red:black">
                加入我们
              </router-link>
            </li>
          </ul>
        </div>     
      </div>
    </div> -->
    <!-- 移动端导航 -->
    <!-- <div class="mobile" v-else>
      <div class="logo_wrapper">
        <div class='logo_tilte_wrapper'>
          <router-link to="/">
            <div class="logo_title"></div>
          </router-link>
        </div>
      </div>
      <div class="mobile_nav">
        <span :class="isShow?mobile_show_nav:mobile_click_btn" @touchstart="showNav()"></span>
        <div :class="isShow?show_mobile_nav_list:mobile_nav_list">
          <ul>
            <li>
              <router-link to="/">
                首页
              </router-link>
             </li>
            <li>
              <router-link to="/xiaoyou">
                小游
              </router-link>
            </li>
            <li>
               <router-link to="/downLoad">
                下载小游
              </router-link>
            </li>
            <li>
              <router-link to="/aboutUs">
                关于我们
              </router-link>
            </li>
            <li>
              <router-link to="/joinUs">
                加入我们
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import suitScreenApi from "../../assets/js/suitScreen.js"
import osType        from "../../assets/js/osType.js"

export default {
  name: 'navBar',
  data(){
    return{
      isShow:false,
      statePage:null,
      // isMobile:false,
      // isMac:false,
      nav_btn:'nav_btn',
      show_nav:'show_nav',
      show_nav_list:'show_nav_list',
      nav_list:'nav_list',

      // mobile_show_nav:'mobile_show_nav',
      // mobile_click_btn:'mobile_click_btn',
      nav_bar_wrapper:'nav_bar_wrapper',
      show_nav_bar_wrapper:'show_nav_bar_wrapper',
      red:'red',
      black:'black',
      // mobile_nav_list:'mobile_nav_list',
      show_mobile_nav_list:'show_mobile_nav_list',
      first_page:'first_page',
      // mac_first_page:'mac_first_page',
      // mac_nav_bar_wrapper:'mac_nav_bar_wrapper',
      nav_bar_wrapper:'nav_bar_wrapper',
      // mac_logo_wrapper:'mac_logo_wrapper',
      logo_wrapper:'logo_wrapper'
      // mac_show_nav_bar_wrapper:'mac_show_nav_bar_wrapper',
      // mac_nav_bar_wrapper:'mac_nav_bar_wrapper'
    }
  },
  created:function(){
    this.isMobile = suitScreenApi.isMobile();
    this.isMac = osType.isMac();
  },
  methods:{
    showNav:function(){
        this.isShow = !this.isShow;
        // console.log(this.isShow);
        //console.log(navigator.userAgent);
    },
    changeStyle:function(e){
      if( e.target.getAttribute('href') == '#/xiaoyou' ){
        this.statePage=0;
      }else if( e.target.getAttribute('href') == '#/downLoad' ){
        this.statePage=1;
      }else if( e.target.getAttribute('href') == '#/aboutUs' ){
        this.statePage=2;
      }else if( e.target.getAttribute('href') == '#/joinUs' ){
        this.statePage=3;
      }else if( e.target.getAttribute('href') == '#/' ){
        this.statePage=null;
        ;
      }
    }
  }
}
</script>


<style lang="scss" type="text/css" scoped>
@import './src/common/_reset.scss';
@import './src/common/differentPage.scss';
#navBar{
  position:fixed;
  z-index:300;
  width:100%;
  // min-width: 1050px;
  height: 80px;
  top: 0;
}
// .logo_wrapper{
//   position: fixed;
//   top: 1rem;
//   left: 10rem;
//   z-index: 200;
//   cursor:pointer;
// }
// .mac_logo_wrapper{
//   position: fixed;
//   top: 1rem;
//   left: 4rem;
//   z-index: 200;
//   cursor:pointer;
// }
// .mobile{
//   .logo_wrapper{
//     position: fixed;
//     top: 2rem;
//     left: 1rem;
//     z-index: 200;
//     cursor:pointer;
//   }
// }
// .nav_bar_wrapper{
//   position: fixed;
//   top: 2.8rem;
//   right: 10rem;
//   z-index: 200;
//   // overflow: hidden;
//   // width: 20rem;
//   width: 3rem;
//   height: 2.6rem;
//   overflow: hidden;
//   transition: width 1s;
//   -moz-transition: width 1s;  /* Firefox 4 */
//   -webkit-transition: width 1s; /* Safari 和 Chrome */
//   -o-transition: width 1s;  /* Opera */
//  // background-color: #FCD01E;
// }
// .mac_nav_bar_wrapper{
//   position: fixed;
//   top: 2.5rem;
//   right: 4rem;
//   z-index: 200;
//   // overflow: hidden;
//   // width: 20rem;
//   width: 3rem;
//   height: 2.6rem;
//   overflow: hidden;
//   transition: width 1s;
//   -moz-transition: width 1s;  /* Firefox 4 */
//   -webkit-transition: width 1s; /* Safari 和 Chrome */
//   -o-transition: width 1s;  /* Opera */
// }
// .show_nav_bar_wrapper{
//   @extend .nav_bar_wrapper;
//   width: 50rem;
// }
// .mac_show_nav_bar_wrapper{
//   @extend .mac_nav_bar_wrapper;
//   width: 50rem;
// }
// .logo{
//   background: url('../../assets/logo.png') no-repeat center center;
//   height: 4.6rem;
//   width: 4.6rem;
//   float: left;
// }

// .logo_tilte_wrapper{
//   float: left;
//   margin-left: 1rem;
//   .logo_title{
//     background: url('../../assets/logo_title.png') no-repeat center center;
//     width: 4.4rem;
//     height: 2rem;
//     margin-top: .4rem;
//   }
//   .logo_text{
//     font-size:1.8rem;
//     color: #333;
//     font-family:'方正准黑简体';
//   }

// }
// .click_btn,
// .mobile_click_btn{
//   width:1.9rem;
//   height: 2.4rem;
//   background: url('../../assets/click_before.png') no-repeat center center;
//   cursor: pointer;
//   float: left;
//   margin-left: .4rem;
//   transition: all .8s;
//   -moz-transition: all .8s;  /* Firefox 4 */
//   -webkit-transition: all .8s; /* Safari 和 Chrome */
//   -o-transition: all .8s;  /* Opera */
// }
// .mobile_click_btn{
//   float: right;
//   margin-right: 1rem;
//   margin-top: 2rem;
//   position: relative;
//   z-index: 100;
// }
// .show_nav{
//   @extend .click_btn;
//   transform: rotate(90deg);
//   -ms-transform: rotate(90deg);   /* IE 9 */
//   -webkit-transform: rotate(90deg); /* Safari and Chrome */
//   -o-transform: rotate(90deg);    /* Opera */
//   -moz-transform: rotate(90deg);    /* Firefox */
// }
// .mobile_show_nav{
//   @extend .mobile_click_btn;
//   transform: rotate(90deg);
//   -ms-transform: rotate(90deg);   /* IE 9 */
//   -webkit-transform: rotate(90deg); /* Safari and Chrome */
//   -o-transform: rotate(90deg);    /* Opera */
//   -moz-transform: rotate(90deg);    /* Firefox */
// }
// .nav_bar{
//   float: left;
// }
// .pc ul{
//   li{
//     float: left;
//     font-size: 2rem;
//     color: #333;
//     cursor:pointer;
//     .red{
//       color: #f99000;
//     }
//     .black{
//       color: #333;
//     }
//   }
//   .li_one{
//     margin-left: 5rem;
//     margin-right: 5.9rem;
//   }
//   .li_two{
//     margin-right: 3.9rem;
//   }
//   .li_three{
//     margin-right: 4rem;
//   }
// }
// .first_page{
//   position: absolute;
//   top: 2.8rem;
//   right: 13.4rem;
//   font-size: 1.8rem;
//   height: 3.2rem;
//   line-height: 2.6rem;
//   color: #333;
//   z-index: 200;
//   cursor:pointer;
// }
// .mac_first_page{
//   position: absolute;
//   top: 2.6rem;
//   right: 7.4rem;
//   font-size: 1.8rem;
//   color: #333;
//   z-index: 200;
//   cursor:pointer;
// }
// //  移动端nav
// .mobile_nav{
//   width: 100%;
//   position: relative;
//   .mobile_nav_list{
//     background-color: rgba(249,114,0,.84);
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     padding-top: 6rem;
//     opacity: 0;
//     transition: all .8s;
//     -moz-transition: all .8s;  /* Firefox 4 */
//     -webkit-transition: all .8s; /* Safari 和 Chrome */
//     -o-transition: all .8s;  /* Opera */
//   }
//   li{
//     font-size: 1.8rem;
//     line-height: 4.6rem;
//     border-bottom: 1px solid #Fe9900;
//     height: 4.6rem;
//     a{
//       margin-left: 2rem;
//     }
//   }
//   li:nth-last-child(1){
//     border-bottom: 0 solid red;
//   }
//   .show_mobile_nav_list{
//     @extend .mobile_nav_list;
//     opacity: 1;
//   }
// }
.nav_bar_wrapper{
  max-width: 1000px;
  width: 60%;
  height: 80px;
  margin: 0 auto;
  @media screen and  ( max-width: 1400px ){ 
     width: 80%;
  }
  .logo{
    width: 54px;
    height: 80px;
    //background: url('../../assets/logo.png') no-repeat 0 center;
    float: left;
    cursor: pointer;
    a{
      width: 54px;
      height: 80px; 
      display:inline-block;
      background: url('../../assets/logo.png') no-repeat 0 center;
    }
  }
  .logo_text{
    float: left;
    height: 80px;
    margin-left: 16px;
    .logo_text_top{
      width: 44px;
      height: 20px;
      margin-top: 19px;
      background: url('../../assets/logo_title.png') no-repeat 0 0;
    }
    .logo_text_bottom{
      font-size: 18px;
      color: #333;
      font-weight: 500;
      padding-top: 6px;
    }
  }
}
.nav_bar_container{
   zoom: 1;
   overflow: hidden;
   height: 80px;
  .index_page,
  .nav_btn,
  .nav_list{
    float: right;
    height: 80px;
    cursor: pointer;
    transition: all .6s;
    -moz-transition: all .6s;  /* Firefox 4 */
    -webkit-transition: all .6s; /* Safari 和 Chrome */
    -o-transition: all .6s;  /* Opera */
  }
  .index_page{
    font-size: 18px;
    color: #333;
    text-align: center;
    line-height: 80px;
  }
  .nav_btn{
    margin-right: 53px;
    width: 19px;
    background: url('../../assets/click_before.png') no-repeat 0 center;
  }
  .nav_list{
    // transform: translateX(0);
    // -ms-transform: translateX(0);   /* IE 9 */
    // -webkit-transform: translateX(44.8rem); /* Safari and Chrome */
    // -o-transform: translateX(0);    /* Opera */
    // -moz-transform: translateX(0);    /* Firefox */
     margin-right: -448px;
  }
  .show_nav_list{
    @extend .nav_list;
    margin-right: 0;
    // transform: translateX(0);
    // -ms-transform: translateX(0);   /* IE 9 */
    // -webkit-transform: translateX(0); /* Safari and Chrome */
    // -o-transform: translateX(0);    /* Opera */
    // -moz-transform: translateX(0);    /* Firefox */
  }
  .nav_list ul li,
  .show_nav_list ul li{
    height: 80px;
    float: left;
    font-size: 18px;
    line-height: 80px;
    color: #333;
    cursor: pointer;
    .red{
       color: #f99000;
       font-size: 20px;
     }
     .black{
       color: #333;
       font-size: 18px;
    }
  }
  .nav_list ul li:nth-child(1),
  .show_nav_list ul li:nth-child(1){
    margin-left: 10px;
    margin-right: 70px;
  }
  .nav_list ul li:nth-child(2),
  .nav_list ul li:nth-child(3),
  .show_nav_list ul li:nth-child(2),
  .show_nav_list ul li:nth-child(3){
    margin-right: 58px;
  }
}
.nav_bar_container:after{
  content: '';
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.show_nav{
  @extend .nav_btn;
  transform: rotate(90deg);
  -ms-transform: rotate(90deg);   /* IE 9 */
  -webkit-transform: rotate(90deg); /* Safari and Chrome */
  -o-transform: rotate(90deg);    /* Opera */
  -moz-transform: rotate(90deg);    /* Firefox */
}
</style>
