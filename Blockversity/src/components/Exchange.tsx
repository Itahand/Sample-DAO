import React, { useState } from "react";

const Exchange = () => {
  const [fromValue, setFromValue] = useState("0");
  const [fromToken, setFromToken] = useState("Token 1");
  const [toToken, setToToken] = useState("Token 2");

  const handleFromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromValue(e.target.value);
  };

  const handleFromTokenChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromToken(e.target.value);
  };

  const handleToTokenChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToToken(e.target.value);
  };

  const handleSwap = () => {
    // Swap logic goes here
  };

  return (
    <div className="flex flex-col items-center p-10 bg-blue-900 text-white rounded-lg">
      <h2 className="text-lg font-medium mb-5">Coin Swap</h2>

      <div className="mb-5">
        <label htmlFor="fromValue" className="block font-medium mb-2">
          From Value
        </label>
        <input
          type="text"
          id="fromValue"
          value={fromValue}
          onChange={handleFromValueChange}
          className="border border-gray-300 p-2 rounded-lg w-64 text-center"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="fromToken" className="block font-medium mb-2">
          From Token
        </label>
        <select
          id="fromToken"
          value={fromToken}
          onChange={handleFromTokenChange}
          className="border border-gray-300 p-2 rounded-lg w-64 text-center"
        >
          <option value="Token 1">Token 1</option>
          <option value="Token 2">Token 2</option>
          <option value="Token 3">Token 3</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="toToken" className="block font-medium mb-2">
          To Token
        </label>
        <select
          id="toToken"
          value={toToken}
          onChange={handleToTokenChange}
          className="border border-gray-300 p-2 rounded-lg w-64 text-center"
        >
          <option value="Token 1">Token 1</option>
          <option value="Token 2">Token 2</option>
          <option value="Token 3">Token 3</option>
        </select>
      </div>

      <button onClick={handleSwap} className="bg-white text-blue-900 p-2 rounded-lg">
        Swap
      </button>
    </div>
  );
};

export default Exchange;
