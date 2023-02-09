/** @format */

import React, { useState, useEffect } from "react";
import {
  deployICO,
  getBVTBalance,
  depositBVT,
  pause,
  unpause,
  withdrawBVT,
  refund,
  distribute,
} from "../Flow/ICOActions";

interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  type,
  value,
  handleChange,
}) => (
  <input
    placeholder={placeholder}
    type={type}
    step='1'
    value={value}
    onChange={(e) => handleChange(e, name)}
    className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
  />
);

const AdminDashboard: React.FC = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [fUSDBalance, setFUSDBalance] = useState(0);
  const [tokenSalePaused, setTokenSalePaused] = useState(false);
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  useEffect(() => {
    getBVTBalance().then((_balance) => setTokenBalance(_balance));
  }, []);

  const handlePriceChange = (value: number) => {
    setPrice(value);
  };

  const handleBuyTokens = () => {
    // logic to buy tokens using price and fUSD balance
  };

  const handleSellTokens = () => {
    // logic to sell tokens and update token and fUSD balance
  };

  const handleDeposit = async () => {
    const response = await depositBVT(depositAmount.toFixed(1));
    console.log(response);
    // logic to deposit BVT and update BVT balance
  };

  const handleWithdraw = async () => {
    const response = await withdrawBVT(withdrawAmount.toFixed(1));
    console.log(response);
    // logic to withdraw BVT and update BVT balance
  };

  const handlePauseTokenSale = () => {
    setTokenSalePaused(!tokenSalePaused);
  };

  const handleLaunch = async () => {
    const response = await deployICO(price.toFixed(1), tokenAddress, tokenName);
    console.log(response);
    // logic to withdraw fUSD and update fUSD balance
  };

  return (
    <div className='bg-dark-blue-500  p-8'>
      <p className='text-white text-xl mb-4'>Admin Dashboard</p>
      {/*       <button onClick={() => handleLaunch()}>Launch ICO</button> */}
      <div className='flex mb-4'>
        <div className='w-1/2'>
          <div className='text-white mb-2'>Price ($ FUSD)</div>
          <input
            type='range'
            min={0}
            max={500}
            value={price}
            onChange={(e) => handlePriceChange(Number(e.target.value))}
            className='w-full'
          />
          <input
            type='text'
            placeholder='Token Name'
            className='w-full text-black mb-4'
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Token Address'
            className='w-full text-black mb-4'
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
          />
          <button
            className='border-pink border-4 rounded-full p-2'
            onClick={() => handleLaunch()}>
            Launch ICO
          </button>
        </div>
        <div className='w-1/2 text-white'>{price} FUSD</div>
      </div>
      <div className='mb-4'>
        <div className='text-white mb-2 text-center'>
          BVT in ICO contract Balance
        </div>
        <div className='text-white text-center'>{tokenBalance}</div>
      </div>
      <div className='mb-4'>
        <div className='text-white mb-2 text-center'>FUSD in ICO Balance</div>
        <div className='text-white text-center'>{fUSDBalance}</div>
      </div>
      <div className='mb-4'>
        <button
          className='text-dark-blue-500 p-2 rounded mr-4'
          onClick={handleBuyTokens}>
          Buy Tokens
        </button>
        <button
          className='text-dark-blue-500 p-2 rounded'
          onClick={handleSellTokens}>
          Sell Tokens
        </button>
      </div>
      <div className='mb-4'>
        <input
          type='number'
          value={depositAmount}
          onChange={(e) => setDepositAmount(Number(e.target.value))}
          placeholder='Amount to deposit'
          className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
        />
        <button
          className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer'
          onClick={handleDeposit}>
          Deposit BVT
        </button>
      </div>
      <div className='mb-4'>
        <input
          type='number'
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(Number(e.target.value))}
          placeholder='Amount to withdraw'
          className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
        />
        <button
          className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer'
          onClick={handleWithdraw}>
          Withdraw BVT
        </button>
      </div>
      <div className='mb-4'>
        <button
          className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer'
          onClick={handlePauseTokenSale}>
          {tokenSalePaused ? "Unpause" : "Pause"} Token Sale
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
