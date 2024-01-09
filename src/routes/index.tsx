//  src/routes/index.tsx

import type { Signal } from '@builder.io/qwik';
import {
  component$,
  useOnDocument,
  useSignal,
  $,
  useContextProvider,
  createContextId,
  useTask$,
  useVisibleTask$,
} from '@builder.io/qwik';
import { type DocumentHead, useNavigate } from '@builder.io/qwik-city';
import StartView from '~/components/startView/startView';

import Projects from '~/components/projects/projects';
import { useAuthSession } from '~/routes/plugin@auth';
import Footer from '~/components/footer/footer';
import Services from '~/components/Services/Services';

function useScrollPosition() {
  const scrollPosition = useSignal(0);
  useOnDocument(
    'scroll',
    $((e) => {
      scrollPosition.value = (e.target as HTMLElement)?.scrollTop;
      // scrollPosition.value = window.scrollY;
    })
  );
  return scrollPosition;
}

export const ActiveLinkContext = createContextId<Signal<string>>(
  'docs.activeLink-context'
);

export const isAutoScrollingContext = createContextId<Signal<boolean>>(
  'docs.isAutoScrolling-context'
);

export default component$(() => {
  const session = useAuthSession();
  const nav = useNavigate();

  const activeLink = useSignal('home');
  useContextProvider(ActiveLinkContext, activeLink);
  const isAutoScrolling = useSignal(false);
  useContextProvider(isAutoScrollingContext, isAutoScrolling);

  const homeRef = useSignal<HTMLElement>();
  const servicesRef = useSignal<HTMLElement>();
  const projectsRef = useSignal<HTMLElement>();

  const scrollPosition = useScrollPosition();

  const updateURL = $((sectionId: string) => {
    const url = `#${sectionId}`;
    console.log('updateURL', url);
    nav(url);
  });
  useTask$(() => {
    updateURL(activeLink.value);
  });

  useTask$(({ track, cleanup }) => {
    // track scroll position
    track(scrollPosition);

    let observer: IntersectionObserver;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    if (homeRef.value && servicesRef.value && projectsRef.value) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === homeRef.value) {
              activeLink.value = 'home';
            } else if (entry.target === servicesRef.value) {
              activeLink.value = 'services';
            } else if (entry.target === projectsRef.value) {
              activeLink.value = 'projects';
            }
          }
        });
      }, options);
      observer.observe(homeRef.value);
      observer.observe(servicesRef.value);
      observer.observe(projectsRef.value);
    }
    cleanup(() => {
      if (observer) {
        observer.disconnect();
      }
    });
  });

  useVisibleTask$(({ track, cleanup }) => {
    track(activeLink);

    if (isAutoScrolling.value) {
      const time = setTimeout(() => {
        isAutoScrolling.value = false;
      }, 1000);
      cleanup(() => {
        clearTimeout(time);
      });
      return;
    }

    updateURL(activeLink.value);
  });

  return (
    <>
      <p>{session.value?.user?.email}</p>
      <StartView
        id='home'
        ref={homeRef}
      />
      <main class='main'>
        <Services
          id='services'
          ref={servicesRef}
        />
        <Projects
          id='projects'
          ref={projectsRef}
        />
      </main>

      <Footer />
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
