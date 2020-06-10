<template>
    <div>
        <van-pull-refresh v-model="SetUpPull.refreshLoad" @refresh="onRefresh">
            <van-list
                    v-model="SetUpPull.pullLoad"
                    :finished="SetUpPull.pullEnd"
                    finished-text="没有更多了"
                    @load="getLazy"
                    :offset="SetUpPull.offset"
                    class="item-lazy"
                    v-if="lazyArr.length == 0">
                <div v-for="(item,index) in lazyArr" :key="index"  class="item-lazyLi">
                    <div>{{item.true_name}} - {{item.phone}}</div>
                </div>
            </van-list>

            <div v-else >
                <van-empty description="没有数据"/>
            </div>

        </van-pull-refresh>
    </div>
</template>

<script>

    import {PTexpireLazy,MBSaleroom} from '@/assets/js/ApiData'
    export default {
        name: "pullRefush",  //首页
        data() {
            return {
                SetUpPull:{
                    refreshLoad:false,  //刷新状态
                    pullLoad:false,     //上拉加载状态
                    pullEnd:false,     //上拉加载  结束 状态
                    offset:30,          //上拉 距离底部
                },

                pageArr:{
                    zmtek_ver: 2,
                    day:4,
                    total: 10,
                    p: 1,
                },

                lazyArr:[],
            }
        },
        methods: {

            /*下拉加载*/
            getLazy(){

                PTexpireLazy(this.pageArr).then(res =>{
                    console.log(res.data.list);
                    this.SetUpPull.pullLoad = false;  //下拉状态
                    let data = res.data.list;
                    this.lazyArr = this.lazyArr.concat(data);  //数据 拼接  concat 连接两个或多个数组

                    // this.pageArr.p = this.pageArr.p + 1;
                    let rowLength = res.data.list.length;  //数据长度
                    let pageLimit = 10;   //每页数据长度
                    if(rowLength < pageLimit){
                        // 最后一页不足10条的情况  则表示没有数据
                        console.log('最后');
                        this.$toast('没有更多数据了');
                        this.SetUpPull.pullEnd = true;
                    }
                }).catch(res=>{
                    console.log(res);
                })
            },

            /*上拉刷新*/
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.pageArr.p = 1;
                    this.lazyArr = [];
                    this.SetUpPull.refreshLoad = false;  //refreshLoad 刷新状态
                    this.SetUpPull.pullEnd = false;      //是否已加载完成
                    // 重新加载数据 将 loading 设置为 true，表示处于加载状态
                    this.SetUpPull.pullLoad = true;
                    this.getLazy();
                }, 1000);
            },
        },
        created() {
            // this.getLaty();
        },
    }
</script>

<style lang="scss">
    .item-lazy{
        padding: 10px;
        /*min-height: 80vh;*/
        /*border: solid 1px red;*/
        .item-lazyLi {
            padding: 10px;
            border-bottom: solid 1px #d2d2d2;
        }

    }
</style>