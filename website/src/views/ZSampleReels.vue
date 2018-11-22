<template>
    <div class="ZSam-container">
        <Header/>
        <div class="bg" id="bg"></div>
        <div class="page-container">
            <div class='page-top'></div>
            <div class='page-bottom'></div>
            <div class="icon"></div>
            <div class="show-items">
                <ul class="show-items-ul">
                    <li>
                        <div class="parallelogram items-li1" id="li1" @mouseover="changeBg(1)">
                            <div class="li-header" @click="dispPic()">
                                <div class="header-blue">

                                </div>
                                <div class="font">

                                </div>
                            </div>
                            <div class="li-content">
                                <h3 style="font-size:24px;">微信小程序：校园帮邦</h3>
                                <p style="font-size:2px;">
                                   团队开发，获得校赛二等奖。程序主要负责饮食代买 快递帮取等跑腿功能。小程序拥有悬赏和揭榜功能。当学生发布一条代买信息的时候 其他人可以揭取这条消息。

用到的技巧：充分利用了数据绑定进行数据交互，利用列表渲染与条件渲染优化简化前端页面编写速度。通过百分比分辨率实现对大部分手机分辨率的兼容。采用了左滑右滑事件实现滑动显示的侧边栏，优化用户体验。实现拍照上传或相簿照片上传。采用轻量级PHP框架-CI框架，利用PDO访问数据库完成数据库的增删改查,使用MVC结构体系。使用了安全性与 XSS 过滤。是用钩子函数对生命周期进行特定函数调用。通过特定接口实现微信唯一用户标识Open_id的获取。使用PHPMyadmin对服务器数据库进行操作。 
                                </p>
                            </div>
                            <div class="li-footer" @click="dispPic()">
                                <p style="font-size:16px;color:#fff;padding:30px;" class="footer-p1" >
                                    more...
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="parallelogram items-li2" id="li2" @mouseover="changeBg(2)">
                            <a href="https://tlroje787.github.io/star/star/stb.html">
                            <div class="li-header">
                                <div class="header-blue">

                                </div>
                                <div class="font">

                                </div>
                            </div>
                            </a>
                            <div class="li-content">
                                <h3 style="font-size:24px;">星巴克的官网(JQuery)</h3>
                                <p style="font-size:2px;">
                                   对星巴克官网进行模仿；
用到的技巧：采用JQuery实现DOM操作，并部分代码采用了链式操作优化代码结构。使用了行为层与结构层完全分离的思想，优化了HTML与JQ之间的相互关联产生的冲突。实现了轮播图；实现动动画JQ渐变效果;实现CSS3动画渐变效果。使用：nth-child ：hover等改变了对应的标签 。使用@media对窗口大小进行监听 当窗口大小小于或大于1000px时 改变页面布局;实现了Jquery的AJAX异步处理。利用removeClass addClass对class进行增加或者删除。
                                </p>
                            </div>
                            <div class="li-footer">
                                <a href="https://tlroje787.github.io/star/star/stb.html">
                                <p style="font-size:16px;color:#fff;padding:30px;" class="footer-p2">
                                    more...
                                </p>
                                 </a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="parallelogram items-li3" id="li3" @mouseover="changeBg(3)">
                            <a href="https://tlroje787.github.io/SELWEB/ ">
                            <div class="li-header">
                                <div class="header-blue">

                                </div>
                                <div class="font">

                                </div>
                            </div>
                            </a>
                            <div class="li-content">
                                <h3 style="font-size:24px;">个人VUE网站demo</h3>
                                <p style="font-size:2px;">
                                   介绍一款自己玩的游戏------《UNDERTALE》 

用到的技巧：使用VUE开发 使用很多CSS动画效果与组件，使用MVVM结构开发。使用props对父子组件进行数据传递。实现双向数据绑定，优化页面动态数据显示。使用组件，进行分块开发，减少相互组件间的干扰。利用style scoped阻止组件间重名样式覆盖渲染。使用v-on:click.stop阻止事件冒泡。利用window.pageYOffset对浏览器滚动条进行位置监听。使用钩子函数，transition组件，css3的animation与@keyframes并使用原生JS绑定DOM元素实现各种动态效果。使用transfrom实现动态3D效果。使用了IVEW——VUE的UI组件库。使用了POSE ——VUE的动效库 
                                </p>
                            </div>
                            <div class="li-footer">
                                <a href="https://tlroje787.github.io/SELWEB/ ">
                                <p style="font-size:16px;color:#fff;padding:30px;" class="footer-p3">
                                    more...
                                </p>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 3图片 -->
            <!-- <div class="bga" id="bga">
                <div id="p1"></div>
                <div id="p2"></div>
                <div id="p3"></div>
                <div class="p1to3-bg"> </div>
                <div class="back" @click="clearPic()">BACK</div>
            </div> -->
        </div>
    </div>
