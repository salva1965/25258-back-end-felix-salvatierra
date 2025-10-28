import http from "http";

const server = http.createServer((req,resp)=>{
    console.log(req.url,req.method);
   // resp.statusCode = 200;
   // resp.setHeader("Content-Type", "text/plain");
   resp.writeHead(200, { "content-type":"text/html; charset=utf-8" });
    resp.end("hola desde  !!!");
});

const PORT = 3000;
server.listen(PORT,() => console.log(`http://localhost:${PORT}`));
