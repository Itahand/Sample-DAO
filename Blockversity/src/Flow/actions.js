import * as fcl from "@onflow/fcl";
import t from "@onflow/types";
import './config';

///////////////
// Cadence code
///////////////

// Lifecycle FCL Auth functions
export const unauthenticate = () => fcl.unauthenticate();
export const logIn = async () => await fcl.logIn();
export const signUp = () => fcl.signUp();

// Scripts

import getAllAddressesScript from './scripts/get_all_addresses.js';
import getUserTimestampScript from './scripts/get_user_timestamp.js';

// Transactions

import signGuestbookTransaction from './Transactions/sign_Guestbook.js';

// ****** Transactions Functions ****** //

export const signGuestbook = async () => {


  return new Promise(async (resolve, reject) => {
    try {
      const transactionId = await fcl.mutate({
        cadence: signGuestbookTransaction,
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