import { FC } from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.scss'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <Layout  {...pageProps}>
        <Component {...pageProps} />
      </Layout>
  );
};


export { App as default };