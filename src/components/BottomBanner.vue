<template>
    <div class="banner">
        <div class="content">
            <div class="copyright">
                Copyright © 2016 Grab. All rights reserved.
            </div>
            <div class="navigator_pad">
                <a href="http://www.facebook.com/grab">
                    <div class="button fa fa-facebook">
                    </div>
                </a>
                <a href="http://www.twitter.com/grabsg">
                    <div class="button fa fa-twitter">
                    </div>
                </a>
                <a href="http://www.instagram.com/grab_sg">
                    <div class="button fa fa-instagram">
                    </div>
                </a>
                <a href="http://www.linkedin.com/company/5382086">
                    <div class="button fa fa-linkedin">
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>

    .banner{
        position: relative;
        z-index: 100;
        background-color: #151515;
        color: #6f7173;
        -webkit-font-smoothing: antialiased;
    }

    .banner .navigator_pad {
        font-size: 0.67rem;
        display: flex;
        justify-content: flex-end;
    }

    .content{
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
    }

    .content .copyright{
        font-size: 0.583rem;
        font-weight: 400;
    }

    .content .button{
        font:normal normal normal 0.59rem/1 FontAwesome;
        font-size: 0.75rem;
        text-rendering:auto;
        padding: 0 0.42rem;
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
