// src/routes/auth/signin/index.tsx

import { component$ } from '@builder.io/qwik';
// import { useAuthSignin } from '~/routes/plugin@auth';
import { LogoGithub } from '~/components/icons/logoGithub';
import { LogoGoogle } from '~/components/icons/logoGoogle';
import Button from '~/components/Button/Button';

export default component$(() => {
  // const signIn = useAuthSignin();
  return (
    <>
      <h1>Se connecter</h1>
      <div class='containerSmall'>
        {/* <Button
          class='button   flex center'
          onClick$={() =>
            signIn.submit({
              providerId: 'google',
            })
          }>
          <LogoGoogle />
        </Button>

        <Button
          class='button   flex center'
          onClick$={() =>
            signIn.submit({
              providerId: 'github',
            })
          }>
          <LogoGithub />
        </Button> */}
      </div>
    </>
  );
});
