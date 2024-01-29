// src/routes/auth/signout/index.tsx

import { component$ } from '@builder.io/qwik';
// import { useAuthSignout } from '~/routes/plugin@auth';

export default component$(() => {
  // const signOut = useAuthSignout();
  return (
    <button
    // onClick$={() =>
    //   signOut.submit({ callbackUrl: 'http://localhost:5173/' })
    // }
    >
      Sign Out
    </button>
  );
});
