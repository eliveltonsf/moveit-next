import type { AppProps } from 'next/app';
import 'styles/global.css';

import { ChallengesProvider } from 'contexts/ChallengesContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
}
