import React, { useState } from "react";


interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="1"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const AdminDashboard: React.FC = () => {
  const [price, setPrice] = useState(0);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [fUSDBalance, setFUSDBalance] = useState(0);
    const [tokenSalePaused, setTokenSalePaused] = useState(false);
    const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",

    });
    
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handlePriceChange = (value: number) => {
    setPrice(value);
  };

  const handleBuyTokens = () => {
    // logic to buy tokens using price and fUSD balance
  };

  const handleSellTokens = () => {
    // logic to sell tokens and update token and fUSD balance
  };

  const handleDeposit = () => {
    // logic to deposit fUSD and update fUSD balance
  };

  const handleWithdraw = () => {
    // logic to withdraw fUSD and update fUSD balance
  };

  const handlePauseTokenSale = () => {
    setTokenSalePaused(!tokenSalePaused);
  };

  return (
    <div className="bg-dark-blue-500  p-8">
      <div className="text-white text-xl mb-4">Admin Dashboard</div>
      <div className="flex mb-4">
        <div className="w-1/2">
          <div className="text-white mb-2">Price ($ FUSD)</div>
          <input
            type="range"
            min={0}
            max={500}
            value={price}
            onChange={(e) => handlePriceChange(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="w-1/2 text-white">{price} FUSD</div>
      </div>
      <div className="mb-4">
        <div className="text-white mb-2">Token Balance</div>
        <div className="text-white">{tokenBalance}</div>
      </div>
      <div className="mb-4">
        <div className="text-white mb-2">FUSD Balance</div>
        <div className="text-white">{fUSDBalance}</div>
      </div>
      <div className="mb-4">
        <button
          className="text-dark-blue-500 p-2 rounded mr-4"
          onClick={handleBuyTokens}
        >
          Buy Tokens
        </button>
        <button
          className="text-dark-blue-500 p-2 rounded"
          onClick={handleSellTokens}
        >
          Sell Tokens
        </button>
          </div>
                    <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <h2>Send</h2>
            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center text-white blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount tokens" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
            
            <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
              Send now
            </button>
              
            </div>
          </div>
      </div>
      
    );
};

export default AdminDashboard;