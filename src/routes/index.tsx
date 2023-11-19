import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import StartView from '~/components/startView/startView';

// import Counter from '~/components/starter/counter/counter';
// import Infobox from '~/components/starter/infobox/infobox';
import Projects from '~/components/projects/projects';
import { useAuthSession } from '~/routes/plugin@auth';

export default component$(() => {
  const session = useAuthSession();
  console.log(session.value);
  return (
    <>
      <p>{session.value?.user?.email}</p>
      <StartView />
      <main class='bigCont'>
        <Projects />
      </main>

      {/* <section class='hero'>
        <div class='container center container-spacing-xl'>
          <h1>
            <span class='highlight'>LaReponseDev</span>
            <br /> est là pour vous
          </h1>
          <p>
            Boostez votre activité avec les applications sur mesure développé
            par LaReponseDev. Notre expertise en développement d'applications
            garantit des solutions innovantes et performantes pour répondre à
            vos besoins spécifiques. Contactez-nous dès maintenant pour
            concrétiser vos idées et propulser votre entreprise vers le succès
            numérique !
          </p>
          <a
            href='https://qwik.builder.io/docs'
            target='_blank'
            class='button button-primary'>
            Get Started
          </a>
        </div>
      </section>

      <div
        role='presentation'
        class='ellipsis ellipsis-purple'></div>
      <div class='container center container-spacing-xl'>
        <h3>
          You can <span class='highlight'>count</span>
          <br /> on me
        </h3>
        <Counter />
      </div>
      <div class='container '>
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
      </div> */}
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
