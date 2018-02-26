<template>
  <div id="aboutUs">
    <div class="banner">
      <img src="../../assets/banner.jpg">
    </div>
    <div class="about_content_wrapper">
      <div class="about_content">
        <div class="about_content_title_wrapper">
          <div class="about_content_title">
            关于我们
          </div>
        </div>
        <div class="about_text_warpper">
          <h3 style="margin-top: 42px;">简介</h3>
          <p style="margin-top: 24px">深圳市小游国际旅行社有限公司是行业内第一家以创新商业模式主导的创新型公司，小游平台主要是针对中国跨境旅游人群定制的一个移动综合服务平台。小游在中国为全国每年近1200万出国游客服务。提供专业的管家级地接，免息提货，分期还款，便捷退税等升级综合业务。</p>
          <h3 style="margin-top: 51px;">理念</h3>
          <p style="margin-top: 24px;">顺天使之变，应人和之望，聚同道，成其事</p>
          <h3 style="margin-top: 50px;">愿景</h3>
          <p style="margin-top: 23px;">成为中国人出境必备APP之一</p>
        </div>
      </div>
    </div>
    <footPart></footPart>
  </div>
</template>

<script>
import footPart from '@/components/commons/footer'
import store from '@/vuex/store'
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'aboutUs',
  data(){
    return{
      
    }
  },
  created:function(){
    // let {a,b,c} = {a:1,b:2,c:3};
    // console.log(a);
    // let b = `胡玉泽`; 
    // let a = `胡玉泽啦啦啦嘿嘿嘿嘿我我我`;
    // console.log(a.includes(b));
    // let a= 1;
    // console.log( !isNaN(a) )
    // let arr = Array.of('技术胖','jspang','大胖逼逼叨');
    // console.log(arr);
    // let a = [1,2,3,4,5,6,7,8,9];
    // console.log(arr.find(function(value,index,arr){
    //    return value > 5;
    // }));
    
// arr.fill('jspang',2,5);
// console.log(arr);
    // for( let a of arr ){
    //   console.log(a);
    // }
    // for( let index of arr.keys() ){
    //   console.log(index);
    // }
    // let list = arr.entries();
    // console.log(list.next().value);
    // console.log(list.next().value);
    // let add = (a,b)=> a+b;
    // console.log(add(1,2));
    // let json = {
    //   a:'a',
    //   b:undefined
    // }
    // function fun({a,b='1'}){
    //   console.log(a,b);
    // }
    // fun(json);
    // let a = [1,2,3,4,5];
    // console.log( 1 in a  );
    // a.forEach( (val,key)=>console.log(val+key) );
    // let [a,b,c=4] = [{
    //    '0': 'jspang',
    // '1': '技术胖',
    // '2': '大胖逼逼叨',
    // length:3
    // },2];
    // console.log(a);
    // let abb = {
    //    '0': 'jspang',
    // '1': '技术胖',
    // '2': '大胖逼逼叨',
    // length:3
    // } 
    // console.log(Array.from(abb)); 
    // for ( let [index,val] of arr.entries() ){
    //   console.log(index+val);
    // };
    // console.log( arr.find((value,index,arr) => {
    //   return value > 6}
    //   )
    // );
    // let arr=[0,1,2,3,4,5,6,7,8,9,,];
    // arr.forEach((value,index)=>console.log(value));
    // arr.filter(x=>console.log(x));
    // arr.some(x=>console.log(x));
    // console.log(arr[10]);
    // let key='skill';
    // var obj={
    // [key]:'web'
    // }
    // console.log(obj.skill);

// var a={a:'jspang'};
// var b={b:'技术胖'};
// var c={c:'web'};
 
// let d=Object.assign(a,b,c)
// console.log(d);
   
let obj={name:'jspang',skill:'web'};
let age=Symbol();
obj[age]=18;
for (let item in obj){
    console.log(obj[item]);
} 
console.log(obj);
var g = Symbol('jspang');
console.log(g);
  },
  computed:{
    ...mapState(['count'])
  },
  components: {
    'footPart':footPart
  },
  store
}
</script>


<style lang="scss" type="text/css" scoped>
@import './src/common/_reset.scss';
#aboutUs{
  min-width: 900px;
}
.banner{
  margin-top: 80px;
}
.about_content_wrapper{
  position: relative;
  .about_content{
    width: 60%;
    @media screen and  ( max-width: 1400px ){ 
     width: 80%;
    }
    max-width: 1000px;
    min-width: 900px;
    margin: -14.7rem auto 0 auto;
    padding-bottom: 7.6rem;
    border: .2rem solid #fefefe;
    -webkit-box-shadow:0 0 1.4rem .1rem rgba(195,195,195,.2);  
    -moz-box-shadow:0 0 1.4rem .1rem rgba(195,195,195,.2);  
    box-shadow:0 0 1.4rem .1rem rgba(195,195,195,.2);
    border-radius: .8rem .8rem 0 0;
    background-color: #fff; 
  }
}
.about_content_title_wrapper{
  width: 94%;
  height: 9.5rem;
  margin: 0 auto;
  border-bottom: .1rem solid #eaeaea;
  padding-top: 2.5rem;
}
.about_content_title{
  width: 23.7rem;
  height: 7.1rem;
  margin:  0 auto;
  text-align: center;
  font-size: 3.4rem;
  line-height: 7.1rem;
  color: #333;
  background: url('../../assets/juxing.png') no-repeat center center;
}
.about_text_warpper{
  width: 90%;
  margin: 3.9rem auto 0 auto;
}
h3{
  font-size:2.8rem;
  color: #333;
  font-weight: normal;
}
p{
  font-size: 1.8rem;
  color: #999;
  line-height: 3rem;
}
</style>
