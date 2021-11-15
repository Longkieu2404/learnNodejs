const http = require('http');



const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
       return res.end('home page');
    }
    if(req.url==='/about')
    {
        return res.end('here is our shourt history')
    }
    res.end(`
    <h1> Oops!</h1>
    <p>khoong the tim thay trang</p>
    <a href="/"> back</a>
    `)
})


server.listen(5000)