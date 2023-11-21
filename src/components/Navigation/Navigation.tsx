import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { useAuthSession } from '~/routes/plugin@auth';

export default component$(() => {
  const session = useAuthSession();

  console.log(session.value?.user);
  return (
    <nav>
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
    </nav>
  );
});
