import { http, createConfig } from "wagmi";
import { fallback } from "viem";
import { polygon } from "wagmi/chains";
import { walletConnect, injected } from "wagmi/connectors";

export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "";

const polygonTransports = [
  http("https://polygon-rpc.com", { retryCount: 2, retryDelay: 500 }),
  http("https://polygon.llamarpc.com", { retryCount: 2, retryDelay: 500 }),
  http("https://rpc.ankr.com/polygon", { retryCount: 2, retryDelay: 500 }),
  http("https://polygon.drpc.org", { retryCount: 2, retryDelay: 500 }),
].filter(Boolean) as ReturnType<typeof http>[];

export const config = createConfig({
  chains: [polygon],
  connectors: [
    walletConnect({ projectId, showQrModal: false }),
    injected(),
  ],
  transports: {
    [polygon.id]: fallback(polygonTransports, { rank: true }),
  },
});
