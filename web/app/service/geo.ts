import { Cookies } from '~/cookies';
const axios = require('axios').default;

export function getGeoInformation({ cookie }: { cookie: Cookies }) {
  var options = {
    method: 'GET',
    url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
    params: { apikey: process.env.GEO_LOCATION_API_KEY },
    headers: {
      'x-rapidapi-host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_API_KEY,
    },
  };

  const promise = new Promise(resolve => resolve({ data: { country: 'Germany' } }));

  try {
    if (cookie.language) {
      console.log('Saving API quota for geo location');
      return promise;
    }
    // Temporarily disabled due to exhausted quota 🤦🏻‍♂️
    // return axios.request(options);
    return promise;
  } catch (error) {
    console.log(error);
    console.log('Geo API call error. Returning Germany as country...');
    return promise;
  }
}
