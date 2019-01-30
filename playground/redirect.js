const express = require('express');
const app = express();
const targetBaseUrl = 'ut1.html';
const targetBaseUrl1 = 'http://www.google.com/';
var ans=0;



function handleRedirect(req, res) {
  const targetUrl = targetBaseUrl + req.originalUrl;
  res.redirect(targetUrl);
}
app.get('*', handleRedirect);

const port = process.env.port || 3000;
app.listen(port);
