let apiBaseUrl = '';
if (process.env.NODE_ENV === 'production') {
  // possibility to split dev/prod envs
  apiBaseUrl = 'http://localhost:9999';
} else {
  apiBaseUrl = 'http://localhost:9999';
}

export const apiHost = apiBaseUrl;
