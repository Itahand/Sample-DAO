package main

import (
	"fmt"
	"testing"

	. "github.com/bjartek/overflow"
	"github.com/fatih/color"
	"github.com/stretchr/testify/assert"
)

func TestSwap(t *testing.T) {

	o, err := OverflowTesting()
	assert.NoError(t, err)

	color.Green("Bob will attempt to create a Pair between BVT and FUSD")
	o.Tx("/BlockVersity/DEX/createPair",
		WithSigner("bob"),
	).AssertSuccess(t)
	fmt.Println("Bob failed to pause the sale")
}
