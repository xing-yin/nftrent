import { mainnet, sepolia } from 'wagmi/chains'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "60f7a70f81488d615ba7f46086b12103";

export const metadata = {
    name: "Next Starter Template",
    description: "A Next.js starter template with Web3Modal v3 + Wagmi",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
};



// Create wagmiConfig
export const chains= [mainnet, sepolia] as const
export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true
})