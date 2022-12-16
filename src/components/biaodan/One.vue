<template>
  <div>
    <div>
      <el-button type="primary" style="margin-left:5px; margin-bottom: 5px;margin-top: 0px; float:right; font-size: 3px;" @click="add">新增</el-button>
    </div>
    <el-table :data="tableData"  :header-cell-style="{background:'#f3f6fd'}" border>
        <el-table-column prop="id" label="id" width="50">
        </el-table-column>
      
        <el-table-column prop="content" label="content" width="190">
        </el-table-column>
        <el-table-column prop="achievement_id_List" label="achievement_id_list" width="120">
        </el-table-column>
        <el-table-column prop="property_change" label="property_change" width="110">
        </el-table-column>
        <el-table-column prop="img_url" label="img_url" width="200">
        </el-table-column>
        <el-table-column prop="event_type" label="event_type" width="200">
        </el-table-column>
        <el-table-column prop="stage_id" label="stage_id" width="90">
        </el-table-column>
        <el-table-column prop="precondition" label="precondition" width="100">
        </el-table-column>
        <el-table-column prop="game_over" label="game_over" width="100">
        </el-table-column>
      
        <el-table-column prop="operate" label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="samll"  type="success" @click="mod(scope.row)">编辑</el-button>
            <el-popconfirm title="确定删除吗？"    @confirm="del(scope.row.id)" style="margin-left:5px;">
               <el-button slot="reference" type="danger">删除</el-button>
            </el-popconfirm>
          </template>

        </el-table-column>
      </el-table>
      <el-pagination
     
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      
      :page-size="10"
      layout="total, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <el-dialog
      title="新增"
          :visible.sync="centerDialogVisible"
          width="50%"
         center>
         <el-form ref="form" :rules="rules" :model="form" label-width="150px">
          <el-form-item label="id"  prop="id">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="content" prop="content">
            <el-input v-model="form.content"></el-input>
          </el-form-item>
          <el-form-item label="achievement_id_List" prop="achievement_id_List">
            <el-input v-model="form.achievement_id_List"></el-input>
          </el-form-item>
          <el-form-item label="property_change" prop="property_change">
            <el-input v-model="form.property_change"></el-input>
          </el-form-item>
          <el-form-item label="img_url" prop="img_url">
            <el-input v-model="form.img_url"></el-input>
          </el-form-item>
          <el-form-item label="event_type" prop="event_type">
            <el-input v-model="form.event_type"></el-input>
          </el-form-item>
          <el-form-item label="stage_id" prop="stage_id">
            <el-input v-model="form.stage_id"></el-input>
          </el-form-item>
          <el-form-item label="precondition" prop="precondition">
            <el-input v-model="form.precondition"></el-input>
          </el-form-item>
          <el-form-item label="game_over" prop="game_over">
            <el-input v-model="form.game_over"></el-input>
          </el-form-item>
         </el-form>
  
         <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
         </span>
    </el-dialog>

    </div>
</template>

<script>
export default{
        name:"OneLand",
        data() {
      return {
        tableData: [],
        pageNum:1,
        total:0,
        centerDialogVisible:false,
        form:{
          id:'',
          content:'',
          achievement_id_List:'',
          property_change:'',
          img_url:'',
          event_type:'',
          stage_id:'',
          precondition:'',
          game_over:'',


        },
        rules:{
          property_change :[
            {required:true,massage:'按格式输入',trigger:'blur'},
            {min:11,max:12,trigger:'blur'}
          ]
        }

      }
    },
    methods:{
      resetForm(){
        this.$refs.form.resetFields();
      },
      del(id){
        console.log(id);
        this.$axios.get(this.$httpUrl+'/OneDelete?id='+id
             
               ).then(res=>res.data).then(res=>{
               console.log(res);
              if(res.msg==="ok"){
                this.$message({
                  massage:'操作成功',
                  type:'success'
            });
            this.loadPost()
          }else{
            this.$message({
                  massage:'操作失败',
                  type:'error'
            });
          }
        })
        

      },
      mod(row){
           console.log(row);
           
           this.centerDialogVisible=true
           this.$nextTick(()=>{
            this.form=row;
             
           } )

      },
      add(){
       
          this.centerDialogVisible=true
          this.$nextTick(()=>{

            this.resetForm();
          })
      },
      save(){
        this.$refs.form.validate((valid)=>{
          if(valid){
             
            this.$axios.post(this.$httpUrl+'/update',
             this.form
               ).then(res=>res.data).then(res=>{
               console.log(res);
               //成功的判断条件后续要改
              if(res.code==200||res.code==0){
                this.$message({
                  massage:'操作成功',
                  type:'success'
            });
            this.centerDialogVisible=false
            this.loadPost()
            this.resetForm()
          }else{
            this.$message({
                  massage:'操作失败',
                  type:'error'
            });
          }
        })

          }else{
            return false;
          }
        });
      


      },
         loadPost(){
          //接口，之后要修改
           this.$axios.get(this.$httpUrl+'/One',{
            
            pageNum:this.pageNum
            //里面的结构后面要修改
           }).then(res=>res.data).then(res=>{
            //if(res.code==200)
            console.log(res);
            
            this.tableData=res.data;
            this.total=res.total;
           
            
           
          })
        },

      
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageNum=val;
        this.loadPost();
      }
    },
    beforeMount(){
      this.loadPost();
    }
    }

</script>

<style>
</style>