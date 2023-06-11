import type { Session } from '@auth/core/types';
import { component$ } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler } from '@builder.io/qwik-city';
import { useAuthSession } from '~/routes/plugin@auth';

import Counter from '~/components/starter/counter/counter';
import Hero from '~/components/starter/hero/hero';
import Infobox from '~/components/starter/infobox/infobox';
import Starter from '~/components/starter/next-steps/next-steps';
import Projects from '~/components/starter/projects/projects';

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get('session');
  console.log({ session });
  if (!session || new Date(session.expires) < new Date()) {
    throw event.redirect(302, `/api/auth/signin?callbackUrl=/`);
  }
};

export default component$(() => {
  const session = useAuthSession();
  console.log(session.value);
  return (
    <>
      <div class='videoContainer'>
        <video
          autoPlay
          muted
          loop
          playsInline
          id='myVideo'>
          <source
            src='./star.mp4'
            type='video/mp4'
          />
        </video>
      </div>
      <p>{session.value?.user?.email}</p>;
      <Hero />
      <Starter />
      <Projects />
      <div
        role='presentation'
        class='ellipsis'></div>
      <div
        role='presentation'
        class='ellipsis ellipsis-purple'></div>
      <div class='container container-center container-spacing-xl'>
        <h3>
          You can <span class='highlight'>count</span>
          <br /> on me
        </h3>
        <Counter />
      </div>
      <div class='container container-flex'>
        <Infobox>
          <div
            q:slot='title'
            class='icon icon-cli'>
            CLI Commands
          </div>
          <>
            <p>
              <code>npm run dev</code>
              <br />
              Starts the development server and watches for changes
            </p>
            <p>
              <code>npm run preview</code>
              <br />
              Creates production build and starts a server to preview it
            </p>
            <p>
              <code>npm run build</code>
              <br />
              Creates production build
            </p>
            <p>
              <code>npm run qwik add</code>
              <br />
              Runs the qwik CLI to add integrations
            </p>
          </>
        </Infobox>

        <div>
          <Infobox>
            <div
              q:slot='title'
              class='icon icon-apps'>
              Example Apps
            </div>
            <p>
              Have a look at the <a href='/demo/flower'>Flower App</a> or the{' '}
              <a href='/demo/todolist'>Todo App</a>.
            </p>
          </Infobox>

          <Infobox>
            <div
              q:slot='title'
              class='icon icon-community'>
              Community
            </div>
            <ul>
              <li>
                <span>Questions or just want to say hi? </span>
                <a
                  href='https://qwik.builder.io/chat'
                  target='_blank'>
                  Chat on discord!
                </a>
              </li>
              <li>
                <span>Follow </span>
                <a
                  href='https://twitter.com/QwikDev'
                  target='_blank'>
                  @QwikDev
                </a>
                <span> on Twitter</span>
              </li>
              <li>
                <span>Open issues and contribute on </span>
                <a
                  href='https://github.com/BuilderIO/qwik'
                  target='_blank'>
                  GitHub
                </a>
              </li>
              <li>
                <span>Watch </span>
                <a
                  href='https://qwik.builder.io/media/'
                  target='_blank'>
                  Presentations, Podcasts, Videos, etc.
                </a>
              </li>
            </ul>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'LaReponseDev',
  meta: [
    {
      name: 'description',
      content:
        "Boostez votre activité avec les applications sur mesure créées par LaReponseDev. Notre expertise en développement d'applications garantit des solutions innovantes et performantes pour répondre à vos besoins spécifiques. Contactez-nous dès maintenant pour concrétiser vos idées et propulser votre entreprise vers le succès numérique !",
    },
  ],
};
