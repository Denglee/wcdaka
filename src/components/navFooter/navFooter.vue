<template>
    <div class="tabbar-box">
        <van-tabbar route  v-model="active" active-color="#005ad4" inactive-color="#000">
            <van-tabbar-item v-for="(item, index) in routerArr" :to="item.routerTo">
                <i class="iconfont" :class="item.iconName"></i>
                {{item.name}}
            </van-tabbar-item>
        </van-tabbar>

        <van-button type="default" size="small" @click="btnRefush" :loading = 'loadState.searchLoad' loading-text="加载中...">默认按钮</van-button>

    </div>
</template>

<script>
    export default {
        inject:['reLoad'],
        name: "navFooter",
        data() {
            return {
                active:1,
                routerArr:[
                    { name:"首页", iconName:'icon-xuanzhongshangcheng', routerTo:'/index'},
                    { name:"约团课", iconName:'icon-chongzhi', routerTo:'/groupIndex'},
                    { name:"购卡", iconName:'icon-jicika', routerTo:'/cardIndex'},
                    { name:"我的", iconName:'icon-jiaolian', routerTo:'/userIndex'},
                ],
                loadState:{
                    searchLoad:false,
                }
            }
        },
        methods: {
            btnRefush(){

                this.GLOBAL.btnStateChange(this,'loadState','searchLoad');
                // this.reLoad();
            },
        },
        created() {

        },
    }
</script>
<style lang="scss">

    .tabbar-box{
        margin-top: 60px;
        .iconfont{
            display: block;
            font-size: 24px;
            margin-bottom: 4px;
            text-align: center;
        }
    }
</style>
