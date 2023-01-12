import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";
import Attendance from "./components/Attendance/Attendance";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Attendance/>
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
  );
}

export default MyApp;
