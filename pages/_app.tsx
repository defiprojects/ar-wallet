import type { AppProps } from "next/app";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { WalletProvider } from "@/context/WalletContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <ChakraProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </WalletProvider>
  );
}
