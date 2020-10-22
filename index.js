const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 80

app.use(function (req, res, next) {
    if (req.headers['x-amz-sns-message-type']) {
        req.headers['content-type'] = 'application/json;charset=UTF-8';
    }
    next();
})

app.use(bodyParser.json());

app.use(bodyParser.text({ type: 'text/plain' }));

app.post('*', function(req, res) {
    console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
