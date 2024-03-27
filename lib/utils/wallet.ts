import { Wallet, utils, ethers  } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_RPC}`
);


export async function createWallet() {
  const wallet = Wallet.fromMnemonic(
    utils.entropyToMnemonic(utils.randomBytes(32))
  );

  return {
    address: wallet.address,
    mnemonic: wallet.mnemonic.phrase,
    privateKey: wallet.privateKey,
  };
}

export async function importWallet(mnmonic: string) {
  const wallet = Wallet.fromMnemonic(mnmonic);

  return {
    address: wallet.address,
    mnemonic: wallet.mnemonic.phrase,
    privateKey: wallet.privateKey,
  };
}

export async function getBalance(address: string) {
  try {
    // Obtener el saldo
    const balance = await provider.getBalance(
      address
    );
    // Convertir el saldo a ETH y devolverlo
    return ethers.utils.formatEther(balance);
  } catch (error) {
    console.error("Error al obtener el saldo:", error);
    return null;
  }
}

export const Sendtransfer = async (to: string, from: string, key: string) => {

  const wallet = new ethers.Wallet(key, provider);

  const senderBalanceBefore = await provider.getBalance(from);
  const recieverBalanceBefore = await provider.getBalance(to);

  console.log(
    `\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`
  );
  console.log(
    `reciever balance before: ${ethers.utils.formatEther(
      recieverBalanceBefore
    )}\n`
  );

  const tx = await wallet.sendTransaction({
    to: to,
    value: ethers.utils.parseEther("0.0001"),
  });

  await tx.wait();
  console.log(tx);

  const senderBalanceAfter = await provider.getBalance(from);
  const recieverBalanceAfter = await provider.getBalance(to);

  console.log(
    `\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`
  );
  console.log(
    `reciever balance after: ${ethers.utils.formatEther(
      recieverBalanceAfter
    )}\n`
  );
};
