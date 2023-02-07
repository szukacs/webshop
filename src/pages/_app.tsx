import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react"

import store from "@/store";
import {persistStore} from "redux-persist";
let persistor = persistStore(store);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
