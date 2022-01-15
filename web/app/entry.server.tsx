import dotenv from 'dotenv';
import { renderToString } from 'react-dom/server';
import { RemixServer } from 'remix';
import type { EntryContext } from 'remix';
import { getGeoInformation } from '~/service/geo';
import { languageCookie, parseCookie } from '~/cookies';
import { availableLanguages, portugueseSpeakingCountries } from './config';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  dotenv.config();

  const cookie = await parseCookie(request, languageCookie);
  const country = (await getGeoInformation()).data.country.toLowerCase();
  cookie.language = portugueseSpeakingCountries.includes(country)
    ? availableLanguages.pt
    : availableLanguages.en;
  responseHeaders.set(
    'Set-Cookie',
    await languageCookie.serialize(cookie, {
      httpOnly: true,
    })
  );

  const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
