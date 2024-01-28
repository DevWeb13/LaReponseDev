// src/components/projects/projects.tsx

import type { Signal } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import styles from './projects.module.css';
// import { useProjectsLoader } from '~/routes/layout';
// import { Link } from '@builder.io/qwik-city';

export default component$(
  ({
    id = 'projects',
    ref,
  }: {
    id?: string;
    ref?: Signal<HTMLElement | undefined>;
  }) => {
    // const projects = useProjectsLoader();
    // // console.log(projects.value);

    // if ('errorMessage' in projects.value) {
    //   return <div>{projects.value.errorMessage}</div>;
    // }

    return (
      <section
        class={styles.projectsContainer + ' container  center'}
        id={id}
        ref={ref}>
        <h2 class={styles.projectsTitle}>
          Les projets de <span class='highlight'>LaReponseDev</span>
        </h2>
        {/* <div class={styles.projects}>
          {projects.value?.map((project) => (
            <div
              class={styles.projectContainer}
              key={project._id}>
              <img
                src={project.image}
                alt={project.description}
                class={styles.projectImg}
                width={300}
                height={300}
              />

              <div class={styles.projectContent}>
                <h3 class={styles.projectName + ' ' + 'highlight'}>
                  {project.name}
                </h3>
                <p class={styles.projectDate}>{project.date}</p>
                <p>{project.description}</p>
                <div class={styles.logoContainer}>
                  <img
                    src={project.logo}
                    alt={project.name + '' + 'logo'}
                    width={project.name === 'Cars Pat' ? 150 : 30}
                    height={30}
                  />
                </div>
                <Link
                  href={`/project/${project._id}`}
                  class={styles.button + ' ' + 'button'}>
                  En savoir plus
                </Link>
                <Link
                  href={project.url}
                  class={styles.button + ' ' + 'button'}
                  target='_blank'
                  rel='noopener noreferrer'>
                  Voir le site
                </Link>
                <Link
                  href={project.github}
                  class={styles.button + ' ' + 'button'}
                  target='_blank'
                  rel='noopener noreferrer'>
                  GitHub
                </Link>
              </div>
            </div>
          ))} */}
        {/* </div> */}
      </section>
    );
    // return <div>test</div>;
  }
);
