/**
 * 测试环境的配置内容
 */

module.exports = {
    env: 'build',        //环境名称
    port: 7017,         //服务端口号
    mongodb_url: 'mongodb://localhost:27017/tea',    //数据库地址
    redis_url:'',       //redis地址
    redis_port: ''      //redis端口号
}