package main

import (
	"fmt"

	. "github.com/bjartek/overflow"
)

func main() {

	o := Overflow(

		WithGlobalPrintOptions(),
	)

	fmt.Println("Creating a Story for the IDO")
	fmt.Println("Press any key to continue")
	fmt.Scanln()

}