</template>
<style scoped>
.show-items-ul li{
    transition: all 1s ease;
    opacity: 0;
}
/* .parallelogram {
    width: 350px;
    height: 597px;
        margin-left:20px;
    -webkit-transform: skewY(-10deg);
       -moz-transform: skewY(-10deg);
         -o-transform: skewY(-10deg);
    background: red;
} */
Header{
    z-index: 1;
}
*{
    border:0;
    margin: 0;
    padding: 0;
}
.bga{
    opacity: 0;
    z-index: -1;
    transition: all .3s ease-in-out;
}
.bg{
    width: 100%;
    height:100%;
    position: fixed;
    top:0;
    left: 0;
    background: url('../assets/img/image.jpg');
    z-index: -1;
    background-repeat: round;
}
.ZSam-container{
    width: 100%;
    height:100%;
}
.page-container{
    position: absolute;
    top:0;
    width: 100%;
    height:130%;
    overflow: hidden;
    /* background: rgba(25,25,25,.5); */
}
.page-top{
position: absolute;
height:100%;
width: 200%;
transform: rotate(-10deg);
background: #1c1c1c;;
left: -20%;
top:-94%;
z-index: -1;
}
.page-bottom{  
position: absolute;
transform: rotate(-10deg);
top:22%;
left: -20%; 
height:100%;
width: 200%;
background: #1c1c1c;;
}
.show-items{
    position: absolute;
    top: 53%;
    /* transform: translateX(50%); */

    left: 50%;
    transform: translateX(-50%);
    width: 1110px;
    z-index: 2;
}
.show-items li{
    float: left;
    
}
.items-li1{
    width: 350px;
    height: 597px;
        margin-left:20px;
        margin-top:-240px;
        /* transform: translateY(-186px); */
                -webkit-transform: skewY(-10deg);
       -moz-transform: skewY(-10deg);
         -o-transform: skewY(-10deg);
background: red;
overflow: hidden;
}
.items-li1 .li-header{
    background: url('../assets/img/xybb.png');
    background-repeat: round;
    /* background: red; */
    position: relative;
}
.items-li2{
    width: 350px;
    height: 597px;
        margin-left:20px;
        margin-top:-300px;
    /* position: absolute; */
    /* transform: translateY(-124px); */
        -webkit-transform: skewY(-10deg);
       -moz-transform: skewY(-10deg);
         -o-transform: skewY(-10deg);
         background: red;
         overflow: hidden;
}
.items-li2 .li-header{
    background: url('../assets/img/xbk.png');
    background-repeat: round;
    /* background: red; */
}
.items-li3{
    width: 350px;
    height: 597px;
        margin-left:20px;
        margin-top:-364px;
    /* position: absolute; */
    /* transform: translateY(-186px); */
        -webkit-transform: skewY(-10deg);
       -moz-transform: skewY(-10deg);
         -o-transform: skewY(-10deg);
         background: red;
         overflow: hidden;
}
.items-li3 .li-header{
    background: url('../assets/img/sw.png');
    background-repeat: round;
    /* background: red; */
}
.li-header{
    width: 350px;
    height: 218.5px;
    /* background: url('../assets/img/image.jpg'); */
    background-repeat: round;
    -webkit-transform: skewY(9deg);
       -moz-transform: skewY(-9deg);
         -o-transform: skewY(-9deg);
         margin-top: -30px;
         cursor: pointer;
}
.li-header:hover .header-blue{
    /* background: red; */
    height:100%;
    
}
.li-header:hover .font{
    /* background: red; */
    /* height:100%; */
    opacity: 1;
}
.li-footer{
    width: 350px;
    height:144px;
    background: #23b6b6;
    -webkit-transform: skewY(9deg);
       -moz-transform: skewY(-9deg);
         -o-transform: skewY(-9deg);
         margin-top: 343px;
         cursor: pointer;
}
.li-content{
    width: 290px;
    height: 284.5px;
    position: absolute;
    top:187.5px;
        -webkit-transform: skewY(9deg);
       -moz-transform: skewY(-9deg);
         -o-transform: skewY(-9deg);
    background: #fff;
    padding: 30px;
    padding-bottom: 40px;
    /* display: border-box; */
    /* border:2px solid darkgoldenrod; */
}
.footer-p1{height:49px;transition: all .4s ease;}
.footer-p2{height:49px;transition: all .4s ease;}
.footer-p3{height:49px;transition: all .4s ease;}
.footer-p1:hover{
    /* margin-top: 10px; */
    background: #333;
}
.footer-p2:hover{
    /* margin-top: 10px; */
    background: #333;
}
.footer-p3:hover{
    /* margin-top: 10px; */
    background: #333;
}
.header-blue{
    width: 100%;
    /* height: 100%; */
    height: 0;
    background: #23b6b6;
    opacity: .5;
    transition: all 1s ease;
}
.font{
    width: 50px;
    height:50px;
    background: url('../assets/img/link.png');
    background-repeat: round;
    position: absolute;
    top:50%;
    transform: translateX(-50%);
    left: 50%;
    opacity: 0;
    transition: all 1s ease;
}
.icon{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: url('../assets/img/image.png');
    top:0;
background-size: 100% 100%;
background-repeat: round;
width: 300px;
height: 100px;
top:238px;
}
#p1{
    position: absolute;
    top:10%;
    left: 1%;
    width: 32%;
    height: 600px;
    background: url('../assets/img/p1.png');
    background-size: 100% 100%;
    z-index: 3;
    transition: all .3s ease-in-out;
}
#p1:hover{
    top:10%;
    left: 1%;
    width: 64%;
    height: 800px;
    z-index: 4;
}
#p2{
    position: absolute;
    top:10%;
    left: 34%;
    width: 32%;
    height: 600px;
    background: url('../assets/img/p2.png');
    background-size: 100% 100%;
    z-index: 3;
    transition: all .3s ease-in-out;
}
#p2:hover{
    top:10%;
    left: 17%;
    width: 64%;
    height: 800px;
    z-index: 4;
}
#p3{
    position: absolute;
    top:10%;
    left: 67%;
    width: 32%;
    height: 600px;
    background: url('../assets/img/p3.png');
    background-size: 100% 100%;
    z-index: 3;
    transition: all .3s ease-in-out;
}
#p3:hover{
    top:10%;
    left: 35%;
    width: 64%;
    height: 800px;
    z-index: 4;
}
.p1to3-bg{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1c1c1c;
    opacity: .7;
    z-index: 2;
}
.back{
    position: absolute;
    top:60%;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 60px;
    background: red;
    z-index: 2;
}

