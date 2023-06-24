import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { RequestHandler } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';

import styles from './styles.css?inline';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};
// export const isDev = process.env.NODE_ENV === 'development';
const isDev = false;
console.log(isDev);
/**
 * It fetches the projects list from the back-end and returns it as a JSON object
 * @param   {boolean}  isDev - if the app is in development mode
 * @returns {Promise} - a promise.
 */
export const useProjectsLoader = routeLoader$(async () => {
  if (isDev) {
    console.log('dev');
    try {
      const response = await fetch('http://localhost:5000/projects', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      return response.json();
    } catch (err) {
      return console.error(err);
    }
  } else {
    try {
      const response = await fetch(
        'https://back-portfolio-devweb13.vercel.app/projects',
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  }
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
