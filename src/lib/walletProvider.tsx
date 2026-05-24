'use client';

import { WagmiConfig, createConfig, http } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Custom Polygon RPC configuration
const polygonRpc = {
  http: [
    'https://polygon-rpc.com',
    'https://rpc.ankr.com/polygon'
  ]
};

const chains = [polygon] as const;

const { connectors } = getDefaultWallets({
  appName: 'BroilerPlus',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
});

const config = createConfig({
  chains,
  connectors,
  transports: {
    [polygon.id]: http(...polygonRpc.http),
  },
  ssr: true,
});

const queryClient = new QueryClient();

export function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}