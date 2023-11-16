import { component$ } from '@builder.io/qwik';
import styles from './buttonNext.module.css';

interface ButtonNextProps {
  href: string;
}

/**
 * ButtonNext component
 * @param {object} props - props of the component
 * @param {string} props.href - href of the next section
 * @returns a button to go to the next section
 */
export default component$<ButtonNextProps>(({ href }) => {
  return (
    <div class={styles.buttonNext}>
      <a href={href}>
        <svg
          width='100px'
          height='100px'
          viewBox='-3.2 -3.2 38.40 38.40'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlns:xlink='http://www.w3.org/1999/xlink'
          fill='#ffffff'
          transform='rotate(90)matrix(1, 0, 0, 1, 0, 0)'
          stroke='#ffffff'>
          <g
            id='SVGRepo_bgCarrier'
            stroke-width='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            stroke-linecap='round'
            stroke-linejoin='round'></g>
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <g id='icomoon-ignore'> </g>{' '}
            <path
              d='M1.073 7.47v17.060l14.928-8.531-14.928-8.529zM2.139 9.307l11.712 6.692-11.712 6.693v-13.385z'
              fill='#000000'>
              {' '}
            </path>{' '}
            <path
              d='M16 7.47v17.060l14.928-8.531-14.928-8.529zM17.066 9.307l11.712 6.692-11.712 6.693v-13.385z'
              fill='#000000'>
              {' '}
            </path>{' '}
          </g>
        </svg>
      </a>
    </div>
  );
});
