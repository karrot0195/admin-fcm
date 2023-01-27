const express = require("express");
const { initializeApp } = require("firebase-admin/app");
const admin = require("firebase-admin");

const app = express();
const tokens = {};

initializeApp({
  credential: admin.credential.cert(require("./config/service.json")),
});
app.use(express.json());
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/token", function (req, res) {
  console.info("receiving new registration");
  if (req.body.token && req.body.id) {
    tokens[req.body.id] = req.body.token;
  }
  res.json({
    success: true,
  });
});

app.post("/send", function (req, res) {
  const registrationTokens = Object.values(tokens);

  const message = {
    data: { text: `Date: ${new Date().toDateString()}` },
    tokens: registrationTokens,
  };
  admin
    .messaging()
    .sendMulticast(message)
    .then((response) => {
      console.log(response.successCount + " messages were sent successfully");
    });

  res.json({
    success: true,
  });
});

app.listen(3000);
