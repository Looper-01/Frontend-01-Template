/*
 * @Description: server of toy browser
 * @Author: Looper
 * @Date: 2020-05-13 13:19:53
 * @LastEditors: Looper
 * @LastEditTime: 2020-05-13 23:33:20
 * @FilePath: /Frontend-01-Template/week05/browser/server.js
 */

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("-------request-start");
  console.log(req.headers);
  console.log(req.method);
  console.log("-------request-end");

  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-Foo", "bar");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("ok");
});

server.listen(8080);
