import * as fcl from "@onflow/fcl";
import t from "@onflow/types";
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
/* import { getAllAddresses as getAllAddressesScript } from './scripts/get_all_addresses';
import { getUserTimestamp as getUserTimestampScript } from './scripts/get_user_timestamp'; */

// // Transactions

import { signGuestbook as signGuestbookTransaction } from './Transactions/sign_Guestbook';

// // ****** Transactions Functions ****** //

export const signGuestbook = async () => {


  return new Promise(async (resolve, reject) => {
    try {
      const transactionId = await fcl.mutate({
        cadence: signGuestbookTransaction(),
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