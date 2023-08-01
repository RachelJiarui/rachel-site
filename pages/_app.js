import Head from "next/head";
import ThemeProvider from "@/config/StyledMaterialThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Anaheim"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=REM:wght@600&display=swap" rel="stylesheet"></link>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
