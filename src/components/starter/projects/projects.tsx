import { component$ } from '@builder.io/qwik';
import { useProjectsLoader } from '~/routes/layout';

interface Project {
  _id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  gitHub: string;
  technologies: string[];
  date: string;
}

export default component$(() => {
  const projects = useProjectsLoader();

  return (
    <ul>
      {projects.value.map((project: Project) => (
        <li key={project._id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <img
            src={project.image}
            alt={project.name}
            width='200'
            height='200'
          />
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'>
            {project.link}
          </a>
          <a
            href={project.gitHub}
            target='_blank'
            rel='noopener noreferrer'>
            {project.gitHub}
          </a>
          <ul>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <p>{project.date}</p>
        </li>
      ))}
    </ul>
  );
});
