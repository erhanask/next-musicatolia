/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  }
}

module.exports = nextConfig
