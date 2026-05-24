import './globals.css';
import type { Metadata } from 'next';
import { WalletProvider } from '../lib/walletProvider';
import AppLayout from './client-layout';

export const metadata: Metadata = {
  title: 'BroilerPlus - DeFi Platform',
  description: 'Advanced DeFi Platform with Broiler and HopeNobt Tokens',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <WalletProvider>
          <AppLayout>{children}</AppLayout>
        </WalletProvider>
      </body>
    </html>
  );
}