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
    <div className="bg-dark-blue-500">
      <h2 className="text-lg font-medium mb-5 text-white">Coin Swap</h2>

      <div className="mb-5">
        <label htmlFor="fromValue" className="block text-white font-medium mb-2">
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
        <label htmlFor="fromToken" className="block text-white font-medium mb-2">
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
        <label htmlFor="toToken" className="block text-white font-medium mb-2">
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

      <button onClick={handleSwap} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
        Swap
      </button>
    </div>
  );
};

export default Exchange;
