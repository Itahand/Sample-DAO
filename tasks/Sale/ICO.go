package main

import (
	"fmt"

	. "github.com/bjartek/overflow"
	"github.com/fatih/color"
)

func main() {

	o := Overflow(

		WithGlobalPrintOptions(),
	)

	fmt.Println("Creating a Story for the ICO")
	fmt.Println("Press any key to continue")
	fmt.Scanln()

	color.Green("Should be able to fetch the ICO's data")
	o.Script("Sale/getSaleInfo")

	o.Tx("/fusd/setup_account",
		WithSigner("bob"),
	)

	o.Tx("fusd/transferFUSD",
		WithSigner("account"),
		WithArg("amount", "150.0"),
		WithArg("recipient", "bob"),
	)

	o.Tx("Sale/Purchase",
		WithSigner("bob"),
		WithArg("amount", "100.0"))

	o.Tx("Sale/Distribute",
		WithSigner("bob"))
}
