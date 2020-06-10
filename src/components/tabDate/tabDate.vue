<template>
    <ul class="dayTime-ul">
       <li v-for="(item,index) in dayTime" :key="index" @click="chooseDay(index,item)"
           :class="checkedDayNum == index ? 'active-dayTime':'' ">
           <div>{{item.week}}</div>
           <div>{{item.rq}}</div>
       </li>
    </ul>
</template>

<script>
    export default {
        name: "tabDate",
        props:{
            dayTime: {},
        },
        data() {
            return {
                checkedDayNum:'',

            }
        },
        methods: {
            chooseDay(index,item){
                // console.log(item);
                this.checkedDayNum = index;
                this.$emit('changeDate', item.d)
            },
        },
        created() {
            console.log(this.dayTime);
        },
    }
</script>
<style lang="scss">
    .dayTime-ul{
        width: 100%;
        li{
            display: inline-block;
        }
        .active-dayTime{
            color: red;
        }
    }

</style>