// const { promises } = require("dns");
// const http = require("http")
// const url = require("url")
// const fs = require("fs").promises;

// const server = http.createServer(async (req, res) => {

//     const parsedUrl = url.parse(req.url, true);
//     const pathName = parsedUrl.pathname;

//     try {

//         if(pathName === "/") {
//             const data = await fs.readFile("index.html");
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(data);
//         }else if (pathName === "/about"){
//             const data = await fs.readFile("about.html");
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(data);
//         }
//         else if(pathName === "/contact-me"){
//             const data = await fs.readFile("contact-me.html");
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(data);
//         }
//         else{
//             const data = await fs.readFile("404.html");
//             res.writeHead(404, { "Content-Type": "text/html" });
//             res.end(data);
//         }

//     } catch (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Internal Server Error");
//     }
// });


// const PORT = 8080;

// server.listen(PORT , () => {
//     console.log(`Server running at http://localhost:${PORT}`)
// })

const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
