'use client'
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useAccount, useEnsName } from "wagmi";

export default function Home() {
//state variables for the user's ENS name . It will be blank ("") if inexistent
  const [ens, setEns] = useState("");

  const { address } = useAccount();
  console.log(address);

  const ensName = useEnsName({
    address: address,
  });

  console.log(ensName.data);
  //will be undefined if the user doesn't have an ens name

//the useEffect below will change our ens variable's value to whatever is returned by the useEnsName() hook.
  useEffect(() => {
    setEns(ensName.data);
  }, [ensName.data]);

  const renderButton = () => {
    if (address) {
      // Fix: Adding return statement for when wallet is connected
      return (
        <div className="p-4 rounded-lg bg-green-600 text-white font-bold">
          Wallet connected
        </div>
      );
    } else {
      return (
       <div className="connect-button-wrapper">
         <ConnectButton showBalance={true} chainStatus="icon" />
       </div>
      );
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex justify-center items-center font-sans p-8 max-[1000px]:flex-col max-[1000px]:justify-center max-[1000px]:items-center">
        <div className="lg:pl-12 max-w-lg">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Welcome to LearnWeb3 Punks
            {ens || address ? (
              <div className="mt-2 text-3xl">
                {ens ? ens : address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ""}!
              </div>
            ) : null}
          </h1>
          <div className="mb-8 text-xl leading-relaxed opacity-80">
            It&#39;s an NFT collection for LearnWeb3 Punks.
          </div>
          <div className="mt-6">
            {renderButton()}
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center p-6">
          <Image 
            src="/learnweb3punks.png" 
            alt="LearnWeb3 Punks NFT" 
            width={400} 
            height={400}
            className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          />
        </div>
      </div>

      <footer className="py-6 border-t border-gray-700 text-center">
        <p className="text-lg">Made with <span className="text-red-500">&#10084;</span> by LearnWeb3 Punks</p>
      </footer>
    </div>
  );
}