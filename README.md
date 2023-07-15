This is project is a blog and showcase about providers favourite artists and songs.
Made with Next.js, MaterialUI, and Firebase.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database

The database is a Firebase Realtime Database. The database is structured as follows:

```json
{
  "guides": {
    "guideId": {
      "content": "Artist Name",
      "header": "https://www.youtube.com/watch?v=1234567890"
      "summary": "https://www.youtube.com/watch?v=1234567890"
    }
  },
  "spotify": {
    "spotifyId": {
      "api_urls": {
        "embed_url": "https://open.spotify.com/embed/track/1234567890",
        "fav_user_url": "https://open.spotify.com/track/1234567890",
        "flyings_urls": [
          "https://open.spotify.com/track/1234567890",
          "https://open.spotify.com/track/1234567890",
          "https://open.spotify.com/track/1234567890",
          "https://open.spotify.com/track/1234567890"
        ],
        "runnings_urls": [
          "https://open.spotify.com/track/1234567890",
          "https://open.spotify.com/track/1234567890",
          "https://open.spotify.com/track/1234567890",
          "https://open.spotify.com/track/1234567890"
        ]
      }
    }
  }
}
```

## Environment Variables

For Login and Database access, you need to add the all environment variables placed inside
.env.example to your .env file.

## Screenshots
![Screenshot_9](https://github.com/erhanask/next-musicatolia/assets/77926871/f614fb1f-51ca-4157-b18a-71764e776127)



## View On Live

https://next-musicatolia.vercel.app/
