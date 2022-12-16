<template>
    <div style="display:flex;line-height:60px;">
        <div>
            <i class="el-icon-s-fold" style="font-size: 20px;" @click="collapse">

            </i>
        </div>
        <div style="flex:1;text-align:center;font-size: 22px;">
            欢迎进入后台管理系统
        </div>
     <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 10px"></i>
        <el-dropdown-menu slot="dropdown">
          
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
          
        </el-dropdown-menu>
      </el-dropdown>
      <!--等下要修改一下登录-->
      <!--<span>user.name</span>--><span>{{this.$store.state.account.no}}</span>
    </div>
</template>

<script>
export default{
    name:"HeaderLand",
    data(){
        return{
          // user:sessionStorage.getItem('CurUser') 
        }
    },
    props:{

    },
    methods:{

        logOut(){
             
        },
        collapse(){
       this.$emit('doCollapse')
        }
    },
    created(){
        this.$router.push("/HomeLand")
    }
}
</script>

<style scoped>
</style>