//@ts-ignore
import * as fcl from "@onflow/fcl";
//import t from "@onflow/types";
import './config';

// ///////////////
// // Cadence code
// ///////////////

// Lifecycle FCL Auth functions
export const unauthenticate = () => fcl.unauthenticate();
export const logIn = async () => await fcl.logIn();
export const signUp = () => fcl.signUp();
export const currentUser = () => fcl.currentUser()

// // Scripts
import { getBVTBalance as getBVTBalanceScript } from './Scripts/ICO/getBVT_Balance';
import { getFUSDVaultBalance as getFUSDVaultBalanceScript } from './Scripts/ICO/getFUSDVaultBalance';
import { getIsSaleActive as getIsSaleActiveScript } from './Scripts/ICO/getIsSaleActive';
import { getPrice as getPriceScript } from './Scripts/ICO/getPrice';
import { getPurchaseInfo as getPurchaseInfoScript } from './Scripts/ICO/getPurchaseInfo';
import { getPurchasers as getPurchasersScript } from './Scripts/ICO/getPurchasers';


// // Transactions

import { purchaseBVT as purchaseBVTTransaction } from './Transactions/ICO/purchaseBVT';
import { depositBVT as depositBVTTransaction } from './Transactions/ICO/Admin/depositBVT';
import { pause as pauseTransaction } from './Transactions/ICO/Admin/pause';
import { unpause as unpauseTransaction } from './Transactions/ICO/Admin/unpause';
import { refund as refundTransaction } from './Transactions/ICO/Admin/refund';
import { distribute as distributeTransaction } from './Transactions/ICO/Admin/distribute';


// // ****** Transactions Functions ****** //

// Purchase BVT as a user
export const purchaseBVT = async (amount: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const transactionId = await fcl.mutate({
        cadence: purchaseBVTTransaction(),
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        authorizations: [fcl.currentUser],
        args: (arg: any, t: any) => [
          arg(amount, t.UFix64),
        ],
        limit: 500
      });
      const transaction = await fcl.tx(transactionId).onceSealed()
      console.log(transaction) // The transactions status and events after being sealed
    } catch (e) {
      console.log(e);
      reject(false);
    }
  });
}

// Deposit BVT as an Admin
export const depositBVT = async (amount: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const transactionId = await fcl.mutate({
        cadence: depositBVTTransaction(),
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        authorizations: [fcl.currentUser],
        args: (arg: any, t: any) => [
          arg(amount, t.UFix64),
        ],
        limit: 500
      });
      const transaction = await fcl.tx(transactionId).onceSealed()
      console.log(transaction) // The transactions status and events after being sealed
    } catch (e) {
      console.log(e);
      reject(false);
    }
  });
}

// Refund FUSD to an address as an Admin
export const refund = async (address: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const transactionId = await fcl.mutate({
        cadence: refundTransaction(),
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        authorizations: [fcl.currentUser],
        args: (arg: any, t: any) => [
          arg(address, t.Address),
        ],
        limit: 500
      });
      const transaction = await fcl.tx(transactionId).onceSealed()
      console.log(transaction) // The transactions status and events after being sealed
    } catch (e) {
      console.log(e);
      reject(false);
    }
  });
}

// Distribute allocated BVT to one Address as an Admin
export const distribute = async (address: string, allocationAmount: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const transactionId = await fcl.mutate({
        cadence: distributeTransaction(),
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        authorizations: [fcl.currentUser],
        args: (arg: any, t: any) => [
          arg(address, t.Address),
          arg(allocationAmount, t.UFix64),
        ],
        limit: 500
      });
      const transaction = await fcl.tx(transactionId).onceSealed()
      console.log(transaction) // The transactions status and events after being sealed
    } catch (e) {
      console.log(e);
      reject(false);
    }
  });
}

// Pause the public sale as an Admin
export const pause = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const transactionId = await fcl.mutate({
        cadence: pauseTransaction(),
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        authorizations: [fcl.currentUser],
        limit: 500
      });
      const transaction = await fcl.tx(transactionId).onceSealed()
      console.log(transaction) // The transactions status and events after being sealed
    } catch (e) {
      console.log(e);
      reject(false);
    }
  });
}

// UnPause the public sale as an Admin
export const unpause = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const transactionId = await fcl.mutate({
        cadence: unpauseTransaction(),
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        authorizations: [fcl.currentUser],
        limit: 500
      });
      const transaction = await fcl.tx(transactionId).onceSealed()
      console.log(transaction) // The transactions status and events after being sealed
    } catch (e) {
      console.log(e);
      reject(false);
    }
  });
}

// // ****** Script Functions ****** //

// Get BVT Balance on the ICO smart contract.

export const getBVTBalance = async () => {
  try {
    const response = await fcl.query({
      cadence: getBVTBalanceScript(),
      args: (arg: any, t: any) => [],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}

// Get FUSD Balance on the ICO smart contract.

export const getFUSDBalance = async () => {
  try {
    const response = await fcl.query({
      cadence: getFUSDVaultBalanceScript(),
      args: (arg: any, t: any) => [],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}

// Check if sale is Active

export const getIsSaleActive = async () => {
  try {
    const response = await fcl.query({
      cadence: getIsSaleActiveScript(),
      args: (arg: any, t: any) => [],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}

// Check ICO's sale price

export const getPrice = async () => {
  try {
    const response = await fcl.query({
      cadence: getPriceScript(),
      args: (arg: any, t: any) => [],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}

// Check data on a purchase ticketId

export const getPurchaseInfo = async () => {
  try {
    const response = await fcl.query({
      cadence: getPurchaseInfoScript(),
      args: (arg: any, t: any) => [],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}

// Check data on a purchase ticketId

export const getPurchasers = async () => {
  try {
    const response = await fcl.query({
      cadence: getPurchasersScript(),
      args: (arg: any, t: any) => [],
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
}