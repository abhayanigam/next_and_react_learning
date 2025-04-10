import React from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../store/index"; 
import "./globals.css"; // Import global styles

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
