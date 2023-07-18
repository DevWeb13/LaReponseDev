import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css';

export default component$(() => {
  return (
    <div class={['container', styles.hero]}>
      <h1>
        Passez à la<span class='highlight'> vitesse supérieure</span> avec
        <span class='highlight'> LaReponseDev</span>
      </h1>
      <p>Transformez vos idées en applications performantes !</p>
      <div class={styles['button-group']}>
        <a
          href='#projets'
          class='button'>
          Mes projets
        </a>

        <a
          href='https://qwik.builder.io/docs'
          target='_blank'
          class='button button-dark'>
          Me contacter
        </a>
      </div>
    </div>
  );
});
