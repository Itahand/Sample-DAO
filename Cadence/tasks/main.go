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

	otu := Overflow(

		WithGlobalPrintOptions(),
	)

	fmt.Println("Testing Contract")
	fmt.Println("Press any key to continue")
	fmt.Scanln()
	/*
		Add an address to the Guestbook
	*/

	color.Red("Should be able to sign Bob's and Alice's addresses into the Guestbook.")
	otu.Tx(
		"./Guestbook/sign_guestbook",
		WithSigner("bob"),
	)
	otu.Tx(
		"./Guestbook/sign_guestbook",
		WithSigner("alice"),
	)
	color.Green("-----------------------------PASSED---------------------")

	/*
		Fetch All Addresses
	*/

	color.Red("Should be able to fetch all the signed addresses")
	otu.Script(
		"./Guestbook/get_all_addresses",
		WithSigner("account"),
		WithArg("user", "bob"),
	)
	color.Green("-----------------------------PASSED---------------------")

	/*
		Fetch timestamp for a user.
	*/

	/* 	epoch := otu.Script(
	   		"./Guestbook/get_user_timestamp",
	   		WithSigner("account"),
	   		WithArg("user", "bob"),
	   	)
	   	epochToHumanReadable(epoch)
	*/
	color.Green("-----------------------------PASSED---------------------")

	color.Red("Shouldn't let you sign twice with the same account")
	otu.Tx(
		"./Guestbook/sign_guestbook",
		WithSigner("bob"),
	)
}
