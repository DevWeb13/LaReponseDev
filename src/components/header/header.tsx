import { component$ } from '@builder.io/qwik';
import { LogoTricolor } from '../icons/logoTricolor';
import styles from './header.module.css';
import { Link } from '@builder.io/qwik-city';
// import { useAuthSignin } from '~/routes/plugin@auth';

export default component$(() => {
  // const signIn = useAuthSignin();
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <Link
            href='/'
            title='lareponsedev'>
            <LogoTricolor
              height={150}
              width={150}
            />
          </Link>
        </div>
        <ul>
          <li>
            <Link href='#projets'>Mes projets</Link>
          </li>
          <li>
            <Link href='#examples'>Me contacter</Link>
          </li>
          <li>
            <Link href='/api/auth/signin'>Se connecter</Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
