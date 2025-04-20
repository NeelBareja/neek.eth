# ENS dApp

A modern web application that connects to Ethereum wallets and displays Ethereum Name Service (ENS) information.

![ENS dApp Screenshot](https://via.placeholder.com/800x400?text=ENS+dApp+Screenshot)

## Overview

This dApp allows users to connect their Ethereum wallet (via various providers like MetaMask, WalletConnect, etc.) and displays their ENS name if they have one registered. The application is built with modern web technologies and provides a smooth, responsive user experience with dark/light mode support.

## Features

- **Wallet Connection**: Connect via MetaMask, WalletConnect, Ledger, and many other providers
- **ENS Name Display**: Automatically shows your ENS name if one is registered for your address
- **Address Truncation**: Shows truncated Ethereum addresses for readability
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Automatically switches based on system preferences
- **Modern UI**: Beautiful gradient texts, animations, and transitions

## Technologies Used

- **Next.js 14**: React framework for server-side rendering and static site generation
- **RainbowKit**: UI components for wallet connections
- **Wagmi**: React hooks for Ethereum interaction
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Ethereum**: Integration with the Ethereum blockchain and ENS
- **Inter Font**: Modern, clean typography

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ens-dapp.git
   cd ens-dapp
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
my-app/
├── public/                 # Static assets
│   └── learnweb3punks.png  # NFT image
├── src/
│   └── app/                # Next.js app directory
│       ├── globals.css     # Global styles
│       ├── layout.js       # Root layout component
│       ├── page.js         # Main page component
│       └── providers.js    # RainbowKit and Wagmi providers
├── package.json           # Project dependencies
└── next.config.js         # Next.js configuration
```

## Key Components

### Providers.js
Sets up RainbowKit and Wagmi providers with configuration for Sepolia testnet.

### Page.js
Main application UI with wallet connection button and ENS name display.

### Global.css
Contains styling variables for light/dark mode and custom component styling.

## Configuration

### Blockchain Networks
This dApp is configured to work with the Sepolia testnet. To add more networks or change to mainnet, modify the `chains` array in `providers.js`.

### RainbowKit Setup
The dApp uses RainbowKit for wallet connections. Configuration is in `providers.js` and includes the following wallets:
- Default wallets from RainbowKit
- Argent
- Trust Wallet
- Ledger

## Development

### Adding New Features
To add new features, you can modify the `page.js` file or create new components as needed.

### Styling Changes
The project uses a combination of Tailwind CSS for utility classes and CSS variables for theming. Global styles are in `globals.css`.

## Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy to Vercel (Recommended)
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/).

```bash
npm install -g vercel
vercel
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- LearnWeb3 Punks for the inspiration
- RainbowKit for the excellent wallet connection UI
- Wagmi for the Ethereum React hooks
- Next.js team for the awesome framework
