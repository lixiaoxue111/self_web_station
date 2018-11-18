<template>
    <div class="container">
        <div class="wrap">
            <div class="header clear-fix">
                <div class="header-left">
                    <span class="name">李小雪&&张闯</span>
                    <span>双人博客</span>
                </div>
                <ul class="header-right clear-fix">
                    <li class="header-active" @click="active(1)">
                        <router-link to="/">
                            首页
                            <div></div>
                        </router-link>
                    </li>
                    <li @click="active(2)" class="">
                        <router-link to="/">
                            我的简历
                            <div></div>
                        </router-link>
                    </li>
                    <li @click="active(3)" class="">
                        <router-link to="/">
                            作品集
                            <div></div>
                        </router-link>
                    </li>
                    <li @click="active(4)" class="">
                        <router-link to="/">
                            个人博客
                            <div></div>
                        </router-link>
                    </li>
                </ul>
            </div>

        </div>

    </div>
</template>
<script>
    //import show from '@/components/show.vue';
    export default {
        data(){
            return{
                // forMo:1
            }
        },
        created(){


        },
        mounted () {
            // console.log(this.forMo++);
            // if(this.forMo!=2){

            // }else {
            //     console.log('aaaaaaa');
            //     var aLi=document.getElementsByClassName('header-right');
            //     var arr=aLi[0].childNodes[0].classList.add("header-active");
            // }
            // var aLi=document.getElementsByClassName('header-right');
            // // var arr=aLi[0].childNodes[0].classList.add("header-active");
            // if(aLi[0].childNodes[1].class=='header-right'||aLi[0].childNodes[2].class=='header-right'||aLi[0].childNodes[3].class=='header-right'){
            //
            // }
/*            var aLi=document.getElementsByClassName('header-right li');
            function active(index) {
                index.classList.add("header-active")
            }*/
            // var aLi=document.getElementsByClassName('header-right li');
            // aLi.onclick=function () {
            //     // console.log(event.target);
            //     console.log('jjjjj')
            // }
        },
        methods:{
             active(index) {
                 
             //index.classList.add("header-active")
                 var aLi=document.getElementsByClassName('header-right');
                 var arr=aLi[0].childNodes;
                 arr[0].childNodes[0].classList.remove('header-active');
                 
                 for(var i=0;i<4;i++){
                     arr[i].classList.remove('header-active');


                 }
                 setTimeout(function () {
                    //  arr[0].childNodes[0].classList.remove('header-active');
                     aLi[0].childNodes[index-1].classList.add("header-active");

                 },100);
        }
        },
        components:{

        }
    }
</script>

<style scoped>

    .clear-fix::after{
        content: '';
        display: block;
        clear: both;
    }
    .container{
        width: 100%;
        height: 60px;
        background: rgba(23,106,178,.5);
    }
    .wrap{
        position: relative;
        width: 1200px;
        margin: 0 auto;
        height: 60px;
        /*line-height: 60px;*/
    }
    .header{
        position: absolute;
        width: 1200px;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
        font-size: 12px;
    }
    .header a{
        color: #fff;
    }
    .header-left{
        float: left;
        text-align: center;
    }
    .header span{
        padding: 3px 15px;
        display: block;
    }
    .header-left .name{
        border-bottom: 1px solid #ffffff;
    }
    .header-right {
        float: right;
        margin-top: 16px;
    }
    .header-right>li{
        float: left;
        margin-left: 25px;
        text-align: center;
        position: relative;
    }
    .header-right li a{
        display: block;
        padding:0 8px;
    }
    .header-right li a div{
        height: 3px;
        background: #ff0000;
        margin-top: 5px;
        position: absolute;
        left: 0;
        width: 0;
    }
    .header-right li.header-active a div{
        width: 100%;
    }
    .header-right li a:hover>div{
        display: inline-block;
        width: 100%;
        background: #f00;
        -webkit-transition: width .2s linear;
        -moz-transition: width .2s linear;
        -ms-transition: width .2s linear;
        -o-transition: width .2s linear;
        transition: width .2s linear;
    }

</style>