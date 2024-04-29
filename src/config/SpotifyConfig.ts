export const config = {
    clientId: '3ab886dcfa5444879d782be154ed5b42', // available on the app page
    clientSecret: '0623d45db61b4b1faba4f89d1556ac75', // click "show client secret" to see this
    redirectUrl: 'com.r2queue.2014:/oauth', // the redirect you defined after creating the app
    scopes: ['user-read-email', 'playlist-modify-public', 'user-read-private'], // the scopes you need to access
    serviceConfiguration: {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token',
    },
  };
  