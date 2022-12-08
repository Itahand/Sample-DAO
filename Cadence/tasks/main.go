package main

import (
	"fmt"

	. "github.com/bjartek/overflow"
	"github.com/fatih/color"
)

func main() {

	otu := Overflow(

		WithGlobalPrintOptions(),
	)

	fmt.Println("Testing Contract")
	fmt.Println("Press any key to continue")
	fmt.Scanln()

	/*
		Fetch Collection's Info
	*/
	fmt.Println("Run script to check YoungApeDiaries.CollectionInfo")
	color.Red("Should be able to fetch Info after deployment")
	scriptCollectionInfo := fmt.Sprintf(`
	import Guestbook from %s

	pub fun main() : {String: AnyStruct} {
		return Guestbook.getInfo()
	}
	`, otu.Address("account"))
	//	fmt.Println(script)

	otu.Script(scriptCollectionInfo).
		Print()

}
