import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css';
import { Link } from '@builder.io/qwik-city';
import { LineMdLaptop, LineMdEmail } from '../../icons/AnimatedIcons';

export default component$(() => {
  return (
    <div class={['container', styles.hero]}>
      <h1>
        Passez à la<span class='highlight'> vitesse supérieure</span> avec
        <span class='highlight'> LaReponseDev</span>
      </h1>
      <h2 class={styles.heroH2}>Création de site web</h2>
      <h3>Transformez vos idées en applications performantes</h3>
      <div class={styles['button-group']}>
        <Link
          href='#projets'
          class='button'>
          <LineMdLaptop
            height={40}
            width={40}
          />
          Réalisations
        </Link>

        <Link
          href='https://qwik.builder.io/docs'
          target='_blank'
          class='button button-dark'>
          <LineMdEmail
            height={40}
            width={40}
          />
          Me contacter
        </Link>
      </div>
    </div>
  );
});
