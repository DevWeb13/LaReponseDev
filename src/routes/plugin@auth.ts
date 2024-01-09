// src/routes/plugin@auth.ts

import { serverAuth$ } from '@builder.io/qwik-auth';
import Google from '@auth/core/providers/google';
import GitHub from '@auth/core/providers/github';

import type { Provider } from '@auth/core/providers';

import connect from '~/server/connect-db';
import User from '~/server/models/User';

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get('AUTH_SECRET'),
    trustHost: true,
    pages: {
      signIn: '/auth/signin',
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
    callbacks: {
      signIn: async ({ user }) => {
        // console.log({ user, account, profile });
        try {
          await connect();

          const existingUser = await User.findOne({ email: user.email });

          if (existingUser) {
            if (
              user.name !== existingUser.name ||
              user.image !== existingUser.image
            ) {
              await User.updateOne(
                { email: user.email },
                { $set: { name: user.name, image: user.image } }
              );
            }
            return true;
          }

          await User.create(user);
          return true;
        } catch (err) {
          console.error("Erreur lors de la création de l'utilisateur :", err);
          throw new Error("Échec de la création de l'utilisateur");
        }
      },
    },
  }));
