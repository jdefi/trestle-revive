import { formatUnits } from 'ethers';

export function formatBalance(balance: string | bigint, decimals = 18): string {
  if (typeof balance === 'bigint') {
    balance = balance.toString();
  }
  return formatUnits(balance, decimals);
}