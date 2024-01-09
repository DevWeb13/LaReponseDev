// src/components/LogLink/LogLink.tsx

import { component$ } from '@builder.io/qwik';
import styles from './logLink.module.css';
import { Link } from '@builder.io/qwik-city';
import { useAuthSession } from '~/routes/plugin@auth';
import { LineMdLogIn, LineMdLogOut } from '../icons/AnimatedIcons';

export default component$(() => {
  const session = useAuthSession();

  return (
    <aside class={styles.logLink}>
      {session.value?.user ? (
        <Link
          href={'auth/signout'}
          class='button'>
          <span class={styles.linkText}>Se déconnecter</span>
          <LineMdLogOut
            height={30}
            width={30}
          />
        </Link>
      ) : (
        <Link
          href={'/auth/signin'}
          class='button'>
          <LineMdLogIn
            height={30}
            width={30}
          />
          <span class={styles.linkText}>Se connecter</span>
        </Link>
      )}
    </aside>
  );
});
