<template>
    <div class="LSkill-container">
        <div class="bg"></div>
        <Header/>
        <div class="LSkill-box">
            <div class="LSkill-content">
                <h1 class="skill-h">Skill</h1>
                <ul class="slider-circle">
                    <li class="circle-one">HTML</li>
                    <li class="circle-two">css</li>
                    <li class="circle-three">css3</li>
                    <li class="circle-four">HTML5</li>
                    <li class="circle-five">JS</li>
                    <li class="circle-six">jQuery</li>
                    <li class="circle-seven">Vue</li>
                </ul>
                <ul class="skill-items-box clear-fix">
                    <li class="skill-item"  @click="mover(1)" @mouseout="mout(1)">
                        <img class="item-circle" src="../assets/img/circle.png" alt="">
                        <div class="item-content">
                            <img class="item-img-1" src="../assets/img/webdesign01.png" alt="">
                            <div class="skill-information">
                                <h3 class="information-title">html & html5</h3>
                            </div>
                        </div>
                    </li>
                    <li class="skill-item" @click="mover(2)"  @mouseout="mout(2)">
                        <img class="item-circle" src="../assets/img/circle.png" alt="">
                        <div class="item-content">
                            <img class="item-img-1" src="../assets/img/webdesign02.png" alt="">
                            <div class="skill-information">
                                <h3 class="information-title">css & css3</h3>
                            </div>
                        </div>
                    </li>
                    <li class="skill-item"  @click="mover(3)" @mouseout="mout(3)">
                        <img class="item-circle" src="../assets/img/circle.png" alt="">
                        <div class="item-content">
                            <img class="item-img01" src="../assets/img/webdesign03.png" alt="">
                            <div class="skill-information">
                                <h3 class="information-title">JS & jQuery</h3>
                            </div>
                        </div>

                    </li>
                    <li class="skill-item"  @click="mover(4)" @mouseout="mout(4)">
                        <img class="item-circle" src="../assets/img/circle.png" alt="">
                        <div class="item-content">
                            <img class="item-img01" src="../assets/img/webdesign01.png" alt="">
                            <div class="skill-information">
                                <h3 class="information-title">Vue</h3>
                            </div>
                        </div>

                    </li>
                </ul>
                <div class="information-box clear-fix">
                    <ul class="information-list1">
                        <li>能够熟练使用 HTML、CSS基本知识，实现网页布局</li>
                        <li>熟悉HTML5语义化标签</li>
                        <li>熟悉各种盒模型和各类布局方式</li>
                    </ul>
                    <ul class="information-list2">
                        <li>熟练使用css和css3属性和用法</li>
                        <li>熟悉响应式网页开发原理</li>
                        <li>熟悉移动端开发及多机适配</li>
                    </ul>
                    <ul class="information-list3">
                        <li>熟悉JavaScript和jQuery基础知识</li>
                        <li>熟悉JavaScript Ajax交互开发原理</li>
                        <li>能够使用JavaScript和jQuery实现web页面特效开发</li>
                    </ul>
                    <ul class="information-list4">
                        <li>熟悉vue的基础知识</li>
                        <li>熟悉vue项目的开发流程</li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue'

    export default {
        name: 'home',
        components: {
            Header:Header
        },
        data(){
            return{
                ul1:'',
                ul2:'',
                ul3:'',
                ul4:''
            }
        },
        mounted(){
            this.ul1=document.getElementsByClassName('information-list1')[0];
            this.ul2=document.getElementsByClassName('information-list2')[0];
            this.ul3=document.getElementsByClassName('information-list3')[0];
            this.ul4=document.getElementsByClassName('information-list4')[0];
        },
        methods:{
            mover(id){
                var that=this;
              switch (id) {
                  case 1:{
                      //console.log('over');
                     // console.log(this.ul1.childNodes);
                      setTimeout(()=>{
                          that.ul1.childNodes[0].style.opacity=1;
                          setTimeout(()=>{
                              that.ul1.childNodes[1].style.opacity=1;
                              setTimeout(()=>{
                                  that.ul1.childNodes[2].style.opacity=1;
                              },300)
                          },300)
                      },300);
                          //that.ul1.style.opacity=1;
                  }
                  break;
                  case 2:{
                     // this.ul2.style.opacity=1;
                      setTimeout(()=>{
                          that.ul2.childNodes[0].style.opacity=1;
                          setTimeout(()=>{
                              that.ul2.childNodes[1].style.opacity=1;
                              setTimeout(()=>{
                                  that.ul2.childNodes[2].style.opacity=1;
                              },300)
                          },300)
                      },300);
                  }
                  break;
                  case 3:{
                      //this.ul3.style.opacity=1;
                      setTimeout(()=>{
                          that.ul3.childNodes[0].style.opacity=1;
                          setTimeout(()=>{
                              that.ul3.childNodes[1].style.opacity=1;
                              setTimeout(()=>{
                                  that.ul3.childNodes[2].style.opacity=1;
                              },300)
                          },300)
                      },300);
                  }
                      break;
                  case 4:{
                      //this.ul4.style.opacity=1;
                      setTimeout(()=>{
                          that.ul4.childNodes[0].style.opacity=1;
                          setTimeout(()=>{
                              that.ul4.childNodes[1].style.opacity=1;
                              setTimeout(()=>{
                                  that.ul4.childNodes[2].style.opacity=1;
                              },300)
                          },300)
                      },300);
                  }
                      break;
              }
            },
            mout(id){
                var that=this;
                var childs1=that.ul1.childNodes;
                var childs2=that.ul2.childNodes;
                var childs3=that.ul3.childNodes;
                var childs4=that.ul4.childNodes;
                switch (id) {
                    case 1:{
                        console.log('out');
                        for(var i=0;i<childs1.length;i++){
                            childs1[i].style.opacity=0;
                        }
                        //this.ul1.style.opacity=0;
                    }
                        break;
                    case 2:{
                        //this.ul2.style.opacity=0;
                        for(var i=0;i<childs2.length;i++){
                            childs2[i].style.opacity=0;
                        }
                    }
                        break;
                    case 3:{
                        //this.ul3.style.opacity=0;
                        for(var i=0;i<childs3.length;i++){
                            childs3[i].style.opacity=0;
                        }
                    }
                        break;
                    case 4:{
                        //this.ul4.style.opacity=0;
                        for(var i=0;i<childs4.length;i++){
                            childs4[i].style.opacity=0;
                        }
                    }
                        break;
                }
            }
        }
    }
