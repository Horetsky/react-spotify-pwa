
# 🎧 Music Portal

This is a progressive React application based on the Spotify web API. This app will help you discover new music and video clips, and the architecture of the progressive web application will support an unforgettable user experience.






## Features
- Revising the recommendation
- Search for music by name
- Discover music by category
- Play music
- View song info
- Watch music videos
- Discover new artists
- Watch artist's popular  music videos
- Save songs to your library
- Create playlists
- Follow your favorite artists
- Offline mode
- Intelligent resource caching


#### Home Page
On the home page, you can view recommended albums, playlists, and tracks. You can also see your favorite and recently listened tracks, your favorite artists and their popular tracks.

#### Search Page
On the search page, you can find tracks by keywords or categories. The application interface will immediately respond to keywords entered in the search field and offer the most likely results.

#### Library Page
On the library page, you can view your profile, saved tracks, albums, and playlists, as well as the artists you follow.

#### Track Page
On the track page, you can view information about the track, listen to it, watch a music video, and discover similar tracks.

#### Artist Page
On the artist's page, you can view information about the artist, discover popular tracks, albums and video clips featuring this artist.

#### Album / Playlist Page
On the album / playlist page, you can view information about this album / playlist, its tracks, and listen to each of them. If you like the it, you can easily add it to your library using the user-friendly interface.



## Files structure

#### Server side
The server side consists of a single main file **``index.js``** that acts as a server. ``index.js`` also provides authentification features.

#### Client side
The client side consists of:
- components ``./client/src/components``
- basic modules ``./client/src/modules``, which contain all the necessary resources for proper functioning, 
- pages ``./client/src/pages`` that consist of modules and do not contain business logic.
- a router ``./client/src/router`` that provides routing to the pages
- redux ``./client/src/redux`` that contains the global state and provides data exchange between modules
- utilities ``./client/src/utils`` that provide authentication functions ``/utils/useAuth.js``, server requests ``/utils/useHttps.js`` and data preparation ``/utils/_transformData.js``for display on the page


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
Now you have a builded application to upload to your hosting.

**For example, [Deploy to Herocu](https://devcenter.heroku.com/articles/git)**






## Demo

**See the demo: [Music Portal](https://music-portal.herokuapp.com/)**

**See the video demo on [YouTube](https://youtu.be/vthPO4e-8pQ)**

## Tech Stack

**Client:** React, Redux, Redux Toolkit, SASS, REST APIs

**Server:** Node, Express

[![Tech Stack](https://skills.thijs.gg/icons?i=react,redux,html,sass,nodejs,express)](https://skills.thijs.gg)


