<template>
   <div>
       <h2 @click="hander"><el-button type="primary">点击</el-button>{{this.msg}}</h2>
   </div>
</template>

<script>
import axios from "axios";
export default {
 data() {
    return {
      msg: "",
    };
  },
 methods:{
    hander() {
    axios.get("http://localhost:3000/users")
      .then((res) => {
        this.msg = res.data.msg;
        console.log("8888888")
      })
      .catch((err) => {
        console.log(err);
      });  
  }
 }
}


</script>

<style scoped>

</style>