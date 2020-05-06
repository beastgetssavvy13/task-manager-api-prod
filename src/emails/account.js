// const sgMail = require("@sendgrid/mail");
// const sendgridAPIKey = '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'
// sgMail.setApiKey(sendgridAPIKey)
// const msg = {
//   to: "kavish.pandit2017@vitstudent.ac.in",
//   from: "kavish.pandit2017@vitstudent.ac.in",
//   subject: "Sending with Twilio SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// //ES8
// (async () => {
//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// })();

const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'kavish.pandit2017@vitstudent.ac.in',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}
const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'andrew@mead.io',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
// const mailjet = require('node-mailjet')
//   .connect('80a67b24a8161ded752894a16193a07c','b40abf837865dae4f8772c44d1e7e56a')
// const request = mailjet
//   .post("send", { 'version': 'v3.1' })
//   .request({
//     "Messages": [
//       {
//         "From": {
//           "Email": "kavish.pandit2017@vitstudent.ac.in",
//           "Name": "Kavish"
//         },
//         "To": [
//           {
//             "Email": "kavish.pandit2017@vitstudent.ac.in",
//             "Name": "Kavish"
//           }
//         ],
//         "Subject": "Greetings from Mailjet.",
//         "TextPart": "My first Mailjet email",
//         "HTMLPart": "<h3></a>!</h3><br />May the delivery force be with you!",
//         "CustomID": "AppGettingStartedTest"
//       }
//     ]
//   })
// request
//   .then((result) => {
//     console.log(result.body)
//   })
//   .catch((err) => {
//     console.log(err.statusCode)
//   })
// Require:
// Require:
// var postmark = require("postmark");

// // Send an email:
// var client = new postmark.ServerClient("dd7b6186-2cc4-4f62-a54e-6061fd80c594");

// client.sendEmail({
//   "From": "kavish.pandit2017@vitstudent.ac.in",
//   "To": "kavish.pandit2017@vitstudent.ac.in",
//   "Subject": "Test",
//   "TextBody": "Hello from Postmark!"
// });
// //ES8
// (async () => {
//   try {
//     await client.send(msg);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// })();
//ES6
// sgMail.send(msg).then(
//   () => {},
//   (error) => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// );

// const sgMail = require('@sendgrid/mail')
// //5d69050c46da435b843e87198206f543
// const sendgridAPIKey = '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'

// sgMail.setApiKey(sendgridAPIKey)

// const msg = { 
//   to: 'kavish.pandit178@gmail.com',
//   from: 'kavish.pandit2017@vitstudent.ac.in',
//   subject: 'This is my first creation!',
//   text: 'I hope this one actually get to you.'
// }
// sgMail.send(msg)
//   .then(() => console.log('Mail sent successfully'))
//   .catch(error => console.error(error.toString()));

  //xlXFcqMiGvNQHprvxblksFqX;