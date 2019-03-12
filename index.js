const http = require("http");
const port = 8080;

const server = http.createServer();

server.on("request", (req, res) => {
  // respond to requests
  console.log("Received request", req);
  console.log("route", req.url);

  if (req.url === "/watermelon") {
    res.end("This is a watermelon....");
  } else {
    res.end("Hello");
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
