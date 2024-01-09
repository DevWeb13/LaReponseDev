import type { Signal } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import Header from '~/components/header/header';
import Hero from '~/components/starter/hero/hero';
import styles from './startView.module.css';

export default component$(
  ({
    id = 'home',
    ref,
  }: {
    id?: string;
    ref?: Signal<HTMLElement | undefined>;
  }) => {
    return (
      <section
        class={styles.startView}
        id={id}
        ref={ref}>
        <Header />
        <div class={styles.videoContainer}>
          <video
            autoPlay
            muted
            loop
            playsInline
            id={styles.myVideo}>
            <source
              src='./star.mp4'
              type='video/mp4'
            />
          </video>
        </div>
        <Hero />
      </section>
    );
  }
);
