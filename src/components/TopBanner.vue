<template>
    <div>
        <div class="top">
            <div class="content">
                <div class="banner">
                    <div class="logo">
                        <a href="https://grab.careers"><img src="https://static.grabtaxi.com/images/grab.svg"/></a>
                    </div>
                    <div class="navigator_pad">
                        <a v-link="{path:'/home'}">
                            <div class="button">
                                Home
                            </div>
                        </a>
                        <a v-link="{path:'/jobs'}">
                            <div class="button">
                                Jobs
                            </div>
                        </a>
                        <a v-link="{path:'/teams'}">
                            <div class="button">
                                Meet Our Engineering Team
                            </div>
                        </a>
                        <a v-link="{path:'/contact'}">
                            <div class="button">
                                Contact Us
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="filter_video">
            <div class="background">
                <slot name="back"></slot>
            </div>
            <div class="cover"></div>
            <div class="front">
              <slot name="front"></slot>
            </div>
        </div>
    </div>


</template>
<style scoped>

    .banner{
        position: relative;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
    }

    .banner .logo img{
        height: 1.5rem;
    }

    .banner .navigator_pad {
        font-size: 0.67rem;
        display: flex;
        justify-content: flex-end;
        color:#fff;
    }

    .banner .navigator_pad .button{
        padding: 0.2rem 0.4rem;
        border-bottom:0.1rem solid rgba(0,0,0,0);
        font-weight:400;
        -webkit-font-smoothing: antialiased;
    }

    .banner .navigator_pad .button:hover{
        border-bottom:0.1rem solid #009d3b;
    }

    .top{
        position: absolute;
        width: 100%;
    }

    .filter_video{
        position: relative;
        width: 100%;
    }

    .filter_video .cover{
      top:0;
      position: absolute;
      height: 100%;
      width: 100%;
      text-align: left;
      background: rgba(0,0,0,0.7);
      opacity: .8;
    }

    .filter_video .front{
      top:0;
      position: absolute;
      height: 100%;
      width: 100%;
      text-align: left;
      background-color: transparent;
    }

    .background {
        position: relative;
        width: 100%;
        z-index: -100;
    }

    .background img{
        width: 100%;
        display: block;
    }

    .background video{
        width: 100%;
        display: block;
    }

</style>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
