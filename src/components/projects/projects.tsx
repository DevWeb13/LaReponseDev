import { component$ } from '@builder.io/qwik';

import styles from './projects.module.css';
import { useProjectsLoader } from '~/routes/layout';
import { Link } from '@builder.io/qwik-city';

export interface Page {
  _id: string;
  image: string;
  description: string;
  url: string;
  features: string[];
}

export interface Project {
  _id: string;
  name: string;
  description: string;
  url: string;
  image: string;
  pages: Page[];
  github: string;
  date: string;
  category: string;
  technologies: string[];
  logo: string;
}

export default component$(() => {
  /**  @constant {Project[]} projects - the list of the projects*/
  const projects = useProjectsLoader();

  console.log('projects', projects.value);

  return (
    <div class={styles.projectsContainer + ' container  center'}>
      <h2 class={styles.projectsTitle}>
        Les projets de <span class='highlight'>LaReponseDev</span>
      </h2>
      <section
        id='projects'
        class={styles.projects}>
        {projects.value.map((project: Project) => (
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
        ))}
      </section>
    </div>
  );
});
