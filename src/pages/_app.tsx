import "../../styles/globals.css";
import "../../styles/reset.css";
import type { AppProps } from "next/app";
import { useLiff } from "~/hook/liff";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { liffObject, liffError } = useLiff();

  // Provide `liff` object and `liffError` object
  // to page component as property
  pageProps.liff = liffObject;
  pageProps.liffError = liffError;
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
