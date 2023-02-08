package main

import (
	"fmt"
	"testing"

	. "github.com/bjartek/overflow"
	"github.com/stretchr/testify/assert"
)

func TestSwap(t *testing.T) {

	o, err := OverflowTesting()
	assert.NoError(t, err)

	fmt.Println("Testing DEX Swap from BlockVersity")
	fmt.Println("Press any key to continue")
	fmt.Scanln()

	o.Script("flow/get_balance",
		WithArg("address", "account")).Print()

	fmt.Println("Account Emulator failed to pause the sale")
}

/* 	color.Green("Bob Emulator will attempt to create a Pair between BVT and FUSD")
 o.Tx("./BlockVersity/DEX/createPair",
	 WithSigner("bob"),
 ).AssertSuccess(t) */

/* 	o.Script("BlockVersity/token/getBalance",
WithArg("account", "0x49a232bb31e5dd58")).Print() */

/*
	 o.Tx("./BlockVersity/DEX/createPair",
		WithSigner("account"),
	).AssertSuccess(t)

*/
