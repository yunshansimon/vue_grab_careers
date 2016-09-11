<template>
    <div>
        <top-banner>
            <div slot="front" class="title_panel">
                <div>CONTACT US</div>
                <div class="bottom_line"></div>
            </div>
            <img slot="back" class="background" src="https://grab.careers/wp-content/themes/grabs-v1.0.1/assets/img/contact.png"/>
        </top-banner>
        <div class="detail">
            <div class="content">
                <div class="p1">
                    Whether you have a question, want to pitch a proposal or are simply looking to bounce ideas off creative minds, we’re always happy to help.
                </div>
                <div class="send_email">
                    <a href="mailto:careers@grabtaxi.com">Drop Us A Note!</a>
                </div>
            </div>
        </div>
        <bottom-banner></bottom-banner>
    </div>
</template>
<style scoped>
    .title_panel{
        position: relative;
        height: 100%;
        width: 100%;
        color: #FFF;
        display: flex;
        flex-flow: column;
        justify-content: center;
        text-align: center;
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 500;
        font-family: proxima_novaextrabold,Arial,'Helvetica Neue',Helvetica,sans-serif;
        -webkit-font-smoothing: unset;
    }

    .title_panel .bottom_line{
        width: 2.08rem;
        margin: 2.08rem auto;
        border-bottom: solid #009d3b 0.125rem;
    }

    .detail{
        padding: 3.34rem 0;
        text-align: center;

    }

    .detail .content .p1{
        font-family: proxima_novasemibold,Arial,'Helvetica Neue',Helvetica,sans-serif;
        color: #44494c;
        font-size: 1.25rem;
        width: 70%;
        margin: 0 auto;
        font-weight: 500;
        line-height: 1.1;
        padding:0 2rem;
    }

    .detail .content .send_email{
        padding: 0.417rem 0.833rem;
        margin: 0.833rem 0;
        background-color: #009d3b;
        font-size: 0.75rem;
        line-height: 1.3333333;
        border-radius: 0.25rem;
        color:#FFF;
        display: inline-block;
        font-weight: 400;
    }
</style>
<script>
    import TopBanner from './TopBanner.vue'
    import BottomBanner from './BottomBanner.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            TopBanner,BottomBanner
        }
    }
</script>
