const { google } = require("googleapis");
const OAuth2Data = require("../client_secret_836395997178-h3cvq3q48u344ej1j5i7j9oad6hnj9g2.apps.googleusercontent.com.json");

const CLIENT_ID = OAuth2Data.web.client_id;
const CLIENT_SECRET = OAuth2Data.web.client_secret;
const REDIRECT_URL = OAuth2Data.web.redirect_uris[0];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
var authed = false;

const signIn = (req, res) => {
  if (!authed) {
    // Generate an OAuth URL and redirect there
    const url = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: "https://www.googleapis.com/auth/gmail.readonly"
    });
    console.log(url);
    res.redirect(url);
  } else {
    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
    gmail.users.labels.list(
      {
        userId: "me"
      },
      (err, res) => {
        if (err) return console.log("The API returned an error: " + err);
        const labels = res.data.labels;
        if (labels.length) {
          console.log("Labels:");
          labels.forEach((label) => {
            console.log(`- ${label.name}`);
          });
        } else {
          console.log("No labels found.");
        }
      }
    );
    res.send("Logged in");
  }
};

const signInCallback = (req, res) => {
  const code = req.query.code;
  if (code) {
    // Get an access token based on our OAuth code
    oAuth2Client.getToken(code, function(err, tokens) {
      if (err) {
        console.log("Error authenticating");
        console.log(err);
      } else {
        console.log("Successfully authenticated");
        oAuth2Client.setCredentials(tokens);
        authed = true;
        res.render("dashboard");
      }
    });
  }
};

module.exports = {
  signIn,
  signInCallback
};
