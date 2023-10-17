let http = require('http');
let users = [
    {id: 11,name: 'zhangsan'},
    {id: 22,name: 'lisi'},
    {id: 33,name: 'wangwu'},
    {id: 44,name: 'mazi'},
]
let server = http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url === '/api/users'){
        res.end(JSON.stringify(users));
    }else {
        res.end('Not Found');
    }
})
server.listen(3000,() => {
    console.log('后端API接口服务启动成功，端口号3000');
});