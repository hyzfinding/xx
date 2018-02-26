<template>
  <div id="joinUs">
    <div class="banner">
      <img src="../../assets/join_banner.jpg">
    </div>
    <div class="join_content_wrapper">
      <div class="join_content">
        <div class="join_content_title_wrapper">
          <div class="join_content_title">
            加入我们
          </div>
        </div>
        <div class="join_text_warpper">
          <div class="position_list_wrapper">
            <span class="slide_block top_1"></span>
            <ul @click.prevent="showPosition($event)">
              <li>
                <a :class="count==1?black:grey" href="position_1">产品经理</a>
              </li>
              <li>
                <a :class="count==2?black:grey" href="position_2">设计总监</a>
              </li>
              <li>
                <a :class="count==3?black:grey" href="position_3">运营经理</a>
              </li>
              <li>
                <a :class="count==4?black:grey" href="position_4">IOS 开发</a>
              </li>
              <li>
                <a :class="count==5?black:grey" href="position_5">安卓开发</a>
              </li>
              <li>
                <a :class="count==6?black:grey" href="position_6">前端开发</a>
              </li>
               <li>
                <a :class="count==7?black:grey" href="position_7">JAVA后端</a>
              </li>
              <li>
                <a :class="count==8?black:grey" href="position_8">资深文案</a>
              </li>
              <li>
                <a :class="count==9?black:grey" href="position_9">前台专员</a>
              </li>
            </ul>
          </div>
          <div class="position_introduction">
            <div :class="count==1?show:hide">
              <h3>资深产品经理</h3>
              <p>5-10年/本科 &nbsp;&nbsp;&nbsp;&nbsp;深圳</p>
              <div class="tips_wrapper">
                <span class="tips">需求分析</span>
                <span class="tips">项目管理</span>
                <span class="tips">产品规划</span>
              </div>
              <h3>职位描述</h3>
              <p style="padding-top: 2.2rem;">1，负责项目计划，方案输出，周期评估以及进度管控工作；</p>
              <p>2，负责主讲项目启动会，确定项目成员架构及成员工作分配，领导团队达成项目目标；</p>
              <p>3，制定中长期的产品规划，并确定好执行计划；</p>
              <p>4，搜集和提出产品需求，制定产品规范，对产品进行全面设计；</p>
              <p>5；为产品团队初中级产品经理，制定提升计划，提供整体工作效益；</p>
              <p>6，对组内成员进行培训；</p>
              <p>7，负责系统模块的需求对接，产品文档/原型类输出，推动及协调产品的开发周期，进度把控及需求变更，跟踪至最终上线运营，对产品质量负责；</p>
              <p>8，主动挖掘业务需求，提出优化现在的系统功能；</p>
              <h3>简历请投递</h3>
              <p>zhuboyu@xiaoyoucn.com</p>
            </div>
            <div :class="count==2?show:hide"><div class="donot_need">该职位暂未招聘</div></div>
            <div :class="count==3?show:hide"><div class="donot_need">该职位暂未招聘</div></div>
            <div :class="count==4?show:hide"><div class="donot_need">该职位暂未招聘</div></div>
            <div :class="count==5?show:hide"><div class="donot_need">该职位暂未招聘</div></div>
            <div :class="count==6?show:hide"><div class="donot_need">该职位暂未招聘</div></div>
            <div :class="count==7?show:hide"><div class="donot_need">该职位暂未招聘</div></div>
            <div :class="count==8?show:hide"><div class="donot_need">该职位暂未招聘</div></div>
            <div :class="count==9?show:hide"><div class="donot_need"><div>{{$router.name}}</div></div></div>
          </div>
        </div>
      </div>
    </div>
    
    <footPart></footPart>
  </div>
</template>

<script>
import footPart from '@/components/commons/footer'
export default {
  name: 'aboutUs',
  data(){
    return{
      count:1,
      black:'black',
      grey:'grey',
      show:'show',
      hide:'hide'
    }
  },
  components: {
    'footPart':footPart
  },
  methods:{
    showPosition:function(e){
      if(e.target.getAttribute('href')){
        //let className = e.target.getAttribute('href');
        let count = Number(e.target.getAttribute('href').slice(-1));
        this.count = count;
        //console.log(this.count);
        document.getElementsByClassName('slide_block')[0].setAttribute('class','slide_block top_'+count);
      }
    }
  }
  
}
</script>


