<template>
    <div>
        <top-banner>
            <div slot="front" class="title_panel">
                <div>JOBS</div>
                <div class="bottom_line"></div>
            </div>
            <img slot="back" class="background" src="https://grab.careers/wp-content/themes/grabs-v1.0.1/assets/img/contact.png"/>
        </top-banner>

        <div class="search">
            <div class="content panel">
                <div class="search_job">
                    <input type="text" placeholder="Search jobs..." v-model="filter.title" @keyup.prevent.stop="inter_search"/>
                </div>
                <div class="search_department">
                    <select-component :options="departments" @selected="setDepartmentFilter"></select-component>
                </div>
                <div class="search_region">
                    <select-component :options="regions" @selected="setRegionFilter"></select-component>
                </div>
                <div class="search_button" @click="search">Search</div>
            </div>
        </div>
        <div class="content job_list">
            <div class="job_row" v-for="job in job_list | filterBy filter.title in 'text' | filterBy filter.department in 'categories.team' | filterBy filter.region in 'categories.location'" track-by="id">
                <div class="title">{{job.text}}</div>
                <div class="info_panel">
                    <div class="commitment">
                        {{job.categories.commitment}}
                    </div>
                    <div class="location">
                        <span class="fa fa-map-marker"></span>
                        {{job.categories.location}}
                    </div>
                    <a href="{{job.hostedUrl}}">
                        <div class="more_button">
                            View More
                        </div>
                    </a>

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

    .search{
        padding: 1.25rem;
        background-color: #009d3b;
        text-align: left;
        color:#333;
        z-index: 200;
    }

    .search .panel{
        display: flex;
        justify-content: space-between;
        overflow: visible;
    }

    .search .panel .search_job{
        flex-grow: 1.5;
        margin: 0 0.625rem;
        background-color: #FFF;
        color: #333;
    }

    .search .panel .search_job input{
        height: 2.08rem;
        width: 100%;
        font-size: 0.625rem;
        text-indent: 0.42rem;
        font-weight: 800;
        background-color: transparent;
        border: none;
    }

    .search .panel .search_job input:focus{
        outline:none;
    }

    .search .panel .search_department{
        flex-grow: 1;
        margin: 0 0.625rem;
        background-color: #FFF;
        color: #333;
    }



    .search .panel .search_region{
        flex-grow: 1;
        margin: 0 0.625rem;
        background-color: #FFF;
        color: #333;
    }

    .search .panel .search_button{
        font-size: 0.625rem;
        font-weight: 600;
        line-height: 2.08rem;
        min-width: 4rem;
        background-color: #363a45;
        color: #FFF;
        border: solid 0.125rem #363a45;
        text-align: center;
    }

    .search .panel .search_button:hover{
        background-color: #009d3b;
        color:#363a45;
    }

    .job_list .job_row{
        display: flex;
        padding: 0.21rem 0.833rem;
        justify-content: space-between;
        line-height: 1.8rem;
    }

    .job_list .job_row:nth-child(odd){
        background-color: #eaeeef;
    }

    .job_list .job_row:hover{
        background-color: #44494c;
        color:#FFF;
    }

    .job_list .job_row .title{
        font-size: 0.59rem;
        font-family: proxima_nova_rgbold,Arial,'Helvetica Neue',Helvetica,sans-serif;
        font-weight: 500;
    }

    .job_list .job_row .info_panel{
        display: flex;
        font-size:0.59rem;
        font-weight: 400;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }

    .job_list .job_row .info_panel div{
        margin: 0 0.2rem;
    }

    .job_list .job_row .info_panel .commitment{
        width: 2.75rem;
    }

    .job_list .job_row .info_panel .location{
        width: 3.75rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .job_list .job_row .info_panel .more_button{
        width: 3.75rem;
        border-radius: 0.2rem;
        background-color: #009d3b;
        color:#FFF;
        text-align: center;
    }

    .job_list .job_row .info_panel .more_button:hover{
        background-color: #363a45;
    }

</style>
<script>
    import TopBanner from './TopBanner.vue'
    import BottomBanner from './BottomBanner.vue'
    import * as Events from '../common/config/events.json'
    import * as Urls from '../common/config/urls.json'
    import * as Regions from '../common/config/regions.json'
    import * as Departments from '../common/config/departments.json'
    import SelectComponent from './SelectComponent.vue'
    import Ajax from '../common/lib/AjaxForGrab'

    export default{
        data(){
            return{
                filter:{
                    title:'',
                    department:'',
                    region:''
                },
                job_list:[],
                departments:Departments,
                regions:Regions,
            }
        },
        components:{
            TopBanner,BottomBanner,SelectComponent
        },
        route:{
            data({next}){
                this.$dispatch(Events.ShowOnLoading,true)
                let self=this
                Ajax.get(Urls.search_job,{limit: 1000, mode: 'json'}).then((res)=>{
                    self.job_list=res
                    self.$dispatch(Events.ShowOnLoading)
                    next()
                },(err)=>{
                    self.$dispatch(Events.ShowOnLoading)
                    self.$dispatch(Events.ShowError,err)
                    next()
                })
            }
        },
        methods:{
            search(){
                this.$dispatch(Events.ShowOnLoading,true)
                let self=this
                Ajax.get(Urls.search_job,{limit: 1000, mode: 'json'}).then((res)=>{
                    self.job_list=res
                    self.$dispatch(Events.ShowOnLoading)
                    next()
                },(err)=>{
                    self.$dispatch(Events.ShowOnLoading)
                    self.$dispatch(Events.ShowError,err)
                    next()
                })
            },
            setDepartmentFilter(value){
                this.filter.department=value
            },
            setRegionFilter(value){
                this.filter.region=value
            },
            inter_search(){

            }
        }
    }
</script>
