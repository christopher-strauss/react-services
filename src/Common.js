/**
 * 
 * @returns the request config for API calls
 */
export const getRequestConfig = () => {
  //const token = getAuthToken();
  const config = {};
  config.headers = { 
    'Accept': 'application/json',
    'Content-Type': 'application/json' };

  /*
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  */
  return config;
};
