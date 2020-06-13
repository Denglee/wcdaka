<template>
    <div class="main-width92">
        <van-swipe class="index-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for = "(item,index) in indexArr.image" :key = 'index'>
                <van-image
                    class="img-banner"
                    fit="cover"
                    :src="item"/>
            </van-swipe-item>
        </van-swipe>

        <!--四大导航-->
        <van-row type="flex" justify="space-between" :gutter="10">
            <van-col span="8" v-for="(item, index) in routers" :key="index" class="index-router">
                <router-link :to="item.url">
                    <img :src="item.icon" alt="">
                    <div class="routerName">{{item.name}}</div>
                </router-link>
            </van-col>
        </van-row>

        <tabDate :dayTime="indexArr.week" v-if="indexArr.week.length > 0" @changeDate="changeDate(arguments)"></tabDate>

        <!--推荐课程-->
        <section>
            <van-row type="flex" justify="space-between" class="index-title">
                <h4>推荐课程</h4>
                <div>更多课程</div>
            </van-row>
            <van-row type="flex" :gutter="10">
                <div class="no-data" v-if="indexArr.data.length == 0">
                    <van-empty description="暂无数据" />
                </div>
                <van-col span="8" v-for="(item, index) in indexArr.data" :key="index" class="index-course" v-else
                @click="goCourseDetails(item)">
                    <van-image :src="item.courseimage" fit="cover"></van-image>
                    <div class="routerName">{{item.course_name}}</div>
                </van-col>

            </van-row>
        </section>

        <navFooter></navFooter>
    </div>
</template>

<script>
    import {tkIndex} from '../../assets/js/ApiData'
    import tabDate from "../../components/tabDate/tabDate";

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
                        icon: require('@/assets/images/index/index_course.png'),
                        code: '1'
                    },
                    {
                        name: '私教',
                        url: '/trainerIndex',
                        icon: require('@/assets/images/index/index_coach.png'),
                        code: '2'
                    },
                    {
                        name: '训练营',
                        url: '/campIndex',
                        icon: require('@/assets/images/index/index_training.png'),
                        code: '3'
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

            // 去课程详情页
            goCourseDetails(val){
                console.log(val);
                let day = this.tkArr.day;
                console.log(day);
                console.log(val);

                // return false
                this.$router.push({
                    name:'groupDetails',
                    params:{
                        day:day,
                        groupDetailsId:val.course_id,
                    }
                })
            },
        },
        created() {
            this.getTkIndex();

        },
        components:{
            tabDate,
        }
    }
</script>
