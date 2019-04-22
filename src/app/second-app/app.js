const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept, Authorization , Cache-Control, Pragma');
    next();

});

app.use('/api/courses', require('./routers/courses.js'));
// app.use('/api/courses.js' , require('./routers/classes.js'));
app.use('/', (req, res) => {
    res.status(404).send('Incorrect URL');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => console.log("Listening to port" + PORT));
module.exports = app;
