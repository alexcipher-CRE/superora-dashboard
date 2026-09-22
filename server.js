const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0'; // Listen on all interfaces

// Serve our dashboard
const htmlContent = fs.readFileSync('./index.html', 'utf8');

const server = http.createServer((req, res) => {
    // Security headers
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    
    res.end(htmlContent);
});

server.listen(PORT, HOST, () => {
    console.log(`✅ Dashboard server running on http://${HOST}:${PORT}`);
    console.log(`🌐 Access via any browser on this machine`);
    console.log(`📱 Mobile access: http://YOUR_IP_ADDRESS:${PORT}`);
});

// Keep process alive
process.on('SIGTERM', () => process.exit(0));
process.on('SIGINT', () => process.exit(0));
