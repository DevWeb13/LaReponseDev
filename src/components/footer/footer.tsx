import { component$ } from '@builder.io/qwik';
import Clock from '~/components/starter/clock/clock';
import styles from './footer.module.css';

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <div class='container'>
        <a
          href='https://www.builder.io/'
          target='_blank'
          class={styles.anchor}>
          <span>Fait avec ♡ par LaReponseDev</span>
          <span class={styles.spacer}>|</span>
          <Clock />
        </a>
      </div>
    </footer>
  );
});
