var express = require('express');
var router = express.Router();

//倒入数据库  sqlFn('sql',[],res=>{})
const  sqlFn = require('./mysql')


/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.send({
    msg:'后端接口测试数据，测试接口'
  })
});


/*
* 商品列表：分页{total:'',arr:[{},{},{}],pagesize:8}
*参数：page页码
* */

router.get('/projectList',(req,res,next)=>{
  const  page = req.query.page || 1;
  const sqlLen = "select * from project order by id desc limit 8 offset " + (page-1)*8
  sqlFn(sql,null,result =>{
    if (result.length >0){
      res.send({
        status:200,
        data:result,
        pageSizes:8,
        total:len
      })
    } else{
      res.send({
        status:500,
        msg:'暂无数据'
      })
    }
  })
})


//商品查询接口 search
router.get("/search",(req,res,next) =>{
   var search = req.query.search;
   const sql = "select * from project where  concat(`title`,`sellPont`,`descs`) like '% " + search
   sqlFn(sql,null,(result)=>{
     if(result.length >0){
       res.send({
         status:200,
         result
       })
     } else{
       res.send({
         status:500,
         msg:"暂无数据"
       })
     }
   })
})

//登陆
router.post('/', function(req, res, next) {
  const { username, password } = { ...req.body };
  const sql = `select * from userinfo where username='${username}'`;
  sqlQuery(sql,(data)=>{
      if(data.length == 0){
          const sql = `insert into userinfo values(null,'${username}','${password}')`;
          sqlQuery(sql,(data,err)=>{
              if(data){
                  res.send({
                      code:"200",
                      message:"注册成功"
                  })
              }else if(err){
                  res.send(err)
              }
          })
      }else{
          res.send({
              code:"500",
              message:"用户名已存在"
          })
      }
  })
});


module.exports = router;
