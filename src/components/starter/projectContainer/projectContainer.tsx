import { component$, useVisibleTask$, $, useSignal } from '@builder.io/qwik';
import styles from './projectContainer.module.css';
import type { Signal } from '@builder.io/qwik';
import type { Project } from '~/components/starter/projects/projects';

interface ProjectContainerProps {
  project: Project;
  indexOfPage: Signal<number>;
}

// interface PageProps {
//   page: Page;
// }

/**
 * This component is used to display a project in the projects page
 * @param   {Object}  props
 * @param   {Project} props.project - a project object
 * @param   {string}  props.project.name - the name of the project
 * @param   {string}  props.project.description - the description of the project
 * @param   {PageProps[]}  props.project.pages - the pages of the project
 * @param   {string}  props.project.gitHub - the link to the GitHub repository
 * @param   {string}  props.project.date - the date of the project
 * @param   {string}  props.project.category - the category of the project
 * @param   {string[]}  props.project.technologies - the technologies used in the project
 * @param   {string}  props.project.logo - the logo of the project
 * @returns {JSX} - a JSX element.
 *
 */
export const ProjectContainer = component$(
  ({ project, indexOfPage }: ProjectContainerProps) => {
    const imgRef = useSignal<Element>();
    const isHovered = useSignal(false);

    const setIndexOfPage = $((newValue: number) => {
      if (newValue > project.pages.length - 1) {
        return (indexOfPage.value = 0);
      }
      if (newValue < 0) {
        return project.pages.length - 1;
      }
      return (indexOfPage.value = newValue);
    });

    useVisibleTask$(({ cleanup }) => {
      setTimeout(() => {
        imgRef?.value?.classList.add(styles.projectImgAnimExit);
      }, 4700);

      const update = () => {
        imgRef?.value?.classList.remove(styles.projectImgAnimExit);
        imgRef?.value?.classList.add(styles.projectImgAnimEnter);
        setTimeout(() => {
          imgRef?.value?.classList.remove(styles.projectImgAnimEnter);
          imgRef?.value?.classList.add(styles.projectImgAnimationStop);
          setIndexOfPage(indexOfPage.value + 1);
        }, 300);

        setTimeout(() => {
          imgRef?.value?.classList.remove(styles.projectImgAnimationStop);
          imgRef?.value?.classList.add(styles.projectImgAnimExit);
        }, 4700);
      };

      const interval = setInterval(update, 5000);
      cleanup(() => clearInterval(interval));
    });

    return (
      <article class={styles.projectContainer}>
        <div
          class={styles.projectImgContainer}
          onMouseEnter$={(event, currentTarget) => {
            isHovered.value = true;
            currentTarget.classList.add(styles.projectImgHover);
          }}
          onMouseLeave$={(event, currentTarget) => {
            isHovered.value = false;
            currentTarget.classList.remove(styles.projectImgHover);
          }}>
          <button
            class={styles.projectButton + ' ' + styles.projectButtonLeft}
            onClick$={() => setIndexOfPage(indexOfPage.value - 1)}>
            P
          </button>
          <img
            src={project.pages[indexOfPage.value].image}
            alt='project'
            class={styles.projectImg}
            width={400}
            height={220}
            ref={imgRef}
          />
        </div>
        <a
          class={styles.projectUrl + ' highlight'}
          href={project.pages[indexOfPage.value].url}
          target='_blank'
          rel='noopener noreferrer'>
          {project.pages[indexOfPage.value].url}
        </a>
        <h2 class={styles.projectName}>{project.name}</h2>
        <p class={styles.projectDescription}>{project.description}</p>
        <div class={styles.projectButtonContainer}>
          <a
            href={project.gitHub}
            class='button'
            target='_blank'
            rel='noopener noreferrer'>
            GitHub
          </a>
          <div class='logoContainer'>
            <img
              src={project.logo}
              alt='logo'
              class={styles.projectLogo}
              width={50}
              height={50}
            />
          </div>

          <a
            href={project.pages[indexOfPage.value].url}
            class='button'
            target='_blank'
            rel='noopener noreferrer'>
            Démo
          </a>
        </div>
      </article>
    );
  }
);
