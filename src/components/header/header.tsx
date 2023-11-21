import { component$ } from '@builder.io/qwik';
import { LogoTricolor } from '../icons/logoTricolor';
import styles from './header.module.css';
import { Link, useLocation } from '@builder.io/qwik-city';
import Navigation from '~/components/Navigation/Navigation';
import BackButton from '~/components/BackButton/BackButton';

export default component$(() => {
  const location = useLocation();
  console.log('location', location);
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
        {location.url.pathname === '/' ? <Navigation /> : <BackButton />}
      </div>
    </header>
  );
});
