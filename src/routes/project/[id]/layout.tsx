import { Slot, component$, useStyles$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import Header from '~/components/header/header';
import styles from './styles.css?inline';

import { isDev } from '~/routes/layout';

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

export const useProjectDetails = routeLoader$(async (requestEvent) => {
  console.log('requestEvent', requestEvent.params.id);
  if (isDev) {
    try {
      const response = await fetch(
        `http://localhost:5000/projects/${requestEvent.params.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      return response.json();
    } catch (err) {
      return console.error(err);
    }
  } else {
    try {
      const response = await fetch(
        `https://la-reponse-dev-server.vercel.app/projects/${requestEvent.params.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      return await response.json();
    } catch (error) {
      return console.error(error);
    }
  }
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <Slot />
    </>
  );
});
