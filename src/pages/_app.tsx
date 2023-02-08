import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react"

import store from "@/store";
import {persistStore} from "redux-persist";
import Head from "next/head";
let persistor = persistStore(store);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My web shop</title>
        <meta name="description" content="Online web shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>

  );
}
