const express = require('express');
const app = express();

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}
app.use(logger);

app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/hello', function (req, res) {
    res.send('Hello to express');
});
app.get('/goodbye', function (req, res) {
    res.send('Goodbye to express');
});

console.log('Server ruuning at http://localhost:3000/');
app.listen(3000);