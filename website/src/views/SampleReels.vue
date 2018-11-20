<template>
    <div class="box">
        <div class="bg"></div>
        <Header/>
        <div class="s-container">
            <div class="slider-box" @mouseover="mover()" @mouseout="mout()">
                <ul class="slider clear-fix">
                    <li>
                        <a href="https://lixiaoxue111.github.io/shangcheng.github.io/" target="_blank">
                            <img src="../assets/img/Lwork01.jpg" alt="">
                            <span class="slider-item-name">网上商城</span>
                            <span class="slider-item-hover">点击查看详情</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://lixiaoxue111.github.io/xingbake/" target="_Blank">
                            <img src="../assets/img/Lwork02.jpg" alt="">
                            <span class="slider-item-name">星巴克</span>
                            <span class="slider-item-hover">点击查看详情</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://lixiaoxue111.github.io/Tmall/" target="_blank">
                            <img src="../assets/img/Lwork03.png" alt="">
                            <span class="slider-item-name">天猫</span>
                            <span class="slider-item-hover">点击查看详情</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://lixiaoxue111.github.io/shangcheng.github.io/" target="_blank">
                            <img src="../assets/img/Lwork01.jpg" alt="">
                            <span class="slider-item-name">网上商城</span>
                            <span class="slider-item-hover">点击查看详情</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://lixiaoxue111.github.io/xingbake/" target="_Blank">
                            <img src="../assets/img/Lwork02.jpg" alt="">
                            <span class="slider-item-name">星巴克</span>
                            <span class="slider-item-hover">点击查看详情</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://lixiaoxue111.github.io/Tmall/" target="_blank">
                            <img src="../assets/img/Lwork03.png" alt="">
                            <span class="slider-item-name">天猫</span>
                            <span class="slider-item-hover">点击查看详情</span>
                        </a>
                    </li>
                </ul>

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
                inter:true,
                timer:(() => {
                    // 某些操作
                }, 1000),
                oImgBox:'',
                oImgBoxFater:'',
                timer2:''
            }
        },
        mounted(){
            var oImgBox = document.getElementsByClassName('slider');
            var oImgBoxFater = document.getElementsByClassName('slider-box');
            var oImgBox=oImgBox[0];
            this.oImgBox=oImgBox;
            this.oImgBoxFater=oImgBoxFater;
            var speed = -1;
            if(this.inter==true){
                console.log('true');
            this.timer2 = setInterval(function() {
                if(oImgBox.offsetLeft > 0){
                    oImgBox.style.left = -oImgBox.offsetWidth/2 +"px";
                }
           },10);
            this.timer = setInterval(function(){
                let temp=oImgBox.offsetLeft;
                oImgBox.style.left = temp + 1 +'px';
            },10);
            }else{
                //console.log(false);
                clearInterval(this.timer);
                this.timer = null;
                clearInterval(this.timer2);
                this.timer2 = null;
            }
        },
        methods:{
            mover(){
                this.inter=false;
                //console.log(this.inter);
               // console.log(false);
                clearInterval(this.timer);
                this.timer = null;
                clearInterval(this.timer2);
                this.timer2 = null;

            },
            mout(){
                var oImgBox = document.getElementsByClassName('slider');
                var oImgBoxFater = document.getElementsByClassName('slider-box');
                var oImgBox=oImgBox[0];
                this.timer2 = setInterval(function() {
                    if(oImgBox.offsetLeft > 0){
                        oImgBox.style.left = -oImgBox.offsetWidth/2 +"px";
                    }
                },10);
                var iii=1;
                this.timer = setInterval(function(){
                    let temp=oImgBox.offsetLeft;

                    oImgBox.style.left = temp + 1 +'px';
                },10);
            }

        },
        created(){

        },
    }
</script>
<style scoped>
    .box{
        height: 100%;
        position: relative;
        overflow: hidden;
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
    Header{
        z-index: 2;
        position: fixed;
    }
    .clear-fix::after{
        content: '';
        clear: both;
        display: block;
    }
    .s-container{
        width: 100%;
        position: relative;
        height: 100%;
        display:flex;
        align-items:center;
        justify-content: center;
    }
    .slider-box{
        width: 1200px;
        height: 300px;
        padding: 30px 5px;
        box-shadow:0 0 30px rgba(131, 129, 255, 0.82);
        box-sizing: border-box;
        border-radius: 15px;
        overflow: hidden;
        position: relative;
    }
    .slider{
        width: 2460px;
        /*overflow: hidden;*/
        position: absolute;
        left:-1230px;
        /*transition: all 0.1s linear;*/
        /*z-index: -1;*/
    }
    .slider li{
        width: 400px;
        float: left;
        position: relative;
        margin-right: 10px;

    }
    .slider li img{
        width: 400px;
        height: 240px;
    }
    .slider-item-name{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
        color: #ffffff;
        background: rgba(0,0,0,.5);
        font-size: 20px;
        height: 40px;
        display: inline-block;
        padding-top: 5px;
    }
    .slider-item-hover{
        color: #ffffff;
        position: absolute;
        bottom: -70px;
        left: 0;
        background: #f00;
        width: 100%;
        text-align: center;
        font-size: 16px;
        padding: 6px 0;
        /*display: none;*/
        cursor: pointer;
        transition: all 0.5s ease-in-out;
    }
    .slider li:hover .slider-item-hover{
        display: block;
        bottom: 40px;

    }


</style>
