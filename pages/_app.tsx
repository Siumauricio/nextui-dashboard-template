import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { Layout } from "../components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider defaultTheme="system" attribute="class">
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
export default MyApp;
