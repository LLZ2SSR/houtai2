<template>
    <div class="loginBody">
        <!-- 登录盒子  -->
        <div class="loginDiv">
        <div class="login-content">
            <h1 class="login-title">用户登录</h1>
            <!-- 登录表单 -->
            <el-form :model="loginForm" ref="LoginForm" :rules="rules" label-width="100px" >
                <!-- 用户名 -->
                <el-form-item  label="账号" prop="no">
                    <el-input  style="..." type="text" v-model="loginForm.no" autocomplete="off" size="small" ></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="密码" prop="password">
                    <el-input style="..." type="password" v-model="loginForm.password" show-password autocomplete="off" size="small" @keyup.enter.native="confirm"></el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item >
                    <el-button type="primary" @click="confirm" :disable="confirm_disabled">确定</el-button>
                  
                </el-form-item>
            </el-form>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"loginLand",
  data() {
    return {
        confirm_disabled:false,

      //数据绑定
      loginForm: {
        no: "",
        password: ""
      },
      //表单验证规则
      rules: {
        no: [
          { required: true, message: '请输入登录名', trigger: 'blur' },
         
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
         
        ]
      }
    }
  },
  //添加行为，
  //如果有接口的话加入后端登录验证
  methods: {
    //添加表单重置方法
    resetForm(){
        this.$refs.form.resetFields();
      },
    confirm(){  
        this.confirm_disabled=true;
        
        this.$refs.LoginForm.validate((valid)=>
        {
          console.log(this.loginForm.no);
          if(valid)
        {    
          console.log(this.$store.state.account.no);
          
          if(this.loginForm.no===this.$store.state.account.no && this.loginForm.password===this.$store.state.account.password)
             {this.$message.success('登录成功');
               this.resetForm;
               this.$store.commit('setLogin');
             this.$router.push({path:'/HomeLand'})}
             else
             {
              this.confirm_disabled=false;
              this.$message.error('登录失败');
              return false
             }

        }else{
           return false
        }
          
        })
        
           // this.$axios.post('',this.loginForm).then(res=>{
             // console.log(res)
             // if(res.code==200){
                //存储
                //sessionStorage.setItem("CurUser",JSON.stringify(res.data))
                
                //this.$router.replace('./index');
              //}else{
             //   this.confirm_disabled=false;
             //   alert('用户名或密码错误');
              //  return false;
             // }

           // });
           // }else{
           //   this.confirm_disabled=false;
           //   console.log('校验失败');
           //   return false;

            //}
      

        
     // });




    }
    
     
     

  }
}
</script>

<style lang="less" scoped>
.loginBody {
  position:absolute;
  width:100%;
  background-color: #2b5b6b;
  height: 100%;
}
.loginDiv {
  
  width: 450px;
  height: 330px;
  background: rgb(248, 249, 249);
  border-radius: 5%;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -200px;
  margin-left: -250px;
  
}
.logintitle{
  margin:20px 0;
  text-align:center;
}
.login-content {
  width:400px;
  height:250px;
  position:absolute;
  top:25px;
  left:25px;
}
</style>