import "../styles/globals.css";
import type { AppProps } from "next/app";
import { trpc } from "../utils/trpc";
import {PlayersProvider} from '../context/PlayersContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <PlayersProvider>
    <Component {...pageProps} />
  </PlayersProvider>
}

export default trpc.withTRPC(MyApp);
