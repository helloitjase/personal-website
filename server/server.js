const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const email = require('../nodemailer/transport.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/', express.static(path.resolve(__dirname, '../public')));

app.post('/api/contactForm', (req, res) => {
  const emailInfo = email.generateOptions(req.body);
  email.transporter.sendMail(emailInfo, (err, info) => {
    if (err) {
      res.send(err);
    } else {
      res.send(200);
    }
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => { console.log(`we be listening on port ${port}`); });
