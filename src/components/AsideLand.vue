<template>
    <el-menu  
    background-color="#224746"
    text-color="#ffff"
    active-text-color="#fffd04b"
    :collapse="isCollapse"
    :collapse-transition="false"
    router
    style="height:100%">
      <el-menu-item index="/HomeLand">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item :index="'/'+item.menuClick" v-for="(item,i) in menu" :key="i">
        <i :class="item.menuIcon"></i>
        <span>{{item.menuName}}</span>
      </el-menu-item>
      <!--<el-menu-item index="/Two">
        <i class="el-icon-s-promotion"></i>
        <span>导航2（学院列表）</span>
      </el-menu-item>
      <el-menu-item index="/Three">
        <i class="el-icon-s-claim"></i>
        <span>导航3（成就列表）</span>
      </el-menu-item>
      <el-menu-item index="/Four">
        <i class="el-icon-s-custom"></i>
        <span>导航4（天赋列表）</span>
      </el-menu-item>
      <el-menu-item index="/Five">
        <i class="el-icon-s-management"></i>
        <span>导航5（假期选择列表）</span>
      </el-menu-item>-->
    </el-menu>
</template>

<script>
    export default{
        name:"AsideLand",
        data(){
          return{
            //isCollapse:true
            menu:[
              {
                 menuClick:'One',
                 menuName:'事件列表',
                 menuIcon:'el-icon-user-solid'
              },
              {
                   
                 menuClick:'Two',
                 menuName:'学院列表',
                 menuIcon:'el-icon-s-promotion'
              },
              {
                menuClick:'Three',
                 menuName:'成就列表',
                 menuIcon:'el-icon-s-claim'
              },
              {
                menuClick:'Four',
                 menuName:'天赋列表',
                 menuIcon:'el-icon-s-custom'
              },
              {
                menuClick:'Five',
                 menuName:'假期选择列表',
                 menuIcon:'el-icon-s-management'
              }
            ]
          }
        },
        props:{
          isCollapse:Boolean
        }
    }
</script>

<style scoped>
</style>