import {
  component$,
  useSignal,
  $,
  useOnWindow,
  useVisibleTask$,
} from '@builder.io/qwik';
import styles from './project.module.css';
import { useProjectDetails } from '~/routes/project/[id]/layout';
import type { Project } from '~/components/projects/projects';
import QMyImageGallery from '~/integrations/react/myGallery';

import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { ProjectDetails } from '~/components/projectDetails/ProjectDetails';
import SonarCloudBadges from '~/components/SonarCloudBadges';

function useWindowWidth() {
  const isMobile = useSignal<boolean>(false);

  // Cette tâche est appelée lorsque le composant devient visible - idéalement, une seule fois au chargement du composant
  useVisibleTask$(() => {
    if (window.innerWidth > 1200) {
      isMobile.value = false;
    } else {
      isMobile.value = true;
    }
  });

  // Ceci attache un gestionnaire d'événements pour les redimensionnements ultérieurs
  useOnWindow(
    'resize',
    $((event: Event) => {
      if (event.target instanceof Window) {
        if (event.target.innerWidth > 1200) {
          isMobile.value = false;
        } else {
          isMobile.value = true;
        }
      }
    })
  );

  return isMobile;
}

export default component$(() => {
  const indexSignal = useSignal<number>(0);
  const isMobile = useWindowWidth();
  console.log('isMobile', isMobile.value);

  const handleSlide = $(function handleSlide(index: number) {
    indexSignal.value = index;
  });

  function createArrayImages(project: Project) {
    const arrayImages = [];
    for (let i = 0; i < project.pages.length; i++) {
      arrayImages.push({
        original: project.pages[i].image,
        thumbnail: project.pages[i].image,
        originalHeight: 500,
        originalWidth: 500,
        thumbnailWidth: 50,
        thumbnailHeight: 50,
      });
    }
    return arrayImages;
  }

  const project = useProjectDetails();

  const images = createArrayImages(project.value);
  // console.log('project', project.value);
  const {
    _id,
    name,
    description,
    pages,
    github,

    technologies,
    logo,
    sonarCloudProjectKey,
  } = project.value;
  console.log('project', project.value);

  return (
    <main class='bigCont'>
      <div class='ellipsis ' />
      <header class='container column center'>
        <h1 class={styles.projectName + ' ' + 'highlight'}>{name}</h1>
        <p class={styles.projectDescription}>{description}</p>
        <div class={styles.projectLogoContainer}>
          <img
            src={logo}
            alt={name + ' ' + 'logo'}
            class={
              styles.projectLogo +
              ' ' +
              (name === 'Cars Pat' ? styles.projectLogoCarsPat : '')
            }
            width={30}
            height={30}
          />
        </div>
      </header>
      <section
        class={
          styles.projectSectionContainer + ' ' + 'container  center column'
        }>
        <section class={styles.projectGalleryAndDetails}>
          <div class={styles.projectGalleryContainer}>
            <img
              src={logo}
              alt={name + ' ' + 'logo'}
              class={
                styles.projectLogoDesktop +
                ' ' +
                (name === 'Cars Pat' ? styles.projectLogoCarsPat : '')
              }
              width={30}
              height={30}
            />
            <QMyImageGallery
              images={images}
              handleSlide={handleSlide}
            />
          </div>

          <ProjectDetails
            pages={pages}
            indexSignal={indexSignal}
          />
        </section>

        <SonarCloudBadges sonarCloudProjectKey={sonarCloudProjectKey} />

        <div class={styles.projectLinks + ' ' + 'container' + ' ' + 'column'}>
          {isMobile.value && name === 'Tryade dashboard' ? (
            <div class={'button' + ' ' + styles.buttonDisabled}>
              Le projet est disponible uniquement sur les écrans de +1200px
            </div>
          ) : (
            <Link
              class={'highlight button '}
              href={pages[indexSignal.value].url}
              target='_blank'
              rel='noopener noreferrer'>
              {pages[indexSignal.value].url}
            </Link>
          )}
          <Link
            href={github}
            target='_blank'
            class={styles.projectLink + ' ' + 'button'}>
            Voir le code
          </Link>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'LaReponseDev/Project',
  meta: [
    {
      name: 'description',
      content:
        "Boostez votre activité avec les applications sur mesure créées par LaReponseDev. Notre expertise en développement d'applications garantit des solutions innovantes et performantes pour répondre à vos besoins spécifiques. Contactez-nous dès maintenant pour concrétiser vos idées et propulser votre entreprise vers le succès numérique !",
    },
  ],
};