</script>
<style scoped>
    .clear-fix::after{
        content: '';
        clear: both;
        display: block;
    }
    .LSkill-container{
        height: 100%;
    }
    .LSkill-box{
        height: calc(100% - 60px);
    }
    .bg{
        background: url("../assets/img/work-bg3.jpg");
        background-repeat:no-repeat ;
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
    }
    .LSkill-content{
        height: 100%;
        position: relative;
    }
    .LSkill-container{
        color: #ffffff;
        height: 100%;
    }
    .skill-h{
        position: absolute;
        /*text-align: center;*/
        font-weight: bold;
        left: 50%;
        transform: translateX(-50%);
    }
    /*移动小球 start*/
    .slider-circle{
        position: relative;
        height: 100%;
        width: 100%;
        text-align: center;
        overflow: hidden;
    }
    .slider-circle>li {
        position: absolute;
        left: -160px;
        font-size: 30px;
        color: #ccc;
        cursor: pointer;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 30px rgb(146, 155, 255) inset;
        font-family: "微软雅黑";
        font-weight: 200;
        text-align: center;
        width: 100px;
        height: 100px;
        line-height: 100px;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select: none;
        user-select: none;
        opacity: 1;
    }
    .slider-circle .circle-one {
        -webkit-animation: circle-one 30s linear 3s infinite;
        box-shadow: 0 0 30px rgb(39, 90, 213) inset;
    }
    @keyframes circle-one{
        0%{ left: 10%; bottom: 0; transform: scale(0.4) rotate(70deg); }
        20%{ left: 20%; bottom: 10%; }
        40%{ left: 30%; bottom: 30%; }
        60%{ left: 40%; bottom: 50%; transform: scale(1.2) rotate(-200deg); }
        80%{ left: 20%; bottom: 70%; }
        100%{  left: 0%; bottom: 110%; transform: rotate(720deg) scale(0.3);  }
    }
    .slider-circle .circle-two{
        -webkit-animation: circle-two 20s linear infinite;
        box-shadow: 0 0 30px rgb(176, 156, 47) inset;
    }
    @keyframes circle-two{
        0%{ left: 90%; bottom: 0; transform: rotate(120deg) scale(0.3); }
        20%{ bottom: 10%; }
        40%{ bottom: 30%; transform: scale(1.3);  }
        60%{ bottom: 50%; transform: rotate(480deg); }
        80%{ bottom: 70%; }
        100%{ left: 0%; bottom: 110%; transform: rotate(-120deg) scale(0.5);  }
    }
    .slider-circle .circle-three{
        -webkit-animation: circle-three 20s linear 5s infinite;
        box-shadow: 0 0 30px rgb(106, 239, 113) inset;
    }
    @keyframes circle-three{
        0%{ left: 20%; bottom: 0; transform: rotate(10deg) scale(0.3); }
        20%{ }
        40%{ transform: scale(1);  }
        60%{ transform: rotate(480deg); }
        80%{  }
        100%{ left: 90%; bottom: 110%; transform: rotate(-120deg) scale(0.2);  }
    }

    .slider-circle .circle-four{
        -webkit-animation: circle-four 20s linear 1s infinite;
        box-shadow: 0 0 30px rgb(240, 61, 213) inset;
    }
    @keyframes circle-four{
        0%{ left: 100%; bottom: 0; transform: rotate(90deg) scale(1); }
        20%{ }
        40%{ transform: scale(0.4);  }
        60%{ transform: rotate(480deg); }
        80%{  }
        100%{ left: 0; bottom: 110%; transform: rotate(-120deg) scale(0.8);  }
    }
    .slider-circle .circle-five{
        -webkit-animation: circle-five 18s linear 5s infinite;
        box-shadow: 0 0 30px rgb(45, 198, 15) inset;
    }
    @keyframes circle-five{
        0%{ left: 30%; bottom: 0; transform: rotate(0deg) scale(1); }
        20%{ }
        40%{ transform: scale(0.4);  }
        60%{ transform: rotate(480deg); }
        80%{  }
        100%{ left: 80%; bottom: 110%; transform: rotate(-120deg) scale(0.8);  }
    }
    .slider-circle .circle-six{
        -webkit-animation: circle-six 40s linear 5s infinite;
        box-shadow: 0 0 30px rgb(255, 225, 94) inset;
    }
    @keyframes circle-six{
        0%{ left: 90%; bottom: 20%; }
        20%{  }
        40%{ left: 60%; bottom: 80%; transform: scale(1.1);  }
        60%{ transform: rotate(-360deg); }
        80%{  }
        100%{ left: 80%; bottom: 100%; transform: rotate(220deg) scale(0.2);  }
    }

    .slider-circle .circle-seven{
        -webkit-animation: circle-seven 18s linear 4s infinite;
        box-shadow: 0 0px 30px rgb(146, 155, 255) inset;
    }
    @keyframes circle-seven{
        0%{ left: 0%; bottom: 0%; }
        20%{ left: 20%; bottom: 40%; }
        40%{ left: 40%; bottom: 10%; transform: scale(1.1);  }
        60%{ left: 60%;  bottom: 25%; transform: rotate(-360deg); }
        80%{ left: 80%; bottom: 50%; }
        100%{ left: 100%; bottom: 0%; transform: rotate(220deg) scale(0.4);  }
    }
    /*移动小球 end*/

    .skill-items-box{
        position: absolute;
        top: 100px;
        width: 1200px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .skill-item{
        cursor: pointer;
        float: left;
        position: relative;
        transition:all .5s ease;
        margin: 0 25px;
    }
    .item-content{
        position: relative;
        text-align: center;
        transition:all .5s ease;
        background: rgba(101, 170, 214, 0.75);
        border-radius: 50%;
        width: 150px;
        height: 150px;
        margin: 50px;
    }
    .skill-item .item-circle{
        position: absolute;
        left: 44%;
        top: 43%;
        /*transform: translate(-50%,-50%);*/
        width: 170px;
        height: 170px;
        display: block;
        transition: 1s;
        transition-property: all;
        transition-duration: 1s;
        transition-timing-function: ease;
        transition-delay: 0s;
        opacity: 0;
    }
    .skill-item:hover{
        transform: rotate(360deg) scale(1.1) ;
    }
    .skill-item:hover .item-circle{
        opacity: 1;
    }
    .skill-item img{
        position: absolute;
        width: 120px;
        height: 120px;
        margin: 15px;
        top: 42%;
        left: 40%;
        transform: translate(-50%,-50%);
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .skill-information{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        opacity: 0;
    }
    @keyframes skill-information {
        0%{}
        50%{

        }
        100%{
            top: 180px;
            opacity: 1;
        }
    }
    .skill-information{
        width: 280px;
    }
    .skill-item:hover .skill-information{
        -webkit-animation:skill-information .5s linear;
        animation-fill-mode: forwards;
    }
    .information-box{
        position: absolute;
        top: 60%;
        left: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(-50%);
        width: 1200px;
       /* color: #ff0036;*/
    }
    .information-box ul{
        float: left;
        margin: 0 10px;
        width: 400px;
        opacity: 1;
        text-align: center;
    }
    .information-box ul li{
        opacity: 0;
        /*list-style: circle;*/
    }
</style>