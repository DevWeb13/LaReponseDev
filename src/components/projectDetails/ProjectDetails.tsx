import type { Signal } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import styles from './projectDetails.module.css';

interface ProjectDetailsProps {
  pages: Array<{
    _id: string;
    image: string;
    description: string;
    url: string;
    features: string[];
  }>;
  indexSignal: Signal<number>;
}

export const ProjectDetails = component$(
  ({ pages, indexSignal }: ProjectDetailsProps) => {
    return (
      <div class={styles.projectDetailsContainer}>
        <h3 class={styles.projectDetailsTitle + ' ' + 'highlight'}>
          {pages[indexSignal.value].description}
        </h3>
        <ul class={styles.projectDetailsList}>
          {pages[indexSignal.value].features.map((feature: string) => (
            <div
              class={styles.projectDetailsItem}
              key={feature}>
              ⭐<li class={styles.projectDetailsItem}>{feature}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
);
