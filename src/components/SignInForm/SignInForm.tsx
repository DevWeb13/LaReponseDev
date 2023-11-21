import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './signInForm.css?inline';

interface Props {
  nextUri: string;
}

export default component$((props: Props) => {
  useStyles$(styles);
  return (
    <form
      action='/api/auth/signin'
      method='POST'
      class='formContainer'>
      <input
        type='hidden'
        name='callbackUrl'
        value={props.nextUri}
      />
      <div class='formElmContainer'>
        <label for='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
        />
        <p class='errorContainer'>Error</p>
      </div>
      <div class='formElmContainer'>
        <label for='password'>Mot de passe</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Mot de passe'
        />
        <p class='errorContainer'>Error</p>
      </div>
      <a
        href='/api/auth/forgot-password'
        class='forgotPassword'>
        Mot de passe oublié ?
      </a>
      <button
        type='submit'
        class='button highlight'>
        Se connecter
      </button>
    </form>
  );
});
