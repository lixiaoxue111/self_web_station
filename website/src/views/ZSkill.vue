<template>
    <div class="zskill-container">
        <div class="skill-bg"></div>
        <Header/>
        <div class="zskill-box">
            <h3 class="skill-title">专业技能</h3>
            <span class="skill-en-title">- SKILL -</span>
            <div class="skill-info">
                <p>IT技术的学习需要持之以恒，对知识的认识深度与广度都很重要。
                    对于前端而言更是如此，近几年前端框架层出不穷，前端技术已
                    经从单纯的静态页面开发慢慢转变成mvc、mvvc等架构型开发，前端
                    工程师正在渐渐向全栈工程师转变，前端开发的重中之重依然是javascript脚本的
                    理解与应用，目前正在不断深入学习javascript知识。</p>
            </div>
            <div class="skill-item-box">
                <ul class="skill-items clear-fix">
                    <li @click="cli(1)" @mouseout="mout(1)">
                        <div class="skill-btn">
                            <img src="../assets/img/z-html.png" alt="">
                        </div>
                    </li>
                    <li @click="cli(2)" @mouseout="mout(2)">
                        <div class="skill-btn">
                            <img src="../assets/img/z-css.png" alt="">
                        </div>
                    </li>
                    <li @click="cli(3)" @mouseout="mout(3)" >
                        <div class="skill-btn">
                            <img src="../assets/img/z-js.png" alt="">
                        </div>
                    </li>
                    <li @click="cli(4)" @mouseout="mout(4)">
                        <div class="skill-btn">
                            <img src="../assets/img/z-skill.png" alt="">
                        </div>
                    </li>
                </ul>
                <div class="item-list-box clear-fix">
                    <ul class="skill-item-list1">
                        <li>. 熟练HTML/XHTML标签语意</li>
                        <li>. 深刻理解web标准</li>
                        <li>. 熟练div+css、熟悉盒模型和各类布局方式、能够根据设计图高效实现页面布局和交互效果</li>
                        <li>. 精通pc、wap页面开发</li>
                    </ul>
                    <ul class="skill-item-list2">
                        <li> 熟练HTML/XHTML标签语意</li>
                        <li> 深刻理解web标准</li>
                        <li> 熟练div+css、熟悉盒模型和各类布局方式、能够根据设计图高效实现页面布局和交互效果</li>
                        <li> 精通pc、wap页面开发</li>
                    </ul>
                    <ul class="skill-item-list3">
                        <li> 熟练HTML/XHTML标签语意</li>
                        <li> 深刻理解web标准</li>
                        <li> 熟练div+css、熟悉盒模型和各类布局方式、能够根据设计图高效实现页面布局和交互效果</li>
                        <li> 精通pc、wap页面开发</li>
                    </ul>
                    <ul class="skill-item-list4">
                        <li> 熟练HTML/XHTML标签语意</li>
                        <li> 深刻理解web标准</li>
                        <li> 熟练div+css、熟悉盒模型和各类布局方式、能够根据设计图高效实现页面布局和交互效果</li>
                        <li> 精通pc、wap页面开发</li>
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
            this.ul1=document.getElementsByClassName('skill-item-list1')[0];
            this.ul2=document.getElementsByClassName('skill-item-list2')[0];
            this.ul3=document.getElementsByClassName('skill-item-list3')[0];
            this.ul4=document.getElementsByClassName('skill-item-list4')[0];
        },
        methods:{
            cli(id){
                var that=this;
                switch (id) {
                    case 1:{
                        that.ul1.style.opacity=1;
                    }
                    break;
                    case 2:{
                        that.ul2.style.opacity=1;
                    }
                    break;
                    case 3:{
                        that.ul3.style.opacity=1;
                    }
                    break;
                    case 4:{
                        that.ul4.style.opacity=1;
                    }
                    break;
                }
            },
            mout(id){
                var that=this;
                switch (id) {
                    case 1:{
                        setTimeout(()=>{
                            that.ul1.style.opacity=0;
                        },500);
                    }
                        break;
                    case 2:{
                        setTimeout(()=>{
                            that.ul2.style.opacity=0;
                        },500);
                    }
                        break;
                    case 3:{
                        setTimeout(()=>{
                            that.ul3.style.opacity=0;
                        },500);

                    }
                        break;
                    case 4:{
                        setTimeout(()=>{
                            that.ul4.style.opacity=0;
                        },500);

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
    .zskill-container{
        height: 100%;
        overflow: hidden;
    }
    .skill-bg{
        background: url("../assets/img/z-skill-bg.jpg");
        background-repeat:no-repeat ;
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
    }
    .zskill-box{
        position: relative;
        height: 100%;
    }
    .skill-title,.skill-en-title,.skill-info{
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
    }
    .skill-title{
        text-align: center;
        font-size: 22px;
        display: inline-block;
        top: 10px;
        padding: 6px 20px;
        border-bottom: 2px solid #ff0036;
    }
    .skill-en-title{
        top: 65px;
        font-weight: bold;
        color: #ff0036;
        font-size: 14px;
    }
    .skill-info{
        width: 1100px;
        top: 125px;
    }
    .skill-item-box{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 200px;
        width: 1100px;
    }
    .skill-item-box li{
        float: left;
        width: 230px;
        margin: 0 10px;
        text-align: center;
        position: relative;
    }
    .skill-items>li::after{
        content:'';
        height: 0;
        width: 0;
        border-width: 15px;
        border-style: solid;
        border-color: transparent transparent #000 transparent;
        position: absolute;
        bottom: -50px;
        left: 43%;
        /*transform: translateX(-50%);*/
        transition: all 0.5s linear;
        transform-origin: 15px 22px;
    }
    .skill-items>li:hover img{
        transition: all .5s linear;
        transform: scale(1.2);
        cursor: pointer;
    }
    .skill-items>li:hover::after{
        transform: rotate(180deg);
    }
    .item-list-box ul{
        float: left;
        width: 260px;
        position: relative;
        top: 100px;
        text-align: center;
        background: #c8c8dc;
        margin-right: 10px;
        border-radius: 10px;
        opacity: 0;
    }
    .item-list-box ul li{
        text-align: left;
    }
</style>