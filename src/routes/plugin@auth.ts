import { serverAuth$ } from '@builder.io/qwik-auth';
import Google from '@auth/core/providers/google';
import GitHub from '@auth/core/providers/github';
import type { Provider } from '@auth/core/providers';

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get('AUTH_SECRET'),
    trustHost: true,
    pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
      error: '/auth/error',
      verifyRequest: '/auth/verify-request',
      newUser: '/auth/new-user',
    },
    theme: {
      colorScheme: 'dark', // ou 'dark'
      brandColor: '#ff5722', // Exemple de couleur
      colorText: 'white', // Exemple de couleur de texte
      logo: '/assets/svg/logoLRD.svg', // URL de votre logo
    },

    providers: [
      Google({
        clientId: env.get('GOOGLE_ID')!,
        clientSecret: env.get('GOOGLE_SECRET')!,
      }),
      GitHub({
        clientId: env.get('GITHUB_ID')!,
        clientSecret: env.get('GITHUB_SECRET')!,
      }),
    ] as Provider[],
  }));
