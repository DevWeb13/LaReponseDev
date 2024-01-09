import { Slot, component$, useStyles$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import Header from '~/components/header/header';
import styles from './styles.css?inline';

import { getOneProject } from '~/server/controllers/projectsController';

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

export const useProjectDetailsLoader = routeLoader$(async (requestEvent) => {
  const project = await getOneProject(requestEvent.params.id);
  if (project) {
    return project;
  }
  return requestEvent.fail(404, {
    errorMessage: 'Project non trouvé',
  });
});

// export const onRequest: RequestHandler = (event) => {
//   const session: Session | null = event.sharedMap.get('session');
//   if (!session || new Date(session.expires) < new Date()) {
//     throw event.redirect(
//       302,
//       new URL(
//         `api/auth/signin?callbackUrl=${encodeURIComponent(event.url.pathname)}`,
//         event.url.origin
//       ).toString()
//     );
//   }
// };

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <Slot />
    </>
  );
});
