<template>
    <div class="main-width92 trainer-itemUl">
        <van-image  fit="cover" :src="trainerData.image[0]" class="img-banner"></van-image>
        <van-row type="flex" justify="space-between" class="index-title">
            <h4>推荐课程</h4>
            <div>更多课程</div>
        </van-row>
        <van-row gutter="10" v-for="(item,index) in trainerData.data" :key="index" class="trainer-item"
                 align='center' type="flex">
            <van-col span="5">
                <van-image :src="item.userimage" class="img-trainer"></van-image>
            </van-col>
            <van-col span="19" >
                <van-row type="flex" justfy="space-between"  align='center' gutter="10" >
                    <van-col span="18">
                        <div>{{item.name}}</div>
                        <div v-for="(itemCourse, courseIndex) in item.course" :key="courseIndex">
                            <span>{{itemCourse.name}}</span>
                        </div>
                    </van-col>
                    <van-col span="6">{{item.price}}</van-col>
                </van-row>
            </van-col>
        </van-row>

    </div>
</template>

<script>
    import {trainerIndex} from "../../assets/js/ApiData";
    export default {
        name: "trainerIndex",  //教练列表
        data() {
            return {
                trainerPar:{
                    city_id:this.GLOBAL.cityId,
                    rd_session:'',
                },

                trainerData:{},
            }
        },
        methods: {
            // 获取教练列表
            axiosTrainerIndex(){
                trainerIndex(this.trainerPar).then(res=>{
                    console.log(res);
                    this.trainerData = res;
                }).catch(res=>{
                    console.log(res);
                })
            }
        },
        created() {
            this.axiosTrainerIndex();
        },
    }
</script>
