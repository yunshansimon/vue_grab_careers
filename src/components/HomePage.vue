<template>
    <div>
        <top-banner>
            <div slot="front" class="content front">
                <div class="font_title">JOIN US IN OUR MISSION TO</div>
                <div class="font_emphasis">REVOLUTIONIZE TRANSPORTATION</div>
                <a>
                    <div class="button">JOIN US</div>
                </a>
            </div>
            <video autoplay loop slot="back" class="background">
                <source src="https://grab.careers/wp-content/themes/grabs-v1.0.1/assets/img/bg-video.webm" type="video/webm">
                <source src="https://grab.careers/wp-content/themes/grabs-v1.0.1/assets/img/bg-video.mp4" type="video/mp4">
            </video>
        </top-banner>
        <div class="container">
            <div class="swiper-container" v-el:swiper>
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="avatar">
                            <img src="https://s3-ap-southeast-1.amazonaws.com/grabtaxi-public-sites/Daniel-Chen-Mugshot.jpg" />
                        </div>
                        <div class="p1">
                            At GrabTaxi, we do what we love, and love what we do. Data-driven, passion-fueled – this is how we create cutting-edge awesomeness.
                        </div>
                        <div class="p2">
                            Daniel Chen | Business Analyst, Singapore
                        </div>
                        <div class="p3">
                            Grab since Sept 2014
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="avatar">
                            <img src="https://s3-ap-southeast-1.amazonaws.com/grabtaxi-public-sites/Ee-Ling-Mugshot.jpg" />
                        </div>
                        <div class="p1">
                            Every day presents a new problem to solve, a new challenge to crack, and a very real sense of being able to make a difference
                        </div>
                        <div class="p2">
                            Ee Ling | Head of Business Development, Singapore
                        </div>
                        <div class="p3">
                            Grab since May 2014
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="avatar">
                            <img src="https://s3-ap-southeast-1.amazonaws.com/grabtaxi-public-sites/amir-a.png" />
                        </div>
                        <div class="p1">
                            We pride ourselves in being the best by understanding the customers needs, and providing excellent support. Your Problem, is my Problem.
                        </div>
                        <div class="p2">
                            Amir Iswadi | Head of Technical Support
                        </div>
                        <div class="p3">
                            Grab since April 2014
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="avatar">
                            <img src="https://s3-ap-southeast-1.amazonaws.com/grabtaxi-public-sites/phoebe.jpg" />
                        </div>
                        <div class="p1">
                            To change the world for the better, you must first know what’s wrong with it. According to some data, your job might be more boring than mine. Now let’s fix that and the world.
                        </div>
                        <div class="p2">
                            Phoebe Kim | Regional B.I. and Analytic Assistant Lead
                        </div>
                        <div class="p3">
                            Grab since July 2013
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="avatar">
                            <img src="https://s3-ap-southeast-1.amazonaws.com/grabtaxi-public-sites/corey.jpeg" />
                        </div>
                        <div class="p1">
                            Grab gives me interesting technical challenges to work on; world class engineers to work with; while working on a product people depend on. What else could I want?
                        </div>
                        <div class="p2">
                            Corey Scott | Senior Engineer
                        </div>
                        <div class="p3">
                            Grab since September 2014
                        </div>
                    </div>

                </div>
                <div class="swiper-pagination" v-el:pagination></div>
            </div>
        </div>
        <div class="app_intro">
            <img class="background" src="https://grab.careers/wp-content/themes/grabs-v1.0.1/assets/img/bg-taxi.jpg"/>
            <div class="intro">
                <div class="content">
                    <div class="phone_hand">
                        <img src="https://grab.careers/wp-content/themes/grabs-v1.0.1/assets/img/hand_phone.png" />
                    </div>
                    <div class="detail">
                        <div class="p1">It's time to try it</div>
                        <div class="p2">Use Grab to get a taxi wherever you are, whenever you want, for a Safer and Worry-free ride. All it takes is two taps on your iPhone, Android or Blackberry.</div>
                        <div class="p3">
                            <a href="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"><img src="https://grab.careers/wp-content/themes/grabs-v1.0.1/assets/img/dload-play.png"/></a>
                            <a href="https://itunes.apple.com/en/app/grabtaxi-book-a-taxi/id647268330?mt=8"><img src="https://grab.careers/wp-content/themes/grabs-v1.0.1/assets/img/dload-ios.png"/></a>
                            <a href="http://appworld.blackberry.com/webstore/content/44169887"><img src="https://grab.careers/wp-content/themes/grabs-v1.0.1/assets/img/dload-bb.png"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <bottom-banner></bottom-banner>
    </div>
