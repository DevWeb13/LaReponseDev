import { component$ } from '@builder.io/qwik';
import Header from '~/components/starter/header/header';
import Hero from '~/components/starter/hero/hero';
import ButtonNext from '~/components/starter/buttonNext/buttonNext';
import styles from './startView.module.css';

export default component$(() => {
  return (
    <div id={styles.startView}>
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
      <ButtonNext href='#projects' />
    </div>
  );
});