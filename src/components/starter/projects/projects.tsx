import { component$, useSignal } from '@builder.io/qwik';
import { useProjectsLoader } from '~/routes/layout';
import { ProjectContainer } from '~/components/starter/projectContainer/projectContainer';
import styles from './projects.module.css';

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
  pages: Page[];
  gitHub: string;
  date: string;
  category: string;
  technologies: string[];
  logo: string;
}

export default component$(() => {
  /**  @constant {Project[]} projects - the list of the projects*/
  const projects = useProjectsLoader();

  const indexOfPage = useSignal(0);

  return (
    <div
      class={
        styles.projectsContainer + ' container container-flex container-center'
      }>
      <h2 class='projectsTitle'>
        Les projets de <span class='highlight'>LaReponseDev</span>
      </h2>
      <section
        id='projects'
        class={styles.projects}>
        {projects &&
          projects.value.map((project: Project) => (
            <ProjectContainer
              key={project._id}
              project={project}
              indexOfPage={indexOfPage}
            />
          ))}
      </section>
    </div>
  );
});