</template>
<style scoped>
    .content{
        color: #fff;
    }

    .front.content{
        display: flex;
        flex-flow: column;
        justify-content: center;
    }

    .content .font_title{
        font-family: proxima_novalight,Arial,'Helvetica Neue',Helvetica,sans-serif;
        letter-spacing: 0.25rem;
        line-height: 1.625rem;
        font-size: 1.1rem;
    }

    .content .font_emphasis{
        font-size: 2.92rem;
        line-height: 2.92rem;
        letter-spacing:0.08rem;
        font-weight: 800;
    }

    .content .button{
        margin-top: 2.92rem;
        position: relative;
        width: 5.625rem;
        text-align: center;
        border:solid 0.125rem #009d3b;
        padding: 0.625rem 1.25rem;
        font-size: 0.625rem;
        background-color: #009d3b;
        font-weight: 800;
        letter-spacing: 0.21rem;
    }

    .content .button:hover{
        background-color: transparent;
        color: #009d3b;
    }

    .container{
        padding: 1.25rem 0;
        position: relative;
        background-color: #009d3b;
        color:#FFF;
    }

    .swiper-container {
        width: 60%;
        margin: 0 auto;
        text-align: center;
    }

    .swiper-container .swiper-wrapper .avatar{
        width: 4.17rem;
        height: 4.17rem;
        margin: 2rem auto 0;
    }

    .swiper-container .swiper-slide{
        margin-bottom: 3.3rem;
    }

    .swiper-container .swiper-wrapper .avatar img{
        width: 4.17rem;
        height: 4.17rem;
        object-fit: cover;
        border-radius: 50%;
    }

    .swiper-container .swiper-wrapper .p1{
        padding: 0.625rem;
        margin-top: 0.42rem;
        font-size: 1.25rem;
        line-height: 1.375rem;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }

    .swiper-container .swiper-wrapper .p2{
        font-family: proxima_novaextrabold,Arial,'Helvetica Neue',Helvetica,sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1.065rem;
        color:#363a45;
    }

    .swiper-container .swiper-wrapper .p3{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size:0.584rem;
        font-weight: 400;
        line-height: 0.833rem;
        font-style: italic;
    }

    .swiper-container .swiper-pagination{
        position: absolute;
        bottom: 1rem;
    }

    .swiper-pagination-bullet-active{
        background-color: #FFF;
    }

    .app_intro{
        position: relative;
        width: 100%;
    }

    .app_intro .background{
        width: 100%;
        display: block;
        height: 21.96rem;
    }

    .app_intro .intro{
        position: absolute;
        width: 100%;
        bottom:0;
    }

    .app_intro .intro .content{
        display: flex;
        justify-content: space-between;
    }

    .app_intro .phone_hand {
        flex-grow: 1;
        padding-right: 2rem;
        margin: 0 3rem;
    }

    .app_intro .phone_hand img{
        display: block;
    }

    .app_intro .detail{
        -webkit-font-smoothing: antialiased;
        flex-grow: 1.3;
        padding-top: 2rem;
    }

    .app_intro .detail .p1{
        font-size: 2rem;
        font-weight: 500;
        line-height: 2.2rem;
        margin: 0.833rem 0 0.417rem 0;
        font-family: inherit;
    }

    .app_intro .detail .p2{
        font-size:0.875rem;
        margin-bottom: 1.25rem;
        font-weight: 300;
        line-height: 1.225rem;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }

    .app_intro .detail .p3{

    }

</style>
<script>
    import TopBanner from './TopBanner.vue'
    import BottomBanner from './BottomBanner.vue'
    export default{
        data(){
            return{
                myswiper:null
            }
        },
        components:{
            TopBanner,BottomBanner
        },
        route:{
            data({next}){
                this.myswiper=new Swiper(this.$els.swiper,{
                    pagination : this.$els.pagination,
                    loop:true,
                    autoplay:3000,
                    paginationClickable:true
                })
                next()
            }
        }
    }
</script>
