import { useWallet } from "@/context/WalletContext";
import {
  Avatar,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const TokenList = () => {
  const { balance } = useWallet();

  const [tokenPrices, setTokenPrices] = useState<any>({});

  useEffect(() => {
    const fetchTokenPrices = async () => {
      try {
        const response = await fetch(
          "https://api.geckoterminal.com/api/v2/simple/networks/eth/token_price/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2%2C0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
        );
        if (response.ok) {
          const data = await response.json();
          setTokenPrices(
            data.data.attributes.token_prices[
              "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
            ]
          );
        } else {
          throw new Error("Failed to fetch token prices");
        }
      } catch (error) {
        console.error("Error fetching token prices:", error);
      }
    };

    fetchTokenPrices();
  }, []);

  return (
    <Stack>
      <Skeleton isLoaded={balance?.balance && tokenPrices}>
        <HStack justify={"space-between"}>
          <HStack>
            <Avatar bg="teal.500" size={"sm"} name="Ethereum" />
            <Stack>
              <Text>ETH</Text>
              <Text>Ethereum</Text>
            </Stack>
          </HStack>
          <Stack>
            <Text textAlign={"end"}>{balance?.balance?.toFixed(4)} ETH</Text>

            <Text textAlign={"end"}>
              ${(balance?.balance * tokenPrices).toFixed(2)} USD
            </Text>
          </Stack>
        </HStack>
      </Skeleton>
    </Stack>
  );
};
