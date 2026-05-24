'use client';

export default function ClaimPage() {
  return (
    <div className="py-12 max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Claim Your Free HopeNobt Tokens
        </h1>
        
        <div className="space-y-8">
          {/* Token Info */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎁</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              HopeNobt Token Airdrop
            </h2>
            <p className="text-gray-600 mb-6">
              Early adopters and community members can claim free HopeNobt tokens 
              through our official airdrop program.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Token Address:</strong> <span className="font-mono text-sm block break-all">{'0xcF51ab7398315DbA6588Aa7fb3Df7c99D3D1F4dD'}</span>
              </p>
              <p className="text-gray-600">
                <strong>Distributor Contract:</strong> <span className="font-mono text-sm block break-all">{'0xB2225f2e9a26688D43bC01A8Cf7aD4B179154c47'}</span>
              </p>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How to Claim
            </h3>
            <ol className="list-decimal pl-8 space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-indigo-100 text-indigo-600 rounded-full">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Connect Your Wallet</h4>
                  <p className="text-sm text-gray-600">
                    Use MetaMask, WalletConnect, or other supported wallets to connect to Polygon mainnet.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-indigo-100 text-indigo-600 rounded-full">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Verify Eligibility</h4>
                  <p className="text-sm text-gray-600">
                    Check if your wallet address is eligible for the airdrop based on our distribution criteria.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 bg-indigo-100 text-indigo-600 rounded-full">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Claim Your Tokens</h4>
                  <p className="text-sm text-gray-600">
                    Submit the claim transaction to receive your HopeNobt tokens directly to your wallet.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}