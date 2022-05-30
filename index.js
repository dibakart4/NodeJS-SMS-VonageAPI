// // var sid = 'AC4b38c0998b6a36c83e9d39176dc2e4b9'
// // var authToken= '08d475a51c53f8d01609ee8fb32b46d0'

// // var twilio = require('twilio')(sid,authToken)

// // twilio.messages.create({
// //     from:"+19124206268",
// //     to:'+918837215173',
// //     body:"This is just a trailer of node.js,picture abhi baki hai mere dost!"
// // })
// // .then((res)=>console.log('message has sent!'))
// // .catch((err)=>{
// //     console.log(err);
// // });
// const express = require('express');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');
// const socketio = require('socket.io');
// // const Nexmo = require('nexmo');
// // const express = require("express");
// // const app = express();

// // Template engine setup
// index.set('view engine', 'html');
// index.engine('html', ejs.renderFile);

// // Public folder setup
// app.use(express.static(__dirname + '/public'));

// // Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/sendSMS", function (req, res) {
//   var accountSid = "AC4b38c0998b6a36c83e9d39176dc2e4b9";
//   var authToken= '08d475a51c53f8d01609ee8fb32b46d0' 

//   var twilio = require("twilio");
//   var client = new twilio(accountSid, authToken);

//   client.messages
//     .create({
//       body: "This is just a trailer of node.js,picture abhi baki hai mere dost!",
//       from:"+19124206268", 
//       to:'+918837215173',
       
//     })
//     .then((message) => res.send(`The message to: ${message.to} was sent!`));
// });

// app.listen(3000);