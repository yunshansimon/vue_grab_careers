<template>
    <div>
        <top-banner>
            <div slot="front" class="title_panel">
                <div>MEET OUR ENGINEERING TEAM</div>
                <div class="bottom_line"></div>
            </div>
            <img slot="back" class="background" src="http://14581-presscdn-0-73.pagely.netdna-cdn.com/wp-content/themes/grabs-v1.0.1/assets/img/banner_meet_our.jpg"/>
        </top-banner>
        <div class="green_line">
            You've seen (and hopefully) used our app. Now meet the people behind the scenes!
        </div>
        <div class="badge_wall">
            <div class="content">
                <div class="title">WE HAVE GREAT BENEFITS</div>
                <div class="badge_list">
                    <div class="badge">
                        <div class="badge_img">
                            <img src="http://14581-presscdn-0-73.pagely.netdna-cdn.com/wp-content/themes/grabs-v1.0.1/assets/img/perk1.png"/>
                        </div>
                        <div class="badge_title">
                            Workspace Setup
                        </div>
                        <div class="badge_detail">
                            We provide laptops, external monitors and ergonomic keyboards for the ideal rig you've always wanted to produce your best work.
                        </div>
                    </div>
                    <div class="badge">
                        <div class="badge_img">
                            <img src="http://14581-presscdn-0-73.pagely.netdna-cdn.com/wp-content/themes/grabs-v1.0.1/assets/img/perk2.png"/>
                        </div>
                        <div class="badge_title">
                            Level Up
                        </div>
                        <div class="badge_detail">
                            Opportunities for expenses-paid trips to overseas conferences & workshops, plus book allowances and visits to tech events.
                        </div>
                    </div>
                    <div class="badge">
                        <div class="badge_img">
                            <img src="http://14581-presscdn-0-73.pagely.netdna-cdn.com/wp-content/themes/grabs-v1.0.1/assets/img/perk3.png"/>
                        </div>
                        <div class="badge_title">
                            Performance Bonus & Incentives
                        </div>
                        <div class="badge_detail">
                            On top of competitive salaries, our performance-driven culture will also earn you regular bonuses and referral rewards.
                        </div>
                    </div>
                    <div class="badge">
                        <div class="badge_img">
                            <img src="http://14581-presscdn-0-73.pagely.netdna-cdn.com/wp-content/themes/grabs-v1.0.1/assets/img/perk4.png"/>
                        </div>
                        <div class="badge_title">
                            Free Grab Rides
                        </div>
                        <div class="badge_detail">
                            Is there a better way to dogfood your own product than to be paid to do so? Plus, you get to talk to the drivers and find out all about the politics and economics of the country!
                        </div>
                    </div>
                    <div class="badge">
                        <div class="badge_img">
                            <img src="http://14581-presscdn-0-73.pagely.netdna-cdn.com/wp-content/themes/grabs-v1.0.1/assets/img/perk5.png"/>
                        </div>
                        <div class="badge_title">
                            Free Food
                        </div>
                        <div class="badge_detail">
                            There's a fully-stocked pantry that includes refreshments, coffee, beers, snacks and other bad things for you!
                        </div>
                    </div>
                    <div class="badge">
                        <div class="badge_img">
                            <img src="http://14581-presscdn-0-73.pagely.netdna-cdn.com/wp-content/themes/grabs-v1.0.1/assets/img/perk6.png"/>
                        </div>
                        <div class="badge_title">
                            Happy Hour Fridays
                        </div>
                        <div class="badge_detail">
                            Kickstart your weekend break and join the team for a laughter-filled evening of karaoke, LAN gaming, board games and poker sessions. Accompanied with food and drinks, of course.
                        </div>
                    </div>
                </div>
            </div>



        </div>
        <div class="slogon_wall">
            <div class="title">WORKING WITH GREAT TECH</div>
            <div class="article">
                <div class="p1">
                    <p>We care a great deal about code quality. We often go back and improve core parts of the codebase to make it better or more lean. We can do this because of great test coverage which will immediately sound the alarm when something goes wrong.</p>
                    <p>We ship on quality instead of on time. When a feature is ready we deploy it immediately to everyone or use an internal system to roll it out to a certain percentage of customers. Various teams deploy new code many times throughout the day.</p>
                    <p>Our core services tech stack consists of Golang, Ruby, Redis, MySQL, Redshift and Postgres data stores as well as HAProxy load balancers. They all run on the AWS cloud infrastructure with auto-scaling abilities.</p>
                </div>
                <div class="p1">
                    <p>Our mobile app platform coverage include native iOS and Android.</p>
                    <p>Our web portals are built on Rails, React and Redux.</p>
                    <p>We use Git and we adhere to the basic Continuous Delivery tenets utilising a host of tools to support our release pipeline and code quality. These include Travis CI, New Relic, Phabricator, Jenkins, Coveralls, and many more.</p>
                </div>
            </div>

        </div>
        <div class="avatar_wall">
            <div class="avatar" style="background-image:url(http://grabtaxi-public-sites.s3-ap-southeast-1.amazonaws.com/aaron.jpg)">
                <div class="info">
                    <div class="name">Aaron</div>
                    <div class="team">Head of Product Strategy</div>
                    <a href="https://www.facebook.com/gill.aaron"><div class="social fa fa-facebook"></div></a>
                </div>
            </div>
            <div class="avatar" style="background-image:url(http://grabtaxi-public-sites.s3-ap-southeast-1.amazonaws.com/ditesh.png)">
                <div class="info">
                    <div class="name">Ditesh</div>
                    <div class="team">Herder of Cats</div>
                    <a href="@ditesh"><div class="social fa fa-twitter"></div></a>
                </div>
            </div>
            <div class="avatar" style="background-image:url(http://grabtaxi-public-sites.s3-ap-southeast-1.amazonaws.com/edwin.jpg)">
                <div class="info">
                    <div class="name">Edwin</div>
                    <div class="team">Lead Data Engineer</div>
                    <a href="https://www.facebook.com/elhh82"><div class="social fa fa-twitter"></div></a>
                </div>
            </div>
            <div class="avatar" style="background-image:url(http://grabtaxi-public-sites.s3-ap-southeast-1.amazonaws.com/phoebe.jpg)">
                <div class="info">
                    <div class="name">Phoebe</div>
                    <div class="team">Analytics</div>
                    <a href="https://www.facebook.com/phbkim"><div class="social fa fa-facebook"></div></a>
                </div>
            </div>
            <div class="avatar" style="background-image:url(http://grabtaxi-public-sites.s3-ap-southeast-1.amazonaws.com/fads.png)">
                <div class="info">
                    <div class="name">Fadrizul</div>
                    <div class="team">Head of Dispatcher Team</div>
                    <a href="https://twitter.com/fadrizul"><div class="social fa fa-twitter"></div></a>
                </div>
            </div>
            <div class="avatar" style="background-image:url(http://grabtaxi-public-sites.s3-ap-southeast-1.amazonaws.com/corey.jpeg)">
                <div class="info">
                    <div class="name">Corey</div>
                    <div class="team">Scott</div>

                </div>
            </div>
            <div class="avatar" style="background-image:url(http://grabtaxi-public-sites.s3-ap-southeast-1.amazonaws.com/terry.png)">
                <div class="info">
                    <div class="name">Terry</div>
                    <div class="team">NodeJS Engineer</div>
                    <a href="https://www.facebook.com/terryxlife"><div class="social fa fa-facebook"></div></a>
                </div>
            </div>
            <div class="avatar" style="background-image:url(http://grabtaxi-public-sites.s3-ap-southeast-1.amazonaws.com/suren.jpg)">
                <div class="info">
                    <div class="name">Suren</div>
                    <div class="team">Product Manager</div>
                    <a href="https://www.facebook.com/surenharis"><div class="social fa fa-facebook"></div></a>
                </div>
            </div>
            <div class="avatar" style="background-image:url(http://grabtaxi-public-sites.s3-ap-southeast-1.amazonaws.com/red.jpg)">
                <div class="info">
                    <div class="name">Frederick</div>
                    <div class="team">Regional Business Analyst</div>
                    <a href="https://www.facebook.com/frederick.keong"><div class="social fa fa-facebook"></div></a>
                </div>
            </div>
            <div class="avatar" style="background-image:url(http://grabtaxi-public-sites.s3-ap-southeast-1.amazonaws.com/26390_1391221504505_1351163254_31062951_2419271_n.jpg)">
                <div class="info">
                    <div class="name">Sabri</div>
                    <div class="team">UX Engineer</div>
                    <a href="www.twitter.com/sabriibrahim"><div class="social fa fa-twitter"></div></a>
                </div>
            </div>
            <div class="avatar" style="background-image:url(http://grabtaxi-public-sites.s3-ap-southeast-1.amazonaws.com/270508_1901041280858_58277_n.jpg)">
                <div class="info">
                    <div class="name">Cayter Goh</div>
                    <div class="team">Lead Engineer</div>
                </div>
            </div>
            <div class="avatar" style="background-image:url(http://grabtaxi-public-sites.s3-ap-southeast-1.amazonaws.com/10847973_10152532652033354_3815385766674870430_n-1.jpg)">
                <div class="info">
                    <div class="name">Yang Shun Tay</div>
                    <div class="team">Front End Engineer</div>
                </div>
            </div>
            <div class="avatar" style="background-image:url(http://grabtaxi-public-sites.s3-ap-southeast-1.amazonaws.com/1395377_10153402194045884_5175221805702659695_n.jpg)">
                <div class="info">
                    <div class="name">Ang Aik Siang</div>
                    <div class="team">Software Engineer</div>
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

    .green_line{
        background-color: #009d3b;
        padding: 2rem 0;
        text-align: center;
        font-weight: 400;
        color: #333;
        font-size: 0.67rem;
        line-height: 0.833rem;
    }

    .badge_wall{
        background-color: #eaeeef;
        padding: 0.5rem 0;
    }

    .badge_wall .title{
        font-weight: 500;
        font-family: proxima_novaextrabold,Arial,'Helvetica Neue',Helvetica,sans-serif;
        text-align: center;
        margin: 2rem 0;
        font-size: 1.33rem;
        line-height: 1.5rem;
        color: #009d3b;
    }

    .badge_wall .badge_list{
        text-align: center;
        vertical-align: top;
    }

    .badge_wall .badge_list .badge{
        vertical-align: top;
        display: inline-block;
        width: calc(33% - 1.3rem);
        padding: 0.625rem;
        position: relative;
    }

    .badge .badge_img{
        width: auto;
        position: relative;
        margin: 0 auto;
    }

    .badge .badge_img img{
        display: inline-block;
        max-width: 10rem;
        border-radius: 50%;
    }

    .badge .badge_title{
        margin: 1rem;
        font-weight: 300;
        font-size: 0.75rem;
        color: #282825;
        font-family: proxima_novaextrabold,Arial,'Helvetica Neue',Helvetica,sans-serif;
    }

    .badge .badge_detail{
        font-size: 0.583rem;
        line-height: 0.82rem;
        font-weight: 400;
        color: #333;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }

    .slogon_wall .title{
        text-align: center;
        margin: 2.2rem;
        color: #009d3b;
        font-weight: 500;
        font-family: proxima_novaextrabold,Arial,'Helvetica Neue',Helvetica,sans-serif;
        font-size: 1.333rem;
    }

    .slogon_wall .article{
        margin: 0.5rem auto;
        width: 60%;
        display: flex;
        font-size: 0.667rem;
        line-height: 1rem;
        color: #44494c;
        justify-content: center;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }

    .slogon_wall .p1{
        flex-basis: 30%;
        flex-grow: 1;
        margin: 0 0.5rem;
    }

    .slogon_wall .p1 p{
        margin-bottom: 0.5rem;
    }

    .avatar_wall{
        background-color: #eaeeef;
        display: flex;
        justify-content: center;
        flex-wrap:wrap;
        padding: 1rem;
    }

    .avatar_wall .avatar{
        height: 9.17rem;
        width: 9.17rem;
        border-radius: 50%;
        background-size: cover;
        margin: 0.5rem;
        box-shadow: inset 0 0 0 0 rgba(130,200,66,.4),inset 0 0 0 16px rgba(255,255,255,.6),0 1px 2px rgba(0,0,0,.1);
        transition: 0.4s all ease-in-out;
    }

    .avatar_wall .avatar:hover{
        box-shadow: inset 0 0 0 110px rgba(130,200,66,.4),inset 0 0 0 16px rgba(255,255,255,.8),0 1px 2px rgba(0,0,0,.1);
    }

    .avatar_wall .avatar .info{
        color: #FFF;
        height: 100%;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 0.5rem;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        opacity: 0;
        transition: all .4s ease-in-out;
        transform: scale(0);
    }

    .avatar_wall .avatar:hover .info{
        opacity: 1;
        transform: scale(1);
    }

    .avatar_wall .avatar .info .name{
        font-family: 'Open Sans',Arial,sans-serif;
        font-size: 0.917rem;
        margin-bottom: 0.8rem;
        text-shadow: 0 0 1px #fff,0 1px 2px rgba(0,0,0,.3);
        font-weight: 500;
        letter-spacing: 0.083rem;
        text-transform: uppercase;
        padding-top: 0.5rem;
    }



    .avatar_wall .avatar .info .team{
        border-top: 1px solid rgba(255,255,255,.5);
        padding: 0.6rem 0;
        width: 80%;
        margin: 0 auto;
    }

    .avatar_wall .avatar .info .social{
        font-size: 0.833rem;
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
