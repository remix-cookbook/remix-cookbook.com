import { Cookies } from '~/cookies';
import axios from 'axios';

export interface Cookie {
  cookie: Cookies;
}

export function getGeoInformation({ cookie }: Cookie): Promise<{ data: { country: string } }> {
  const promise = new Promise<{ data: { country: string } }>(resolve =>
    resolve({ data: { country: 'Germany' } })
  );

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
