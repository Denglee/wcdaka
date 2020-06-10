<template>
    <div class="box">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for = "(item,index) in indexArr.image" :key = 'index'>
                <van-image
                    class="img-banner"
                    fit="contain"
                    :src="item"/>
            </van-swipe-item>
        </van-swipe>

        <!--四大导航-->
        <van-grid :gutter="10">
            <van-grid-item v-for="(item, index) in routers" :key="index" :icon="item.icon" >
                <router-link :to="item.url">
                    <img :src="item.icon" alt="">
                    {{item.name}}
                </router-link>
            </van-grid-item>
        </van-grid>

       <!-- <img :src="routers[0].icon" class="carouselImg"/>-->

        <TabDate :dayTime="indexArr.week" v-if="indexArr.week.length > 0" @changeDate="changeDate(arguments)"></TabDate>

        {{indexArr.data}}

        <navFooter></navFooter>
    </div>
</template>

<script>
    import {tkIndex} from '../../assets/js/ApiData'
    import TabDate from "../../components/tabDate/tabDate";

    // import navFooter from "../../components/navFooter/navFooter";
    export default {
        name: "index",
        data() {
            return {
                // 四大导航
                routers: [
                    {
                        name: '团课',
                        url: '/groupIndex',
                        icon: require('@/assets/images/userHeader.png'),
                        code: '1'
                    },
                    {
                        name: '私教',
                        url: '/trainerIndex',
                        icon: require('@/assets/images/userHeader.png'),
                        code: '2'
                    },
                    {
                        name: '训练营',
                        url: '/campIndex',
                        icon: require('@/assets/images/userHeader.png'),
                        code: '2'
                    },
                    // {
                    //   name: '动感单车',
                    //   url: '/pages/bike/BikeMotion/BikeMotion',
                    //   icon: '/images/icon/index_bicycle.png',
                    //   code: '3'
                    // },
                ],

                // 首页接口 参数数组
                tkArr:{
                    day:this.GLOBAL.getToday,
                    city_id:this.GLOBAL.cityId,
                    rd_session:'',
                },

                //首页数据数组
                indexArr:{
                    week:[],
                    data:[],
                    image:[],
                },

            }
        },
        methods: {
            // 选中 day
            changeDate(val){
                let dayVal = val[0];
                this.tkArr.day = dayVal ;

                this.getTkIndex();
            },

            // 获取首页数据
            getTkIndex(){
                tkIndex(this.tkArr).then(res=>{
                    console.log(res);
                    this.indexArr ={
                        week: res.week,
                        data: res.data,
                        image: res.image,
                    } ;
                }).catch(res=>{
                    console.log(res);
                })
            },
        },
        created() {
            let indexData = this.indexArr.data;
            console.log(indexData.length);
            if( indexData.length == 0){
                this.getTkIndex();
            }
        },
        components:{

            TabDate,
        }
    }
</script>
