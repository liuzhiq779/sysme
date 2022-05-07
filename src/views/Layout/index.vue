<template>
   <div >
     <!-- 左侧导航区域 -->
    <Mymenu class="menu"  :isCollapse="isCollapse" />

     <!-- 右部内容区域 -->
     <Content class="content" :class="{isActive:isCollapse}" @changeCollapse="changeCollapse" :isCollapse="isCollapse" />
   </div>
</template>

<script>
import Mymenu from './components/Mymenu.vue'
import Content from  './components/Content.vue'
export default {
    components:{
     Mymenu,
      Content 
    },
    data(){
      return{
        isCollapse:false,
      }
    },
    methods:{
      changeCollapse(){
        this.isCollapse =! this.isCollapse;
      }
    }
}
</script>

<style scoped>

.menu{
    /* width: 200px; */
    /* height: 800px; */
    background: #545c64;
    position: fixed;
    top: 0;
    bottom: 0;
}
.content{
   margin-top: 0;
    margin-left:200px ;
}
.isActive{
  margin-left: 64px;
}

</style>
