let apiBaseUrl =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:9999'
    : 'https://stark-sea-84823.herokuapp.com';

export const apiHost = apiBaseUrl;
