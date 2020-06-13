<template>
    <div>
        <tabDate :dayTime="indexArr.week" v-if="indexArr.week.length > 0" @changeDate="changeDate(arguments)"></tabDate>

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
        <navFooter></navFooter>
    </div>
</template>

<script>

    import tabDate from "../../components/tabDate/tabDate";
    import {tkIndex} from '../../assets/js/ApiData'

    export default {
        name: "groupIndex",   //团课
        data() {
            return {
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

            // 选中 day
            changeDate(val){
                let dayVal = val[0];
                this.tkArr.day = dayVal ;
                this.getTkIndex();
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
