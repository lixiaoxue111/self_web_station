<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


@media screen and (min-width: 640px){
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
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    line-height: 60px;
    color: #fff;
    font-size: 20px;
  }
  .wrap a{
    color: #fff;
  }
  .header-left {
    float: left;
  }
  .header-left>li{
    float: left;
    margin-left: 25px;
    text-align: center;
    position: relative;
  }
  .header-left li a{
    display: block;
    padding:0 8px;
  }
  .header-left li:hover{
    background: #cccccc;
  }
  .header-left li a:hover{
    color: #ff0036;
    text-decoration: underline;
  }
  .header-left li:hover .sub-menu{
    display: block;
  }
  .sub-menu{
    width: 100px ;
    padding: 10px 8px;
    position: absolute;
    left: 0;
    top: 60px;
    background: #ccc;
    display: none;
  }
  .sub-menu li{
    height: 25px;
    line-height: 25px;
    font-size: 18px;
    text-align: left;
  }
  .header-search{
    float: right;
    margin-right: 20px;
    border: 1px solid #fff;
    border-radius: 20px;
    height: 40px;
    text-align: center;
    width: 120px;
    margin-top: 13px;
    position: relative;
    transition: all .5s;
  }
  .header-search input{
    font-size: 16px;
    width: 40px;
    background: transparent;
    padding: 2px 3px 1px 3px;
    border-radius: 20px;
    border: 0;
    outline: 0;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    transition: all .5s;
  }
}
</style>
