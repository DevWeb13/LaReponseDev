import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { useAuthSignin } from '~/routes/plugin@auth';

export default component$(() => {
  const location = useLocation();
  const signIn = useAuthSignin();
  console.log('location', location);
  const callbackUrl = location.url.searchParams.get('callbackUrl');
  console.log('callbackUrl', callbackUrl);

  const url = 'http://localhost:5173';
  const nextUri = callbackUrl ? `${callbackUrl}` : url;
  return (
    <button
      onClick$={() =>
        signIn.submit({
          providerId: 'google',
          options: { callbackUrl: nextUri },
        })
      }>
      Sign In
    </button>
  );
});
