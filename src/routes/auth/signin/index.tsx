import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import SignInForm from '~/components/SignInForm/SignInForm';
import { useAuthSignin } from '~/routes/plugin@auth';
import { LogoGithub } from '~/components/icons/logoGithub';
import { LogoGoogle } from '~/components/icons/logoGoogle';

export default component$(() => {
  const location = useLocation();
  const signIn = useAuthSignin();
  console.log('location', location);
  const callbackUrl = location.url.searchParams.get('callbackUrl');
  console.log('callbackUrl', callbackUrl);

  const url = 'http://localhost:5173';
  const nextUri = callbackUrl ? `${callbackUrl}` : url;
  return (
    <section class='connexionContainer logContainer container'>
      <article class='logCardContainer container radius'>
        <h1>Se connecter</h1>
        <SignInForm nextUri={nextUri} />
        <p class='text-center'>Ou connectez-vous avec un de ces services</p>
        <div class=' container'>
          <button
            type='button'
            class='button button-primary buttonIcon flex center'
            onClick$={() =>
              signIn.submit({
                providerId: 'google',
                options: { callbackUrl: nextUri },
              })
            }>
            <LogoGoogle />
          </button>

          <button
            type='button'
            class='button button-primary buttonIcon flex center'
            onClick$={() =>
              signIn.submit({
                providerId: 'github',
                options: { callbackUrl: nextUri },
              })
            }>
            <LogoGithub />
          </button>
        </div>
      </article>
    </section>
  );
});
