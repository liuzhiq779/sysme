<template>
 <div>
     <div class="query" >
       <el-input style="width:800px;padding-right:180px" v-model="input" placeholder="请输入内容"></el-input>
       <el-button type="primary">查询</el-button>
       <el-button type="primary">添加</el-button>
     </div>
 <div style="margin:20px">
  <el-table
   type="selection"
    :data="tableData"
    border
    style="margin-top:20px;">
     <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
      <el-table-column width="180" label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
 </div>
</div>
</template>
 


<script>
 export default {
    data() {
      return {
        input:'',
        open() {
        this.$message('这是一条消息提示');
      },
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row); 
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, ' 修改 '),
            h('i', { style: 'color: teal' }, '22222')
          ])
        });
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style scoped>
.query{
    margin: 20px;
}

</style>