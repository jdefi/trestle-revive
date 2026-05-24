'use client';

import Link from 'next/link';
import { useAccount } from 'wagmi';

export default function EarnPage() {
  const { address, isConnecting } = useAccount();
  
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Earn Rewards with BroilerPlus
      </h1>
      
      {/* Section 1: Claim hNobt as free airdrop */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
          Claim Free HopeNobt Airdrop
        </h2>
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="space-y-6">
            <p className="text-gray-600 mb-4">
              Early adopters can claim free HopeNobt tokens through our airdrop program.
              Simply connect your wallet to check eligibility and claim your allocation.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>HopeNobt Token:</strong> <span className="font-mono">{'0xcF51ab7398315DbA6588Aa7fb3Df7c99D3D1F4dD'}</span>
              </p>
              <p className="text-gray-600">
                <strong>Distributor Contract:</strong> <span className="font-mono">{'0xB2225f2e9a26688D43bC01A8Cf7aD4B179154c47'}</span>
              </p>
            </div>
            {address ? (
              <>
                <p className="mt-4">
                  <strong>Your Wallet:</strong> <span className="font-mono text-sm">{`${address.slice(0, 6)}...${address.slice(-4)}`}</span>
                </p>
                <button 
                  onClick={() => alert('Claim functionality would connect to distributor contract')}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Claim Your Free hNobt
                </button>
              </>
            ) : (
              <div className="text-center mt-6">
                <p className="text-gray-500">
                  Connect your wallet to claim your free HopeNobt tokens
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Section 2: Stake hNobt to earn BRT token */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
          Stake HopeNobt to Earn BRT Tokens
        </h2>
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="space-y-6">
            <p className="text-gray-600 mb-4">
              Stake your HopeNobt tokens for 3, 6, or 12 months to earn BRT token rewards.
              Longer staking periods yield higher APY.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { period: '3 Months', apy: '45%', action: 'Stake for 3 Months' },
                { period: '6 Months', apy: '65%', action: 'Stake for 6 Months' },
                { period: '12 Months', apy: '100%', action: 'Stake for 12 Months' },
              ].map((tier) => (
                <div key={tier.period} className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                  <h3 className="font-semibold text-indigo-800 mb-4">{tier.period}</h3>
                  <p className="text-sm text-gray-500 mb-2">APY: {tier.apy}</p>
                  <div className="mt-4">
                    {address ? (
                      <button 
                        onClick={() => alert(`${tier.action} functionality`)}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                        disabled={isConnecting}
                      >
                        {tier.action}
                      </button>
                    ) : (
                      <button className="w-full bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed">
                        Connect Wallet
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <p className="text-gray-600">
                <strong>HopeNobt Token:</strong> <span className="font-mono">{'0xcF51ab7398315DbA6588Aa7fb3Df7c99D3D1F4dD'}</span>
              </p>
              <p className="text-gray-600">
                <strong>BRT Reward Token:</strong> <span className="font-mono">{'0xeCb4cAc0C9e5cBd42a9Ed36467ce8f96072AD58b'}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 3: Farm BRT LP to get BRT mining program */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
          Farm BRT LP for BRT Mining Rewards
        </h2>
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="space-y-6">
            <p className="text-gray-600 mb-4">
              Provide liquidity to the BRT/WMATIC pool and earn BRT token rewards through our mining program.
              60% of token supply allocated to LP mining rewards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-800 mb-4">BRT/WMATIC LP Pool</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Contract: <span className="font-mono text-xs">{'0xc445b18b3ff85e0691fe416ad91e456f8697b166'}</span>
                </p>
                <p className="text-sm text-gray-500">60% of 1,000,000,000,000,000 BRT allocated to mining</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-800 mb-4">Mining Program Stats</h3>
                <p className="text-sm text-gray-500 mb-2"><strong>Total Allocation:</strong> 600,000,000,000,000 BRT</p>
                <p className="text-sm text-gray-500">Rewards per Block: 1,000 BRT</p>
                <p className="text-sm text-gray-500">APY Estimate: 120%+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}