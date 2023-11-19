import { serverAuth$ } from '@builder.io/qwik-auth';
import Google from '@auth/core/providers/google';
import GitHub from '@auth/core/providers/github';
import type { Provider } from '@auth/core/providers';

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get('AUTH_SECRET'),
    trustHost: true,

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