<style lang="scss" type="text/css" scoped>
@import './src/common/_reset.scss';
#joinUs{
  min-width: 900px;
}
.banner{
  margin-top: 80px;
}
.join_content_wrapper{
  position: relative;
  .join_content{
    max-width: 1000px;
    min-width: 900px;
    width: 60%;
    @media screen and  ( max-width: 1400px ){ 
     width: 80%;
    }
    margin: -70px auto 0 auto;
    //padding-bottom: 13.7rem;
    border: .2rem solid #fefefe;
    -webkit-box-shadow:0 0 1.4rem .1rem rgba(195,195,195,.2);  
    -moz-box-shadow:0 0 1.4rem .1rem rgba(195,195,195,.2);  
    box-shadow:0 0 1.4rem .1rem rgba(195,195,195,.2);
    border-radius: .8rem .8rem 0 0;
    background-color: #fff;
    
  }
}
.join_content_title_wrapper{
  width: 94%;
  height: 7.8rem;
  margin: 0 auto;
  border-bottom: .1rem solid #eaeaea;
  padding-top: .7rem;
}
.join_content_title{
  width: 23.7rem;
  height: 7.1rem;
  margin:  0 auto;
  text-align: center;
  font-size: 3.4rem;
  line-height: 7.1rem;
  color: #333;
  background: url('../../assets/juxing.png') no-repeat center center;
}
.join_text_warpper{
  width: 94%;
  margin: 5rem auto 0 auto;
}
h3{
  font-size:3rem;
  color: #333;
  font-weight: normal;
}
p{
  font-size: 1.9rem;
  color: #888;
  line-height: 3rem;
}
.join_text_warpper:after{
  content:'';
  width:0;
  height:0;
  line-height:0;
  display:block;
  visibility: hidden;
  clear: both;
}
.join_text_warpper{
  zoom:1;

}
.position_list_wrapper{
  width: 21.3rem;
  height: 100%;
  float: left;
  position: relative;
  li{
    width: 12rem;
    height: 3.1rem;
    padding: 2.6rem 0;
    margin-left: 2rem;
    border-bottom: .1rem solid #eaeaea;
    text-align:center;
    a{
      font-size: 2.4rem;
    }
    .black{
      color: black;
      font-size: 2rem;
    }
    .grey{
      color: #999;
      font-size: 1.8rem;
    }
  }
  ul li:first-child{
    padding-top:0;
  }
  ul li:nth-last-child(1){
    border-bottom: .0rem;
  }
  .slide_block{
    display:inline-block;
    width: .6rem;
    height: 3rem;
    background: url('../../assets/slide_block.png')no-repeat 0 0;
    position: absolute;
    //top: .3rem;
    transition: all .4s;
    -moz-transition: all .4s;  /* Firefox 4 */
    -webkit-transition: all .4s; /* Safari 和 Chrome */
    -o-transition: all .4s;  /* Opera */
  }
  .top_1{
    top: .3rem;
  }
  .top_2{
    top: 8.6rem;
  }
  .top_3{
    top: 16.9rem;
  }
  .top_4{
    top: 25rem;
  }
  .top_5{
    top: 33.3rem;
  }
  .top_6{
    top: 41.9rem;
  }
  .top_7{
    top: 50.3rem;
  }
  .top_8{
    top: 58.5rem;
  }
  .top_9{
    top: 67.3rem;
  }
 
}
.position_introduction{
  float:left;
  width: 58%;
  padding-left: 3.7rem;
  position: relative;
  @media screen and  (max-width: 1440px ){ 
     width: 56%;
  }
  >div{
    //border:1px solid red;
    transition: all .4s;
    -moz-transition: all .4s;  /* Firefox 4 */
    -webkit-transition: all .4s; /* Safari 和 Chrome */
    -o-transition: all .4s;  /* Opera */

  }
  .hide{
    display:none;
  }
  .show{
    display:block;
  }
  h3{
    font-size:2.2rem;
    color: #ff9000;
  }
  div h3:nth-last-child(2){
      padding-top: 5.3rem;
  }
  p{
    font-size: 1.6rem;
    color: #333;
    padding: .4rem 0 .4rem 0;
  }
  div p:nth-child(2){
    padding: 3rem 0 1.1rem 0;
  }
  div p:nth-last-child(1){
    padding: 3rem 0 13.7rem 0;
  }
}
.donot_need{
  font-size: 1.8rem;
  color: #444;
  text-align: center;
  line-height: 72.9rem;
}
.tips_wrapper{
  padding-bottom: 3.9rem;
  cursor: pointer;
  .tips:nth-child(2),
  .tips:nth-child(3){
    margin-left: 1.5rem;
  }

}
.tips{
  width: 100px;
  height: 34px;
  display: inline-block;
  background: url('../../assets/tip_border.png') no-repeat 0 0;
  background-size: cover;
  font-size: 1.6rem;
  color: #444;
  text-align: center;
  line-height: 34px;
}
</style>
