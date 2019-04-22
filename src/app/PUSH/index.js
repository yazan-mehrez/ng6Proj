const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const publicVapidKey = 'BG26LHVJZVe0yc25Y7-yKMJq8ByR6aE4F0JuJFM-rIxFJU1DDS6jQfTjDYmrpRxjUTLrEd0vfRkqqiM1E28eEK4';
const privateVapidKey = '2Cb10K7sBSkfBL62EHSxIspfrU-2uQ1IsW9DYoASq7E';
webpush.setVapidDetails('mailto:yazan.mehrez@gmail.com', publicVapidKey, privateVapidKey);

app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());

app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    const payload = JSON.stringify({title: 'Push Yazan'});

    webpush.sendNotification(subscription, payload).catch(err => console.log(err));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => console.log('Listening to port' + PORT));

