
# 🎧 Music Portal

This is a progressive React application based on the Spotify web API. This app will help you discover new music and video clips, and the architecture of the progressive web application will support an unforgettable user experience.






## Features

    1. Revising the recommendation
    2. Search for music by name
    3. Discover music by category
    4. Play music
    5. View song info
    6. Watch music videos
    7. Discover new artists
    8. Watch artist's popular  music videos
    9. Save songs to your library
    10. Create playlists
    11. Follow your favorite artists




## API Access

Go to [Spotify Web API Doc](https://developer.spotify.com/documentation/web-api) and follow `Getting started` instructions

Now you get your access parameters
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `clientID` | `string` | **Required**. Your API client id |
| `ClientSecret` | `string` | **Required**. Your API client secret |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file



| Variable  | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `REACT_APP_CLIET_ID` | `string` | **Required**. Your API client secret from previous section |
| `REACT_APP_CLIENT_SECRET` | `string` | **Required**. Your API client secret from previous section |
| `REACT_APP_SERVER_URL` | `string` | **Required**. URL of your server |

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Deployment

To deploy this project run

```bash
  npm run build
```
Тow you have a builded application to upload to your hosting.

**For example, [Deploy to Herocu](''https://devcenter.heroku.com/articles/git)**






## Demo

**See the demo: [Music Portal]('https://music-portal.herokuapp.com/')**


## Tech Stack

**Client:** React, Redux, Redux Toolkit, SASS, REST APIs

**Server:** Node, Express

[![Tech Stack](https://skills.thijs.gg/icons?i=react,redux,html,sass,nodejs,express)](https://skills.thijs.gg)


