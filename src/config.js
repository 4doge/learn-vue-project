let apiBaseUrl = '';
if (process.env.NODE_ENV === 'production') {
  // possibility to split dev/prod envs
  apiBaseUrl = 'http://localhost:9999';
} else {
  apiBaseUrl = 'https://stark-sea-84823.herokuapp.com';
}

export const apiHost = apiBaseUrl;
