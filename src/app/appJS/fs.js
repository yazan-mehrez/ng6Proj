const fs = require('fs');
fs.readdir('./src/app/appJS', (err, data) => {
    if (err) throw err;
    console.log(data);
});
