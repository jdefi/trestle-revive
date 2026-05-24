import { useAccount } from 'wagmi';

export function useBroilerInfo() {
  const { address } = useAccount();
  // Mock data for demonstration
  return {
    data: {
      supply: '1000000000000000',
      supplyFormatted: '1,000,000,000,000,000',
      balance: address ? '100000000000000' : '0',
      balanceFormatted: address ? '100,000,000,000,000' : '0',
    },
    isLoading: false,
  };
}
