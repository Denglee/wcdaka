<template>
    <div>
        <van-tabs :activeName="cardPar.use_type" @click="tabChange" swipeable animated color='#005ad4'>
            <van-tab title="期限卡" name='1'>
            </van-tab>

            <van-tab title="次卡" name='2'>
            </van-tab>
        </van-tabs>

        <ul>
            <li v-for="(cardItem,cardIndex) in cardData" :key="cardIndex">
                {{cardItem.name}}
            </li>
        </ul>

        <navFooter></navFooter>
    </div>
</template>

<script>
    import {cardIndex} from '../../assets/js/ApiData'
    export default {
        name: "cardIndex",
        data() {
            return {
                cardPar:{
                    use_type:1,
                    city_id:this.GLOBAL.cityId,
                    rd_session:'',
                },

                cardData:{},
            }
        },
        methods: {
            // 切换
            tabChange(event){
                console.log(event);
                this.cardPar.use_type = event;
                this.axiosCardIndex();
            },

            // 获取卡数据
            axiosCardIndex(){
              cardIndex(this.cardPar).then(res=>{
                  console.log(res);
                  this.cardData = res.data;
              }).catch(res=>{
                  console.log(res);
              })
            },
        },
        created() {
            this.axiosCardIndex();
        },
    }
</script>
