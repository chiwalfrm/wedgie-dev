// Public RPCs a static clone can call from the browser when /api/rpc isn't there.
// Same URLs as CHAINS[].rpc in pages/safe.ts, except Polygon: polygon-rpc.com currently
// returns 401 ("tenant disabled"). All of these send Access-Control-Allow-Origin for a
// browser Origin (checked 2026-11-21).
export const PUBLIC_RPC: Record<number, string> = {
  8453: "https://mainnet.base.org",
  1: "https://ethereum-rpc.publicnode.com",
  10: "https://mainnet.optimism.io",
  42161: "https://arb1.arbitrum.io/rpc",
  137: "https://polygon-bor-rpc.publicnode.com",
  43114: "https://api.avax.network/ext/bc/C/rpc",
  56: "https://bsc-dataseed.bnbchain.org",
  100: "https://rpc.gnosischain.com",
  42220: "https://forno.celo.org",
  146: "https://rpc.soniclabs.com",
  5042: "https://rpc.mainnet.arc.io",
  4663: "https://rpc.mainnet.chain.robinhood.com",
  84532: "https://sepolia.base.org",
  11155111: "https://ethereum-sepolia-rpc.publicnode.com",
};
