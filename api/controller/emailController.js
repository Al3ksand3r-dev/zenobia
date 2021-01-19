"use strict";
const nodemailer = require("nodemailer");
require("dotenv/config");

// async..await is not allowed in global scope, must use a wrapper
const main = async (body = {}, email = "") => {
  let emailTemplate = `
    <div class="email">
      <h1>New Booking</h1>
      <ul>
        <li>
          <p>Course:</p>
          <p>${body.course}</p>
        </li>
        <li>
          <p>Customer name:</p>
          <p>${body.firstName} ${body.lastName}</p>
        </li>
        <li>
          <p>Gender:</p>
          <p>${body.gender}</p>
        </li>
        <li>
          <p>Date of birth:</p>
          <p>${body.dateOfBirth}</p>
        </li>
        <li>
          <p>Address:</p>
          <p>${body.origin}, ${body.state}</p>
        </li>
        <li>
          <p>Citizenship:</p>
          <p>${body.citizenship}</p>
        </li>
        <li>
          <p>Etnicity:</p>
          <p>${body.otherEtnicity ? body.otherEtnicity : body.etnicity}</p>
        </li>
      </ul>
      <hr>
      <ul>
        <li>
          <p>How did you hear about us:</p>
          <p><i>${body.heardFrom}</i></p>
        </li>
        <li>
          <p>Healthcare:</p>
          <p>${body.healthCare}</p>
        </li>
        <li>
          <p>Where did you go to school/What grade?:</p>
          <p>School: ${body.school}, Grade: ${body.grade}</p>
        </li>
        <li>
          <p>Parent name:</p>
          <p>${body.parent}</p>
        </li>
        <li>
          <p>Parent occupation:</p>
          <p>${body.activity}</p>
        </li>
        <li>
          <p>Parent phone number:</p>
          <p>${body.phone}</p>
        </li>
        <li>
          <p>Parent address:</p>
          <p>${body.address}</p>
        </li>
      </ul>
      <hr>
      <ul>
        <li>
          <p>E-mail:</p>
          <p>${body.email}</p>
        </li>
        <li>
          <p>From where did you hear about us?:</p>
          <p>${
            body.otherSocialMedia ? body.otherSocialMedia : body.socialMedia
          }</p>
        </li>
      </ul>
    </div>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "postmaster@sandbox9fda2ce0cc0c48aeb97e3efc7837524e.mailgun.org", // generated ethereal user
      pass: process.env.SECRET, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: email ? email : "<dimitrijevicaleksander.dev@gmail.com>",
    to: "aleksander.dimitrijevic@gmail.com", // list of receivers
    subject: "Booking", // Subject line
    // text: "Hello world?", // plain text body
    html: emailTemplate, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

main().catch(console.error);
module.exports = { main };
