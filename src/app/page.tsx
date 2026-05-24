'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to BroilerPlus
        </h1>
        <p className="text-xl text-gray-600">
          Advanced DeFi Platform featuring Broiler and HopeNobt tokens on Polygon
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Three Ways to Earn
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 text-xl">1</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Claim Free hNobt</h3>
                <p className="text-gray-600">Get free HopeNobt tokens through our airdrop program</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 text-xl">2</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Stake hNobt for BRT</h3>
                <p className="text-gray-600">Stake HopeNobt for 3, 6, or 12 months to earn BRT rewards</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 text-xl">3</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Farm BRT LP</h3>
                <p className="text-gray-600">Provide liquidity to earn BRT mining rewards</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <Link href="/earn" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Start Earning Rewards
          </Link>
          <Link href="/claim" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors">
            Claim Free hNobt
          </Link>
        </div>
      </div>
    </main>
  );
}