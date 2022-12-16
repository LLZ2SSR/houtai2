<template>
    <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="asideWidth" style="background-color: rgb(238, 241, 246);">
    <AsideLand :isCollapse="isCollapse"></AsideLand>
  </el-aside>
  
  <el-container style="height:100%">
    <el-header style="text-align: right; font-size: 12px">
     <HeaderLand @doCollapse="doCollapse"></HeaderLand>
    </el-header>
    
    <el-main style="height:100%">
      <!--<MainLand></MainLand>-->
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>


</template>
 
<script>
import AsideLand from "./AsideLand";
import HeaderLand from "./Header";

export default {
    name:"IndexBU",
    components:{
      AsideLand,
      HeaderLand,

    },
    data(){
      return{
        isCollapse:false,
        asideWidth:'200px',
        
      

      }
    },
    methods:{
      doCollapse(){
        this.isCollapse=!this.isCollapse;
        if(!this.isCollapse){
            this.asideWidth='200px'
        }
        else{
          this.asideWidth='64px'

        }
      }
      
    }
   
  };
</script>

<style>
.el-header {
    background-color: #aabab9;
    color: rgb(6, 2, 2);
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>