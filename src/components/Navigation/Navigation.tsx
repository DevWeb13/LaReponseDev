// src/components/Navigation/Navigation.tsx

import { component$ } from '@builder.io/qwik';
import { NavLink } from '../NavLink/NavLink';
import styles from './navigation.module.css';
import {
  LineMdHomeMd,
  LineMdDownloadingLoop,
  LineMdLaptop,
  LineMdEmail,
} from '../icons/AnimatedIcons';

export default component$(() => {
  return (
    <nav class={styles.nav}>
      <NavLink
        href='#home'
        activeClass={styles.active}>
        <LineMdHomeMd
          height={30}
          width={30}
          class={styles.icon}
        />

        <span class={styles.navLinkText}>Accueil</span>
      </NavLink>
      <NavLink
        href='#services'
        activeClass={styles.active}>
        <LineMdDownloadingLoop
          height={30}
          width={30}
          class={styles.icon}
        />
        <span class={styles.navLinkText}>Mes services</span>
      </NavLink>
      <NavLink
        href='#projects'
        activeClass={styles.active}>
        <LineMdLaptop
          height={30}
          width={30}
          class={styles.icon}
        />
        <span class={styles.navLinkText}>Réalisations</span>
      </NavLink>
      <NavLink
        href='#contact'
        activeClass={styles.active}>
        <LineMdEmail
          height={30}
          width={30}
          class={styles.icon}
        />
        <span class={styles.navLinkText}>Contact</span>
      </NavLink>
    </nav>
  );
});
