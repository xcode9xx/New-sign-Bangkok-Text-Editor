const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const fs = require('fs');
const rateLimit = require('express-rate-limit');
const throttle = require('express-throttle');

const downloadDataFile = 'downloadData.json';

// Load download count from JSON file or initialize it
let downloadData = {
    count: 0
};

if (fs.existsSync(downloadDataFile)) {
    const fileData = fs.readFileSync(downloadDataFile);
    downloadData = JSON.parse(fileData);
}

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

const downloadThrottle = throttle({
    rate: "5/s", // limit each IP to 5 requests per second
    burst: 10, // allow burst of 10 requests in a second
    ip: true // throttle based on IP address
});
app.use(express.static(path.join(__dirname, 'public')));

app.get('/download', downloadThrottle, (req, res) => {
    downloadData.count++;
    req.session.downloadCount = downloadData.count;

    // Save download count to JSON file
    fs.writeFileSync(downloadDataFile, JSON.stringify(downloadData));

    res.json({ downloadCount: downloadData.count });
});

app.get('/downloadCount', (req, res) => {
    res.json({ downloadCount: downloadData.count });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});