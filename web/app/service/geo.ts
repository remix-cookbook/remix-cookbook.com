import { Cookies } from '~/cookies';
import axios from 'axios';

export function getGeoInformation({ cookie }: { cookie: Cookies }) {
  const promise = new Promise(resolve => resolve({ data: { country: 'Germany' } }));

  try {
    if (cookie.language) {
      console.log('Saving API quota for geo location');
      return promise;
    }
    return axios.get('http://ipwhois.app/json/');
  } catch (error) {
    console.log(error);
    console.log('Geo API call error. Returning Germany as country...');
    return promise;
  }
}