</style>
<script>
import Header from '@/components/Header.vue'
export default {
  name: 'home',
  components: {
      Header:Header,
  },
  data(){
      return {
          Bg:'',
          UrlArr:['../assets/img/xybb.png','../assets/img/xbk.png','../assets/img/sw.png'],
          p1:'',
          p2:'',
          p3:'',
          p1to3:'',
          back:'',
          li:''
      }
  },mounted() {
      this.ul=document.getElementsByClassName('show-items-ul')[0];
      console.log(this.ul.childNodes);
      setTimeout(()=>{this.ul.childNodes[0].style.opacity=1;setTimeout(()=>{this.ul.childNodes[1].style.opacity=1;setTimeout(()=>{this.ul.childNodes[2].style.opacity=1;},500)},500)},500)
        //   console.log(this.p1to3);
        //   console.log(this.back);
      },
  methods:{
      changeBg(id){
        //   this.Bg=document.getElementById('bg');
        //   this.Bg.style.background=
        // this.Bg.style.backgroundImage="url("+this.UrlArr[id-1]+")";
      },
      dispPic(){
      },
      clearPic(){
          console.log('yes');
      },
      dispPic(){

        window.location.href = 'https://tlroje787.github.io/xybb_intro/banner/index.html';
      }
  }
}
</script>