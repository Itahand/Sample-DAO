package main

import (
	"fmt"
	"time"

	. "github.com/bjartek/overflow"
	"github.com/fatih/color"
)

// Utility function to read Unix Timestamp epoch
func epochToHumanReadable(epoch int64) time.Time {
	return time.Unix(epoch, 0)
}

func main() {

	o := Overflow(

		WithGlobalPrintOptions(),
	)

	fmt.Println("Testing Contract")
	fmt.Println("Press any key to continue")
	fmt.Scanln()
	/*
		Add an address to the Whitelist
	*/

	color.Red("Should be able to sign Bob's and Alice's addresses into the Whitelist.")
	o.Tx(
		"./BlockVersity/Whitelist/sign_whitelist",
		WithSigner("bob"),
	)
	o.Tx(
		"./BlockVersity/Whitelist/sign_whitelist",
		WithSigner("alice"),
	)
	color.Green("-----------------------------PASSED---------------------")

	/*
		Fetch All Addresses
	*/

	color.Red("Should be able to fetch all the signed addresses")
	o.Script(
		"./BlockVersity/Whitelist/get_all_addresses",
		WithSigner("account"),
		WithArg("user", "bob"),
	)
	color.Green("-----------------------------PASSED---------------------")

	/*
		Fetch timestamp for a user.
	*/

	epoch := o.Script(
		"./BlockVersity/Whitelist/get_user_timestamp",
		WithSigner("account"),
		WithArg("user", "bob"),
	).Result
	fmt.Println("The timestamp for bob is: ", epoch)

	//	   	epochToHumanReadable(epoch)

	color.Green("-----------------------------PASSED---------------------")

	/* 	color.Red("Shouldn't let you sign twice with the same account")
	   	o.Tx(
	   		"./BlockVersity/Whitelist/sign_whitelist",
	   		WithSigner("bob"),
	   	) */

	/*
		Setup an account with the BlockVersity Token
	*/

	color.Red("Should be able to setup an account to receive BVT")
	o.Tx(
		"./BlockVersity/token/setup_account_MetadataViews",
		WithSigner("alice"),
	)
	o.Script(
		"./BlockVersity/token/getBalance",
		WithArg("account", "alice"),
	)
	o.Script(
		"./BlockVersity/token/getTotalSupply",
	)
	color.Green("-----------------------------PASSED---------------------")

}
