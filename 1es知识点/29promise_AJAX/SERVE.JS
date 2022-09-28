const http = require('http');
const serve = http.createServer((req, res) => {
    console.log('111');
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE,X-URL-PATH,x-access-token"
    })
    res.end('hellow word')
})


serve.listen(3000)