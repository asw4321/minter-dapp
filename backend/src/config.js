require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Floaty Tatoes: Spooky Tatoes 2022";
const description = "Floaty Tatoes: Spooky Tatoes Collection Gen 1 2022";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const layerConfigurations = [
  {
    growEditionSizeTo: 150,
    layersOrder: [
      { name: "Background" },
      { name: "Moon" },
      { name: "Bubbles" },
      { name: "Solid" },
      { name: "Fren" },
      { name: "Candy" },
      { name: "Treat Bag" },
      { name: "Trick or Treat" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Sand" },
      { name: "Sea Grass" },
      { name: "Signature" },
    ],
  },{
    growEditionSizeTo: 200,
    layersOrder: [
      { name: "Background" },
      { name: "Moon" },
      { name: "Bubbles" },
      { name: "Coffee Costume" },
      { name: "Fren" },
      { name: "Candy" },
      { name: "Treat Bag" },
      { name: "Trick or Treat" },
      { name: "Mouth White" },
      { name: "Eyes White" },
      { name: "Sand" },
      { name: "Sea Grass" },
      { name: "Signature" },
    ],
  },{
    growEditionSizeTo: 280,
    layersOrder: [
      { name: "Background" },
      { name: "Moon" },
      { name: "Bubbles" },
      { name: "Disco Costume" },
      { name: "Fren Special" },
      { name: "Candy" },
      { name: "Treat Bag" },
      { name: "Disco Trick or Treat" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Sand" },
      { name: "Sea Grass" },
      { name: "Signature" },
    ],
  },{
    growEditionSizeTo: 360,
    layersOrder: [
      { name: "Background" },
      { name: "Moon" },
      { name: "Bubbles" },
      { name: "Mermatee Costume" },
      { name: "Fren Special" },
      { name: "Candy" },
      { name: "Treat Bag" },
      { name: "Trick or Treat" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Sand" },
      { name: "Sea Grass" },
      { name: "Signature" },
    ],
  },{
    growEditionSizeTo: 440,
    layersOrder: [
      { name: "Background" },
      { name: "Moon" },
      { name: "Bubbles" },
      { name: "Alien Costume" },
      { name: "Fren Special" },
      { name: "Candy" },
      { name: "Treat Bag" },
      { name: "Trick or Treat" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Sand" },
      { name: "Sea Grass" },
      { name: "Signature" },
    ],
  },{
    growEditionSizeTo: 520,
    layersOrder: [
      { name: "Background" },
      { name: "Moon" },
      { name: "Bubbles" },
      { name: "Moonatee Costume" },
      { name: "Fren Special" },
      { name: "Candy" },
      { name: "Treat Bag" },
      { name: "Trick or Treat" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Sand" },
      { name: "Sea Grass" },
      { name: "Signature" },
    ],
  },{
    growEditionSizeTo: 600,
    layersOrder: [
      { name: "Background" },
      { name: "Moon" },
      { name: "Bubbles" },
      { name: "Sea Cow Costume" },
      { name: "Fren Special" },
      { name: "Candy" },
      { name: "Treat Bag" },
      { name: "Trick or Treat" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Sand" },
      { name: "Sea Grass" },
      { name: "Signature" },
    ],
  },{
    growEditionSizeTo: 680,
    layersOrder: [
      { name: "Background" },
      { name: "Moon" },
      { name: "Bubbles" },
      { name: "Pumpkin Spice Costume" },
      { name: "Fren Special" },
      { name: "Candy" },
      { name: "Treat Bag" },
      { name: "Trick or Treat" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Sand" },
      { name: "Sea Grass" },
      { name: "Signature" },
    ],
  },{
    growEditionSizeTo: 760,
    layersOrder: [
      { name: "Background" },
      { name: "Moon" },
      { name: "Bubbles" },
      { name: "Potato Costume" },
      { name: "Fren Special" },
      { name: "Candy" },
      { name: "Treat Bag" },
      { name: "Trick or Treat" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Sand" },
      { name: "Sea Grass" },
      { name: "Signature" },
    ],
  },{
    growEditionSizeTo: 840,
    layersOrder: [
      { name: "Background" },
      { name: "Moon" },
      { name: "Bubbles" },
      { name: "Pooh Costume" },
      { name: "Fren Special" },
      { name: "Candy" },
      { name: "Treat Bag" },
      { name: "Trick or Treat" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Sand" },
      { name: "Sea Grass" },
      { name: "Signature" },
    ],
  },{
    growEditionSizeTo: 920,
    layersOrder: [
      { name: "Background" },
      { name: "Moon" },
      { name: "Bubbles" },
      { name: "Vampire Costume" },
      { name: "Fren Special" },
      { name: "Candy" },
      { name: "Treat Bag" },
      { name: "Trick or Treat" },
      { name: "Mouth" },
      { name: "Eyes" },
      { name: "Sand" },
      { name: "Sea Grass" },
      { name: "Signature" },
    ],
  },{
    growEditionSizeTo: 999,
    layersOrder: [
      { name: "Background" },
      { name: "Moon" },
      { name: "Bubbles" },
      { name: "Spooky Costume" },
      { name: "Fren Special" },
      { name: "Candy" },
      { name: "Treat Bag" },
      { name: "Trick or Treat" },
      { name: "Mouth White" },
      { name: "Eyes White" },
      { name: "Sand" },
      { name: "Sea Grass" },
      { name: "Signature" },
    ],
  },{
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "Singularity Background" },
      { name: "Singularity Moon" },
      { name: "Singularity Bubbles" },
      { name: "Singularity Tato" },
      { name: "Singularity Fren" },
      { name: "Singularity Treat Bag" },
      { name: "Singularity Trick" },
      { name: "Singularity Eyes" },
      { name: "Singularity Mouth" },
      { name: "Singularity Sand" },
      { name: "Singularity Sea Grass" },
      { name: "Singularity Signature" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 560,
  height: 560,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://floatytatoes.xyz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only goerli, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'floatytatoes-spooky22';
const CONTRACT_SYMBOL = 'FLTSPKY22';
const METADATA_UPDATABLE = false; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x4C9153d83DE347F4C5f86d1dfA98f3aaDe802D59';
const TREASURY_ADDRESS = '0x4C9153d83DE347F4C5f86d1dfA98f3aaDe802D59';
const MAX_SUPPLY = 1000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 13; // Minting price per NFT. Goerli = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-10-27T00:00:00+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-10-26T00:00:00+00:00"; // Optional. Eg: 2022-11-15T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x4C9153d83DE347F4C5f86d1dfA98f3aaDe802D59"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = [];  // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
// const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
// const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
// const GENERIC_DESCRIPTION = "WHAT FLOATY TATO ARE YOU?"; // Replace with what you want the generic descriptions to say.
// const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafkreiedlomdyf4gtldfxhgzwsp56gbxlg4qoejw6b5dg6tzbhbqx5tjqe"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  // GENERIC,
  // GENERIC_TITLE,
  // GENERIC_DESCRIPTION,
  // GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
