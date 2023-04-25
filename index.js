const express = require('express');
const path = require('path');

const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post("/login", (req, res) => {
    const code = req.body.code;
    const redirectUri = req.body.redirectUri;
    const clientId = req.body.clientId;
    const clientSecret = req.body.clientSecret;

    const spotifyApi = new SpotifyWebApi({
      redirectUri, clientId, clientSecret,
    })
  
    spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        })
      }).catch(err => {
        console.log(err);
      })
})

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;

  const redirectUri = req.body.redirectUri;
  const clientId = req.body.clientId;
  const clientSecret = req.body.clientSecret;

  const spotifyApi = new SpotifyWebApi({
    redirectUri, clientId, clientSecret, refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in,
          })
    })
    .catch(err => {
        res.sendStatus(400)
    })
})

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);