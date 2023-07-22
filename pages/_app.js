import Head from "next/head";
import theme from "@/config/theme";
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
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Krub' rel='stylesheet'/>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
