const { promises } = require("dns");
const http = require("http")
const url = require("url")
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;

    try {

        if(pathName === "/") {
            const data = await fs.readFile("index.html");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }else if (pathName === "/about"){
            const data = await fs.readFile("about.html");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
        else if(pathName === "/contact-me"){
            const data = await fs.readFile("contact-me.html");
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
        else{
            const data = await fs.readFile("404.html");
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(data);
        }

    } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
    }
});


const PORT = 8080;

server.listen(PORT , () => {
    console.log(`Server running at http://localhost:${PORT}`)
})