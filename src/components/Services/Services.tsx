// src/components/Services/Services.tsx

import type { Signal } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

export default component$(
  ({
    id = 'services',
    ref,
  }: {
    id?: string;
    ref?: Signal<HTMLElement | undefined>;
  }) => {
    return (
      <section
        class='hero container center'
        id={id}
        ref={ref}>
        <h1>
          <span class='highlight'>LaReponseDev</span>
          <br /> est là pour vous
        </h1>
        <p>
          Boostez votre activité avec les applications sur mesure développé par
          LaReponseDev. Notre expertise en développement d'applications garantit
          des solutions innovantes et performantes pour répondre à vos besoins
          spécifiques. Contactez-nous dès maintenant pour concrétiser vos idées
          et propulser votre entreprise vers le succès numérique !
        </p>
        <a
          href='https://qwik.builder.io/docs'
          target='_blank'
          class='button button-primary'>
          Get Started
        </a>
      </section>
    );
  }
);
