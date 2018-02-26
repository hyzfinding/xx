<template>
  <div id="xiaoyou">
    <div class="banner">
      <img src="../../assets/xiaoyou_banner.png">
    </div>
    <div class="xiaoyou_tips">
      小游伴驾
    </div> 
    <div class="xiayou_guonei">
      <img src="../../assets/gnzt.png">
      <div class="xiaoyou_guonei_text">
        <p>国内组团</p>
        <p>时刻陪伴你的贴身管家</p>
        <p>国内知名旅游服务商为你护航</p>
        <p>国外专业团队为你接驾</p>
        <p>旅途中美好时光，小游陪你</p>
      </div>
    </div>
    <div class="xiaoyou_guowai">
      <div class="hwly">
        <img src="../../assets/hwly.png">
        <span class="span">升级跨境游</span>
      </div>
      <div class="hwsp">
        <img src="../../assets/hwsp.png">
        <span class="span">海外超值商品</span>
      </div>
    </div>
    <div class="animation_wrapper">
      <!-- <div class="a" @click="big($event)"></div> -->
      <div class="animation_img_wrapper">
        <img src="../../assets/animationBg.png">
        <div class="animation_people_one">
          <img src="../../assets/animationTextOne.png">
          <img src="../../assets/animationPeople.png">
          <span>我要退税</span>
        </div>
        <div class="animation_people_two">
          <img src="../../assets/animationTextThree.png">
          <img src="../../assets/animationPeople.png">
          <span>我要购物折扣</span>
        </div>
        <div class="animation_people_three">
          <img src="../../assets/animationTextTwo.png">
          <img src="../../assets/animationPeople.png">
          <span>我要分期购物</span>
        </div>
        <div class="animation_text">
          <span>小游中心</span>
        </div>
      </div> 
      <div class="animtaion_tips_wrapper">
        <div class="animtaion_tips_top">
          <span>小游</span>-您的跨境旅游管家
        </div>
        <div class="animation_tips_bottom">
          贴身管家&nbsp;&nbsp;&nbsp;&nbsp;极致服务
        </div>
      </div>
      
    </div>
    <div class="xiayou_list tu_1">
      <img src="../../assets/tu_1.png">
      <div>
        <p>去国外旅游</p>
        <p>不仅是自拍和朋友圈</p>
        <p>小游伴您，用心领略世界</p>
        <p>小游 APP</p>
        <p>贴身管家服务</p>
        <p>专业地接导游</p>
      </div>
    </div>
    <div class="line">
      <img src="../../assets/line.png">
    </div>
    <div class="xiayou_list tu_2">
      <img src="../../assets/tu_2.png">
      <div>
        <p>难得来一次</p>
        <p>怎能空手而归</p>
        <p>小游 APP</p>
        <p>助你购物攻略</p>
        <p>给爸妈一个惊喜</p>
      </div> 
    </div>
    <div class="line">
      <img src="../../assets/line.png">
    </div>
    <div class="xiayou_list tu_3">
      <img src="../../assets/tu_3.png">
      <div>
        <p>买了这么多</p>
        <p>退税也能省不少？</p>
        <p>小游 APP</p>
        <p>退税快捷又方便</p>
        <p>还帮你省钱</p>
      </div>  
    </div>
    <div class="line">
      <img src="../../assets/line.png">
    </div>
    <div class="xiayou_list tu_4">
      <img src="../../assets/tu_4.png">
      <div>
        <p>你总想省着用</p>
        <p>别人都在买自己喜欢的</p>
        <p>你尴尬了</p>
        <p>小游 APP</p>
        <p>超长账期，免息还款</p>
      </div>  
    </div>
    <footPart></footPart>
  </div>
</template>

<script>
import footPart from '@/components/commons/footer'
import osType   from "../../assets/js/osType.js"
export default {
  name: 'xiaoyou',
  data(){
    return{
      isMac:false,
      span:'span',
      mac_span:'mac_span',
      xiaoyou_guonei_text:'xiaoyou_guonei_text',
      mac_xiaoyou_guonei_text:'mac_xiaoyou_guonei_text'
    }
  },
  components: {
    'footPart':footPart
  },
  created:function(){
    this.isMac = osType.isMac();
  },
  methods:{
    big:function(e){
      e.target.setAttribute('class','b');
      console.log(e.target.styleLis('radial-gradient'));
    }
  }
  
}
</script>


