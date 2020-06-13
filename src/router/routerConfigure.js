import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      redirect: "/index",
    },

    //首页
    {
      path: "/index",
      name: "index",
      component: () => import(/* webpackChunkName: "about" */ "../views/index/index.vue"),
    },


    /*团课*/
    {
      path: "/groupIndex",
      name: "groupIndex",
      component: () => import(/* groupIndex: "about" */ "../views/group/groupIndex.vue"),
    },
    {
      path: "/groupDetails",
      name: "groupDetails",
      component: () => import(/* groupIndex: "groupDetails" */ "../views/group/groupDetails.vue"),
    },


    /*私教*/
    {
      path: "/trainerIndex",
      name: "trainerIndex",
      component: () => import(/* webpackChunkName: "trainerIndex" */ "../views/trainer/trainerIndex"),
    },

    /*训练营*/
    {
      path: "/campIndex",
      name: "campIndex",
      component: () => import(/* webpackChunkName: "campIndex" */ "../views/camp/campIndex"),
    },

    /*购卡*/
    {
      path: "/cardIndex",
      name: "cardIndex",
      component: () => import(/* webpackChunkName: "campIndex" */ "../views/card/cardIndex"),
    },

    /*我的*/
    {
      path: "/userIndex",
      name: "userIndex",
      component: () => import(/* webpackChunkName: "campIndex" */ "../views/user/userIndex"),
    },


];

const routerConfigure = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default routerConfigure;
