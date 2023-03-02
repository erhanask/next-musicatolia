/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    nextPublicFirebaseApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    nextPublicFirebaseAuthDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    nextPublicFirebaseProjectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    nextPublicFirebaseStorageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    nextPublicFirebaseMessagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    nextPublicFirebaseAppId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    nextPublicFirebaseMeasurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  }
}

module.exports = nextConfig
