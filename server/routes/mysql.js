//连接数据库
const mysql = require('mysql')



//创建数据库连接
const  client = mysql.createConnection({
    hont: 'localhost', //数据域名 地址
    user: 'root', //数据名称
    password: '777999ll', //数据库密码
    datebase:'teach'   //数据库名称
})

//封装数据库操作语句 sql语句 参数数组arr callback成功函数结果
function sqlFn(sql,arr,callback){
    if(err){
        console.log('数据库语句错误');
        return;
    }
    callback(result)
}

module.exports = sqlFn;
