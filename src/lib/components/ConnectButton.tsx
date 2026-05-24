import { ConnectButton as RainbowKitConnectButton } from '@rainbow-me/rainbowkit';

export default function ConnectButton({ className }: { className?: string }) {
  return (
    <div className={className}>
      <RainbowKitConnectButton />
    </div>
  );
}
