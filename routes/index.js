var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var express = require('express');
var nodemailer= require('nodemailer');

var app = express();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.urlencoded({ extended: false }));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Weblyzer' });
});
router.post("/", (req , res) =>{
  const output = `<p> You Have A NEW Entry on Weblyzer<p>
  <h3> Contact Details </h3>
  <ul>
  <li> Name : ${req.body.n1} </li>
  <li> Email : ${req.body.n2} </li>
  <li> Phone : ${req.body.n3} </li>
  </ul>
  <h1>My client either buys or dies</h1>
  `;
  let transporter = nodemailer.createTransport({
    host: "email-smtp.ap-south-1.amazonaws.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "AKIA5PKL6H5V6BJIJSH2", // generated ethereal user
      pass: "BHverVbOQGhM4GwtP8HF28mj5WSIqlS/UpMTnEVXmojf" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"Gautam" gautam12199@gmail.com', // sender address
    to: "gautam12199@gmail.com", // list of receivers
    subject: "Weblyzer", // Subject line
    text: "Hi", // plain text body
    html: output // html body
  });
  
  res.render('thanks', {test: req.body.n1});
});

module.exports = router;