<style lang="scss" type="text/css" scoped>
@import './src/common/_reset.scss';
#xiaoyou{
  min-width: 900px;
  // max-width: 1242px;
}
.banner{
  margin-top: 80px;
  padding-top: 12rem;
  background-color: #3D5151;
  width: 100%;
  img{
    width: 60%;
    @media screen and  ( max-width: 1400px ){ 
     width: 80%;
    }
    max-width: 1000px;
    // min-width: 1100px;
    display: block;
    margin: 0 auto;
  }
}
.xiaoyou_tips{
  width: 237px;
  height: 71px;
  margin:  74px auto 58px auto;
  text-align: center;
  font-size: 3rem;
  line-height: 71px;
  color: #333;
  background: url('../../assets/juxing.png') no-repeat center center;
}
.xiayou_guonei{
  max-width: 1000px;
  width: 60%;
  @media screen and  ( max-width: 1400px ){ 
     width: 80%;
  }
  // height: 33.4rem;
  margin: 0 auto 2rem auto;
  //padding: 10rem;
  //background: url('../../assets/gnzt.png') no-repeat 0 0;
  position: relative;
  .xiaoyou_guonei_text{
    position: absolute;
    top: 16%;
    left: 7.4%;
    p{
      font-size: 1.8rem;
      color: #666;
      padding: 4px 0 4px 0;
    }
    p:first-child{
      font-size: 2.4rem;
      color: #333;
      padding: 0 0  24px 36px;
      background: url('../../assets/gnzt_block.png') no-repeat 0 .8rem;
    }
  }
}
.xiaoyou_guowai{
  max-width: 1000px;
  min-width: 800px;
  width: 60%;
  @media screen and  ( max-width: 1400px ){ 
     width: 80%;
  }
  height: 33.4rem;
  margin: 0 auto;
  position: relative;
  .hwly{
    width: 49%;
    position: absolute;
    left: 0;
  }
  .hwsp{
    width: 49%;
    position: absolute;
    right: 0;
  } 
  .span{
    font-size: 2.6rem;
    color: #333;
    line-height: 304px;
    position: absolute;
    right: 6%;
    top: -4rem;
    z-index: 200;
    @media screen and  ( max-width: 1400px ){ 
     top: -4rem;
     font-size: 2.2rem;
    }
  }
  // .mac_span{
  //   font-size: 2.6rem;
  //   color: #333;
  //   //line-height: 33.4rem;
  //   position: absolute;
  //   right: 8%;
  //   top: 0;
  //   z-index: 200;
  //   line-height: 304px;
  // }
}
.xiayou_list{
  width: 1100px;
  height: 300px; 
  margin: 0 auto;
  p{
    line-height: 40px;
  }
}
.tu_1{
  max-width: 600px;
  width: 44%;
  //background: url('../../assets/tu_1.png') no-repeat right 12rem;
  position: relative;
  margin: 20rem auto 0 auto;
  img{
    width: 42.5%;
    max-width: 50rem;
    position: absolute;
    right: 0;
  }
  div{
    position:absolute;
    left: -88px;
    top: -14%;
    background: url('../../assets/01.png') no-repeat 0 center;
    padding-left: 88px;
  }
  div p:nth-child(1),
  div p:nth-child(2),
  div p:nth-child(3){
    font-size: 2.6rem;
    color: #ff9000;
  }
  div p{
    font-size: 2.2rem;
    
    color: #333;
  }
}
.tu_2{
  position: relative;
  margin: 9.8rem auto 3.4rem auto;
  max-width: 600px;
  width: 44%;
  img{
    width: 35.7%;
    max-width: 50rem;
    position: absolute;
    left: 0;
  }
  div{
    position:absolute;
    right: 10rem;
    top: -6%;
    background: url('../../assets/02.png') no-repeat 0 center;
    padding-left: 88px;
  }
}
.tu_3{
  height: 32.7rem;
  position: relative;
  margin: 8.1rem auto 0 auto;
  max-width: 600px;
  width: 44%;
  img{
    width: 35.7%;
    max-width: 50rem;
    position: absolute;
    right: 0;
  }
  div{
    position:absolute;
    left: -88px;
    top: 0;
    background: url('../../assets/03.png') no-repeat 0 center;
    padding-left: 88px;
  }
}
.tu_4{
  position: relative;
  margin: 8rem auto 0 auto;
  height: 40.5rem;
  max-width: 600px;
  width: 44%;
  img{
    width: 35.7%;
    max-width: 50rem;
    position: absolute;
    left: 0;
  }
  div{
    position:absolute;
    top: -3%;
    right: 0;
    background: url('../../assets/04.png') no-repeat 0 center;
    padding-left: 9.5rem;
  }
}
.tu_4,
.tu_3,
.tu_2{
  div p:nth-child(1),
  div p:nth-child(2){
    font-size: 24px;
    color: #ff9000;
  }
  div p{
    font-size: 22px;
    color: #333;
  }
}
.line{
  width: 70%;
  max-width: 124.2rem;
  margin: 0 auto;
  img{
    width: 100%;
    height: 1px;
  }
}
.animation_wrapper{
  width: 100%;
  background-color: #fafaf7;
  padding: 21.7rem 0 7.1rem 0;
  position: relative;
    .animation_img_wrapper{
      width: 80%;
      margin: 0 auto;
      max-width: 1242px;
      position: relative;
      > img{  
        width: 100%;
        display: block;
       
      }
      .animation_people_one{
        position:absolute;
        top: -3rem;
        left: 20%;
        width: 156px;
        height: 128px;
        text-align: center;
        img:nth-child(1){
          width: 110px;
          float: left;
        }
        img:nth-child(2){
          width: 90px;
          float: right;
        }
        span{
          position:absolute;
          font-size: 20px;
          top: 4px;
          width: 110px;
          left: 0;
        }
      }
      .animation_people_two{
        position:absolute;
        bottom: 8rem;
        left: 31%;
        width: 186px;
        height: 128px;
        text-align: center;
        img:nth-child(1){
          width: 140px;
          float: left;
        }
        img:nth-child(2){
          width: 90px;
          float: right;
        }
        span{
          position:absolute;
          font-size: 20px;
          top: 14px;
          width: 140px;
          left: 0;
        }
      }
      .animation_people_three{
        position:absolute;
        top: 3rem;
        right: 15%;
        width: 210px;
        height: 128px;
        text-align: center;
        img:nth-child(1){
          width: 150px;
          float: right;
        }
        img:nth-child(2){
          width: 90px;
          float: left;
        }
        span{
          position:absolute;
          font-size: 20px;
          top: 9px;
          width: 150px;
          right: 0;
        }
      }
      .animation_text{
        width: 189px;
        height: 81px;
        background: url('../../assets/animationText.png') no-repeat 0 0;
        background-size: 160px;
        position: absolute;
        top: 17%;
        left: 50%;
        color: #fff;
        font-size: 3.2rem;
        line-height: 71px;
        text-indent: 1.6rem;
        @media screen and  ( max-width: 1150px ){ 
           background-size: 140px;
           font-size: 3rem;
           text-indent: 1rem;
           line-height: 64px;
           top: 15%;
        }
      }
}
 
  .animtaion_tips_wrapper{
    position: absolute;
    top: 0;
    width: 100%;
    height: 21.7rem;
    text-align: center;
    .animtaion_tips_top{
      font-size: 3.2rem;
      color: #333;
      margin-top: 6.6rem;
      span{
        color: #f99000;
      }
    }
    .animation_tips_bottom{
      font-size: 2.4rem;
      color: #333;
      margin-top: 3rem;
    }
  }
}
.a{
  width: 4rem;
  height: 2rem;
  margin: 0 auto; 
  -webkit-transform:transition3d(0,0,0);


  -moz-border-radius: 50%; 
  -webkit-border-radius: 50%; 
  border-radius: 50%;  

  -moz-box-shadow:5px -5px 5px #999 inset;              /* For Firefox3.6+ */
  -webkit-box-shadow:5px -5px 5px #999 inset;           /* For Chrome5+, Safari5+ */
  box-shadow: 5px -18px 2rem  1rem #FF9000 inset;                   /* For Latest Opera */

  // background: -webkit-radial-gradient(60% 55%,#FFCB00, #fff); /* Safari 5.1 - 6.0 */
  // background: -o-radial-gradient(60% 55%,#FFCB00, #fff); /* Opera 11.6 - 12.0 */
  // background: -moz-radial-gradient(60% 55%,#FFCB00, #fff); /* Firefox 3.6 - 15 */
  // background: radial-gradient( #FBE9A9 60%,#FFDC64 80%); /* 标准的语法 */


  // transform: rotateX(230deg);
  -webkit-transform: rotateX(50deg); /* Safari 和 Chrome */
  // -moz-transform: rotateX(230deg);

  transition: all 3s;
  -moz-transition: all 1.8s;  /* Firefox 4 */
  -webkit-transition: all 3s; /* Safari 和 Chrome */
  -o-transition: all .8s;  /* Opera */
}
.b{
  @extend .a;
  // width: 40rem;
  // height: 20rem;
  // background: -webkit-radial-gradient(60% 55%,#FFCB00, #fff); /* Safari 5.1 - 6.0 */
  // background: -o-radial-gradient(60% 55%,#FFCB00, #fff); /* Opera 11.6 - 12.0 */
  // background: -moz-radial-gradient(60% 55%,#FFCB00, #fff); /* Firefox 3.6 - 15 */
  // background: radial-gradient( #F8F3D3 60%,#FFDC64 80%); /* 标准的语法 */
  -moz-box-shadow:5px -5px 5px #999 inset;              /* For Firefox3.6+ */
  -webkit-box-shadow:5px -5px 5px #999 inset;           /* For Chrome5+, Safari5+ */
  box-shadow: 5px -18px 40rem  1rem #FBE89D inset;                   /* For Latest Opera */
  transform:scale(4,4);
}
</style>
