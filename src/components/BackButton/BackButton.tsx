import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Retour</Link>
        </li>
      </ul>
    </nav>
  );
});
