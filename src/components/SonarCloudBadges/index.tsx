import { component$ } from '@builder.io/qwik';
import styles from './sonarCloudBadges.module.css';
import { Link } from '@builder.io/qwik-city';

interface SonarCloudBadgesProps {
  sonarCloudProjectKey: string;
}

export default component$(({ sonarCloudProjectKey }: SonarCloudBadgesProps) => {
  return (
    <>
      <h2 class={styles.projectDetailsTitle + ' ' + 'highlight'}>
        Mesures{' '}
        <Link
          href={`https://sonarcloud.io/dashboard?id=${sonarCloudProjectKey}`}
          target='_blank'
          rel='noopener noreferrer'>
          SonarCloud.io
        </Link>
      </h2>

      <div class={styles.sonarcloudBadges}>
        <div class={styles.badgeGroup}>
          <h3>Résumé</h3>
          <img
            class={styles.badge}
            width={100}
            height={20}
            src={`https://sonarcloud.io/api/project_badges/measure?project=${sonarCloudProjectKey}&metric=ncloc`}
            alt='Lines of Code'
          />
          <img
            class={styles.badge}
            width={100}
            height={20}
            src={`https://sonarcloud.io/api/project_badges/measure?project=${sonarCloudProjectKey}&metric=duplicated_lines_density`}
            alt='Duplicated Lines (%)'
          />
          <img
            class={styles.badge}
            width={100}
            height={20}
            src={`https://sonarcloud.io/api/project_badges/measure?project=${sonarCloudProjectKey}&metric=bugs`}
            alt='Bugs'
          />
          <img
            class={styles.badge}
            width={100}
            height={20}
            src={`https://sonarcloud.io/api/project_badges/measure?project=${sonarCloudProjectKey}&metric=vulnerabilities`}
            alt='Vulnerabilities'
          />
        </div>
        <div class={styles.badgeGroup}>
          <h3>Score</h3>
          <img
            class={styles.badge}
            width={100}
            height={20}
            src={`https://sonarcloud.io/api/project_badges/measure?project=${sonarCloudProjectKey}&metric=sqale_rating`}
            alt='Maintainability Rating'
          />
          <img
            class={styles.badge}
            width={100}
            height={20}
            src={`https://sonarcloud.io/api/project_badges/measure?project=${sonarCloudProjectKey}&metric=reliability_rating`}
            alt='Reliability Rating'
          />
          <img
            class={styles.badge}
            width={100}
            height={20}
            src={`https://sonarcloud.io/api/project_badges/measure?project=${sonarCloudProjectKey}&metric=security_rating`}
            alt='Security Rating'
          />
        </div>
        <div class={styles.badgeGroup}>
          <h3>À faire</h3>
          <img
            class={styles.badge}
            width={100}
            height={20}
            src={`https://sonarcloud.io/api/project_badges/measure?project=${sonarCloudProjectKey}&metric=code_smells`}
            alt='Code Smells'
          />
          <img
            class={styles.badge}
            width={100}
            height={20}
            src={`https://sonarcloud.io/api/project_badges/measure?project=${sonarCloudProjectKey}&metric=sqale_index`}
            alt='Technical Debt'
          />
        </div>
      </div>
      <div class={styles.badgeGroup}>
        <img
          class={styles.badge}
          width={150}
          height={100}
          src={`https://sonarcloud.io/api/project_badges/quality_gate?project=${sonarCloudProjectKey}`}
          alt='Security Rating'
        />
      </div>
    </>
  );
});
