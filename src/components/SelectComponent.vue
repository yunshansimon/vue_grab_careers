<template>
    <div>
        <div class="select">
            <input type="text" :placeholder="" :value="selected_key" contenteditable="false" disabled/>
            <div class="fa fa-caret-down down" @click="toggle_options"></div>
        </div>
        <div class="options" v-show="show_options">
            <div class="option" v-for="option in options" @click="select($key)">{{$key}}</div>
        </div>
    </div>
</template>
<style scoped>
    .select{
        height: 2.08rem;
        width: 100%;
        display: flex;
    }

    .select input{
        height: 2.08rem;
        flex-grow: 1;
        font-size: 0.625rem;
        text-indent: 0.42rem;
        font-weight: 800;
        background-color: transparent;
        border: none;
    }

    .select input:focus{
        outline: none;
    }



    .select .down{
        padding: 0.2rem;
        line-height: 2.08rem;
    }

    .options{
        font-size: 0.59rem;
        position: absolute;
        margin: 0.3rem;
        padding: 0.25rem 0.83rem;
        line-height: 1.08rem;
        background-color: #fff;
        border:1px solid rgba(0,0,0,.15);
        border-radius: 0.1rem;
        box-shadow:0 6px 12px rgba(0,0,0,.175);
        -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
        z-index: 200;
    }
</style>
<script>
    let Events={
        "selected":"selected"
    }
    export default{
        data(){
            return{
                selected_value:'',
                selected_key:'',
                show_options:false
            }
        },
        props:{
            options:{
                type:Object
            }
        },
        methods:{
            toggle_options(){
                this.show_options=!this.show_options
            },
            select(key){
                this.selected_key=key
                this.selected_value=this.options[key]
                this.$dispatch(Events.selected,this.selected_value)
                this.toggle_options()
            }
        },
        activate(done){
            let self=this
            self.selected_key=Object.getOwnPropertyNames(self.options)[0]
            self.selected_value=self.options[self.selected_key]
            done()
        }
    }


</script>
