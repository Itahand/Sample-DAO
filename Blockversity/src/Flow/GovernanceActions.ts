/** @format */

//@ts-ignore
import * as fcl from "@onflow/fcl";
//import t from "@onflow/types";
import "./config";

// ///////////////
// // Cadence code
// ///////////////

// DAO Scripts
import { getProposals as getProposalsScript } from "./Scripts/DAO/getProposals";

// // Transactions

import { signWhitelist as signWhitelistTransaction } from "./Transactions/sign_Whitelist";

// // ****** Transactions Functions ****** //

export const signWhitelist = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const transactionId = await fcl.mutate({
        cadence: signWhitelistTransaction(),
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        authorizations: [fcl.currentUser],
        limit: 500,
      });
      const transaction = await fcl.tx(transactionId).onceSealed();
      console.log(transaction); // The transactions status and events after being sealed
    } catch (e) {
      console.log(e);
      reject(false);
    }
  });
};

// // ****** Script Functions ****** //

// Get all proposals on the DAO contract.

export const getProposals = async () => {
  try {
    const response = await fcl.query({
      cadence: getProposalsScript(),
      args: (arg: any, t: any) => [],
    });

    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};
