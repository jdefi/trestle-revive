# 🐔 Revive Allswap Frontend Alpha to Trestle Frontend Alpha

[![Netlify Status](https://api.netlify.com/api/v1/badges/7bebf1a3-be7b-4165-afd1-446256acd5e3/deploy-status)](https://app.netlify.com/sites/pancake-prod/deploys)

This project contains the main features of the allswap application.

If you want to contribute, please refer to the [contributing guidelines](./CONTRIBUTING.md) of this project.

## Documentation

- [Info](doc/Info.md)
- [Cypress tests](doc/Cypress.md)

## Migration from Legacy Allswap to Trestle Frontend

### Key Changes:
- **State Management**: Migrated from local component state to Wagmi for blockchain interactions
- **UI Framework**: Updated from custom CSS/components to Tailwind CSS with Headless UI
- **Wallet Connection**: Replaced custom wallet modal with RainbowKit integration
- **Routing**: Migrated from React Router to Next.js App Router
- **Styling**: Consolidated to utility-first Tailwind CSS approach
- **Components**: Replaced custom component library with shadcn/ui-inspired components
- **Data Fetching**: Switched from SWR to TanStack Query for server state management
- **Environment Configuration**: Moved RPC configuration from .env to Wagmi config for better encapsulation

### Dependency Updates:
- **New Dependencies**:
  - `@tanstack/react-query` - For server state management
  - `@rainbow-me/rainbowkit` - For wallet connection UI
  - `wagmi` - For Ethereum blockchain interaction hooks
  - `next` - Latest version with App Router
  - `tailwindcss` - For utility-first styling
  - `headlessui` - For accessible UI components

- **Updated Dependencies**:
  - `react` and `react-dom` to latest stable versions
  - `@types/node`, `@types/react` for better TypeScript support

- **Removed Dependencies**:
  - Custom wallet connection modals
  - Legacy styling libraries
  - Old state management solutions

### Environment Details:
- **Migration Time**: 2026-05-24T11:06:17+03:00
- **Active Development File**: `src/components/WalletProviderModal/components/WalletCard.tsx` (reference)
- **Current Branch**: `main`
- **Deployment Target**: Netlify (via `netlify.toml`)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Start production server:
   ```bash
   npm start
   ```

## Configuration

Environment variables are stored in `.env.local` (not committed):
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`: WalletConnect project ID
- Contract addresses for tokens and distributors

Note: RPC endpoints are now configured directly in `src/lib/walletProvider.tsx` for better encapsulation.

## Features

- Wallet connection with multiple providers (MetaMask, WalletConnect, etc.)
- Token claiming functionality (HopeNobt airdrop)
- Staking and farming interfaces for BRT and HopeNobt tokens
- Real-time blockchain data via Wagmi and TanStack Query
- Responsive design with Tailwind CSS
- Netlify-ready deployment configuration

