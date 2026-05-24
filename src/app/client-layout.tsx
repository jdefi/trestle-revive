'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAccount, useBalance } from 'wagmi';
import ConnectButton from '../lib/components/ConnectButton';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#609C41] to-[#346EB8] relative">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo.svg" alt="BroilerPlus" width={32} height={32} className="h-8 w-auto" />
                <span className="text-xl font-bold text-gray-900">BroilerPlus</span>
              </Link>
            </div>
            <div className="flex items-center">
              <ConnectButton />
            </div>
          </div>
        </div>
      </header>
      
      {!address ? (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-[#609C41] to-[#346EB8] rounded-full flex items-center justify-center mx-auto mb-6">
              <Image src="/assets/img/brt.png" alt="BRT Token" width={24} height={24} className="rounded-full" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to BroilerPlus
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md">
              Connect your wallet to access DeFi features and start earning rewards
            </p>
            <ConnectButton />
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      )}
      
      {address && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white bg-opacity-90 rounded-xl px-4 py-2 shadow-lg z-50 backdrop-blur-sm">
          <Image src="/assets/img/brt.png" alt="Wallet" width={20} height={20} className="rounded-full" />
          <span className="text-sm font-mono text-gray-800">
            {`${address.slice(0, 6)}...${address.slice(-4)}`}
          </span>
          {balance && (
            <span className="text-sm text-gray-600 font-mono">
              {Number(balance.formatted).toFixed(4)} {balance.symbol}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
