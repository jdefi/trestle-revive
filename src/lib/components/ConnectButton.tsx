'use client';

import { useState, useRef, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { polygon } from 'wagmi/chains';

export default function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600 font-mono">
          {balance ? `${Number(balance.formatted).toFixed(4)} ${balance.symbol}` : ''}
        </span>
        <span className="text-sm text-gray-600 font-mono">
          {`${address.slice(0, 6)}...${address.slice(-4)}`}
        </span>
        <button
          onClick={() => disconnect()}
          className="text-sm text-red-500 hover:text-red-700 font-medium"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm"
      >
        Connect Wallet
      </button>
      {open && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-[200px] z-50">
          {connectors
            .filter((c) => c.id !== 'auth')
            .map((connector) => (
              <button
                key={connector.id}
                onClick={() => {
                  connect({ connector, chainId: polygon.id });
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-800 font-medium text-sm flex items-center gap-3 transition-colors"
              >
                {connector.name === 'WalletConnect' ? (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#3B99FC"><path d="M6.5 8.5c3-3 7.5-3 10.5 0l.5.5h-3l-.5-.5c-1.5-1.5-4-1.5-5.5 0L7.5 9h-3l.5-.5zM10.5 12.5c1.5-1.5 4-1.5 5.5 0l.5.5h-3l-.5-.5c-.5-.5-1.5-.5-2 0l-.5.5h-3l.5-.5zM14.5 16c.5-.5 1.5-.5 2 0l.5.5H14l-.5-.5z"/></svg>
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#E2761B"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg>
                )}
                <span>{connector.name === 'Injected' ? 'Browser Wallet' : connector.name}</span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
