const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


var DOMAIN = process.env.MAILGUN_DOMAIN;
var API_KEY = process.env.MAILGUN_API_KEY;

app.use(express.static(__dirname + '/dist/gold'));

app.get('/*',function(req,res){
res.sendFile(path.join(__dirname+'/dist/gold/index.html'));
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(process.env.PORT || 8080);

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.post('/hello',function(request,response){
    var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});
    console.log(request.body)
    const data = {
        from: request.body.from,
        to: request.body.to,
        subject: request.body.subject,
        text: request.body.message
      };
      mailgun.messages().send(data, (error, body) => {
        response.send('Message was sent successfully!');
      })
})



