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

	fmt.Println("Creating a Story for the IDO")
	fmt.Println("Press any key to continue")
	fmt.Scanln()

	color.Green("Should be able to create a Swap Pair between BVT and FUSD")
	o.Tx("BlockVersity/DEX/createPair",
		WithSigner("bob")).Print()
}
