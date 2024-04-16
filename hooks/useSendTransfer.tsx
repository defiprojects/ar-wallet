import { useState } from "react";
import { ethers } from "ethers";
import { ExternallyOwnedAccount } from "@ethersproject/abstract-signer";

const useSendTransfer = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [tx, settx] = useState<string>();

  const sendTransfer = async (
    to: string | Promise<string>,
    value: string,
    from: string | Promise<string>,
    key:
      | ethers.utils.BytesLike
      | ExternallyOwnedAccount
      | ethers.utils.SigningKey
  ) => {
    try {
      setLoading(true);

      const provider = new ethers.providers.JsonRpcProvider(
        `https://rpc-testnet.morphl2.io`
      );
      const wallet = new ethers.Wallet(key, provider);

      const senderBalanceBefore = await provider.getBalance(from);
      const recieverBalanceBefore = await provider.getBalance(to);

      console.log(
        `\nSender balance before: ${ethers.utils.formatEther(
          senderBalanceBefore
        )}`
      );
      console.log(
        `Receiver balance before: ${ethers.utils.formatEther(
          recieverBalanceBefore
        )}\n`
      );

      const tx = await wallet.sendTransaction({
        to: to,
        value: ethers.utils.parseEther(value),
      });

      await tx.wait();
      console.log(tx);
 
      const senderBalanceAfter = await provider.getBalance(from);
      const recieverBalanceAfter = await provider.getBalance(to);

      console.log(
        `\nSender balance after: ${ethers.utils.formatEther(
          senderBalanceAfter
        )}`
      );
      console.log(
        `Receiver balance after: ${ethers.utils.formatEther(
          recieverBalanceAfter
        )}\n`
      );

      setSuccess(true);
      settx(tx.hash);
    } catch (error) {
      console.error("Error sending transfer:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
      
    }
  };

  return { sendTransfer, loading, success, tx };
};

export default useSendTransfer;
