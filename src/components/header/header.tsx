import { component$ } from '@builder.io/qwik';
import { LogoTricolor } from '../icons/logoTricolor';
import styles from './header.module.css';
import { Link } from '@builder.io/qwik-city';
// Importer la fonction pour utiliser la session utilisateur
import { useAuthSession } from '~/routes/plugin@auth';

export default component$(() => {
  const session = useAuthSession();

  console.log(session.value?.user);
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
            {/* Afficher "Se déconnecter" si l'utilisateur est connecté, sinon "Se connecter" */}
            {session.value?.user ? (
              <a href={'/api/auth/signout?callbackUrl=http://localhost:5173'}>
                Se déconnecter
              </a>
            ) : (
              <a href={'/api/auth/signin?callbackUrl=http:///localhost:5173'}>
                Se connecter
              </a>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
});
