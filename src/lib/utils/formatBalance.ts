import { ethers } from 'ethers';

export function formatBalance(balance: string | bigint, decimals = 18): string {
  if (typeof balance === 'bigint') {
    balance = balance.toString();
  }
  return ethers.utils.formatUnits(balance, decimals);
}