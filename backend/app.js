const express=require('express')
const app =express()
var CronJob = require('cron').CronJob;


var FCM = require('fcm-node');

function sendNotification(){

var serverKey = 'AAAAYPi7YJw:APA91bH8JNWbVWR9QF-LX8Xvv8xv0TZu84Kzp8n9YhuPbwVDsc3V0I_qoSGRrB7WpKSgA6SYBE4ZlrZQZOoloU1NfjHxr-uI0-EdOiBiTaPeVJCFKBQEeBsILCEof_De205Z9Oscm9S9'; //put your server key here
var fcm = new FCM(serverKey);

var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        //fcm token from frontend , for multiple pass as list to tokens

    to: 'dYd-lQRz71nZpgYkIXjGHS:APA91bFuKQbnC1DpuN-eJuA8VAMoJUa1QyjmzuSolZ0fBaXvgJFgIz2a-Bf8--YKmGsvWufhN77-yr_zIUQG_3ywBtJCUsS_pfj2AnZ3uhSAhyQvISBLCBFIBOWtsziCZwHP15YARp5-', 
    // collapse_key: 'your_collapse_key',
    
    notification: {
        title: 'Title of your push notification', 
        body: 'hello sachin' 
    },
    
    data: {  //you can send only notification or only data(or include both)
        my_key: 'my value',
        my_another_key: 'my another value'
    }
};

fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!",err);
    } else {
        console.log("Successfully sent with response: ", response);
    }
});

}

var job = new CronJob('*/3 * * * * *', function() {
  sendNotification()
}, null, true, 'America/Los_Angeles');
job.start();



app.listen(3001, ()=>console.log("server started"))