const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const path = require('path');
var fs = require('fs')


/* GET api listing. */
router.use('/', (req, res, next) => {
    console.log('api')
    next();
});

router.post('/email', (req, res) => {
    console.log('email!');

    var info = req.body;
    var name = info.name;
    var phone = info.phoneNumber;
    var email = info.email;
    var message = info.message;
    console.log(info);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bell.anderson.facebook@gmail.com',
            pass: 'Enter Pass'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"bell anderson 👻" <bell.anderson.facebook@gmail.com', // sender address
        to: 'hen101020@gmail.com, hen10102@walla.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'name :' + name + ' email:' + email + ' phone :' + phone + ' message : ' + message, // plain text body
        html: '<b>' + 'name :' + name + ' email:' + email + ' phone :' + phone + ' message : ' + message + '</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status('502').send('sorry server couldnt send that email');
            var logger = fs.createWriteStream('log.txt', {
                flags: 'a' // 'a' means appending (old data will be preserved)
            })

            logger.write('some data') // append string to your file
            console.log(error);
        } else {
            res.status(200).send('email sent');
            console.log('email sent succefuly!');
        }
    });
});

router.get('/cv', (req, res) => {
    console.log('download cv');
    res.sendFile(path.join(__dirname, '../Hen_CV.pdf'));
});
module.exports = router;