// src/components/Button/Button.tsx

import { Slot, component$ } from '@builder.io/qwik';
import styles from './button.module.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'; // Type rendu optionnel
  class?: string;
  onClick$?: () => void;
}

export default component$<ButtonProps>(
  ({ type = 'button', class: cls, onClick$, ...rest }) => {
    return (
      <button
        {...rest}
        type={type} // Utilisation de la prop type avec la valeur par défaut
        class={`${styles.button} ${cls}`}
        // eslint-disable-next-line qwik/valid-lexical-scope
        onClick$={onClick$}>
        <Slot />
      </button>
    );
  }
);
