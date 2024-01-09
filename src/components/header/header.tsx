import { component$ } from '@builder.io/qwik';
import { LogoTricolor } from '../icons/logoTricolor';
import styles from './header.module.css';
import { Link, useLocation } from '@builder.io/qwik-city';
import Navigation from '~/components/Navigation/Navigation';
import BackButton from '~/components/BackButton/BackButton';
import LogLink from '../LogLink/LogLink';

export default component$(() => {
  const location = useLocation();

  return (
    <header class={styles.header}>
      <Link
        href='/'
        title='lareponsedev'>
        <LogoTricolor
          height={150}
          width={150}
        />
      </Link>
      {location.url.pathname === '/' ? (
        <>
          <Navigation />
          <LogLink />
        </>
      ) : (
        <BackButton />
      )}
    </header>
  );
});
