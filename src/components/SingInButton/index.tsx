import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, useSession } from 'next-auth/react';

export function SignInButton() {
  const { data: session } = useSession();

  console.log(session);

  console.log(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

  return session ? (
    <button type='button' className={styles.signInButton}>
      <FaGithub color='#04d361' />
      Breno Barbareli
      <FiX
        color='#737380'
        className={styles.closeIcon}
        onClick={() => signIn('github')}
      />
    </button>
  ) : (
    <button type='button' className={styles.signInButton}>
      <FaGithub color='#eba417' />
      Sign in with Github
    </button>
  );
}
