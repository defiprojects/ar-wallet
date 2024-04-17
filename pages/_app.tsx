import type { AppProps } from "next/app";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { WalletProvider } from "@/context/WalletContext";
import GoogleAnalytics from "@/lib/utils/GoogleAnalytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <ChakraProvider>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
        <Container>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </WalletProvider>
  );
}
