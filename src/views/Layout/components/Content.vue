<template>
   <div class="app">
       <div class="header">
         <i v-if="!isCollapse" @click="changeMenu" class="el-icon-caret-left"></i>
         <i  v-else @click="changeMenu" class="el-icon-caret-right"></i>
         顶部区域</div>
       <!-- 内容区域---路由出口  -->
       <div class="content">
         <router-view />
       </div>
   </div>
</template>

<script>


export default {
  props:['isCollapse'],
    data(){
      return{

      }
    },
    methods:{
      changeMenu(){
        console.log('hhhhhhhh')
        this.$emit('changeCollapse')
      }
    }
}
</script>

<style scoped>
.app{
  margin-top: 0;
}
.header{
    height: 60px;
    background: beige;
}
</style>
