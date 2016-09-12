<template>
  <div id="app">
    <router-view
            keep-alive
            transition
            transition-mode="out-in"
            class="view">
    </router-view>
    <div class="modal_base" v-show="onLoading">
      <div class="modal_body">
        <div class="modal_title">
          On loading...
        </div>
        <div class="img">
          <img class="onloading" src="./assets/loading.png" />
        </div>
      </div>
    </div>
    <div class="modal_base" v-show="show">
      <div class="modal_body">
        <div class="modal_title">
          {{msg}}
        </div>
        <div class="img">
          <img src="./assets/succ@2x.png" v-show="type"/>
          <img src="./assets/error@2x.png" v-show="!type"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as Events from './common/config/events.json'
export default {
  data() {
    return {
      msg      : '',
      show     : false,
      type     : true,
      onLoading: false
    }
  },
  methods:{
    show_tips:function(text, timeout=1000, type=true, callback=false){
      this.msg=text
      this.show=true
      this.type=type
      let self=this
      this.$nextTick(()=>{
        setTimeout(function () {
          self.show=false;
          if(callback) callback()
        }, timeout)
      })
    }
  },
  events:{
    [Events.ShowOnLoading](show=false){
      this.onLoading=show
    },
    [Events.ShowError](msg){
      if(typeof msg==='object'){
        this.show_tips(msg.err,1000,false);
      }else {
        this.show_tips(msg,1000,false);
      }
    },
    [Events.ShowMsg](msg){
      this.show_tips(msg,1000,true);
    }
  }
}
</script>

<style>
  @import url("https://grab.careers/wp-content/themes/grabs-v1.0.1/assets/css/font.less");
  @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
  @import './assets/swiper-3.3.1.min.css';

  * {
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: rgba(0,0,0,0); /* make transparent link selection, adjust last value opacity 0 to 1.0 */
  }
  html{ font-size: 10px;}
  @media (min-width: 360px){html {font-size: 11px;}}
  @media (min-width: 375px){html {font-size: 11.7px; }}
  @media (min-width: 412px){html {font-size: 12.8px; }}
  @media (min-width: 414px){html {font-size: 12.9px; }}
  @media (min-width: 600px){html {font-size: 18px;}}
  @media (min-width: 768px){html {font-size: 24px;}}


  body{
    position: relative;
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }

  #app {
    font-family: proxima_novasemibold,Arial,'Helvetica Neue',Helvetica,sans-serif;
    overflow: scroll;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .content{
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    -webkit-font-smoothing: antialiased;
  }

  @media (min-width: 768px){
    .content {
      width: 31.25rem;
    }
  }

  @media (min-width: 992px){
    .content {
      width: 40.5rem;
    }
  }

  @media (min-width: 1200px){
    .content {
      width: 48.75rem;
    }
  }

  #app a {
    text-decoration: none;
    color:inherit;
  }

  .fade-transition {
    transition: opacity .3s ease;
  }

  .fade-enter, .fade-leave {
    opacity: 0;
  }

  .modal_base {
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    z-index: 5000;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .modal_base .modal_body {
    position: relative;
    top:10rem;
    height: 6rem;
    width: 10rem;
    padding: 2rem 0;
    border: solid #9da0a4 0.01rem;
    border-radius: 0.75rem;
    background-color:#000;
    -webkit-animation:fadeIn 0.5s .1s ease both;
    -moz-animation:fadeIn 0.5s .1s ease both;
  }

  .modal_base .modal_body .modal_title {
    padding-top: 1rem;
    padding-bottom: 0.6rem;
  }

  .modal_base .modal_body .img img {
    width: 2rem;
    height: 2rem;
  }

  .modal_base .modal_body .onloading{
    transform-origin: 50% 50%;
    animation:rotate1 3000ms infinite;
  }

  @keyframes rotate1 {
    from { transform: rotate3d(0,0,1,0deg) ; }
    50% { transform: rotate3d(0,0,1,90deg); }
    to { transform: rotate3d(0,0,1,360deg); }
  }

  .view{
    height: 100%;
    width: 100%;
  }

  .background{
    width: 100%;
    display: block;
  }
</style>
