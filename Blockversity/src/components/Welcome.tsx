/** @format */

import { signWhitelist, getAllAddresses } from "../Flow/allowListActions";
import { purchaseBVT, setupBVT } from "../Flow/ICOActions";
import { useEffect, useState } from "react";
import Exchange from "./Exchange";
import AdminDashboard from "./Admin";
import { Link } from 'react-router-dom';

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void;
}

const Welcome: React.FC = () => {
  //   const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext<TransactionContext>(TransactionContext);
  const [addresses, setAddresses] = useState([]);
  const [buyAmount, setBuyAmount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleBuyChange = (value: number) => {
    setBuyAmount(value);
  };

  const showAddresses = () => {
    setToggle(!toggle);
  };

  const handleSetup = () => {
    setupBVT();
  };

  const handlePurchase = () => {
    purchaseBVT(buyAmount.toFixed(1));
  };

  useEffect(() => {
    getAllAddresses().then((addresses) => {
      setAddresses(addresses);
    });
  }, []);

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
        <div className='flex flex-1 justify-start items-start flex-col mf:mr-10'>
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            Welcome
          </h1>
          <p className='text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base'>
            Sign the Whitelist to get started!
          </p>
          <button
            type='button'
            onClick={() => signWhitelist()}
            className='flex flex-row justify-center items-center my-5 bg-[#0f9c45] p-3 rounded-full cursor-pointer hover:bg-[#76ef4e]'>
            <p className='text-white text-base font-semibold'>Sign Whitelist</p>
          </button>
          <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
            <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center text-white blue-glassmorphism'>
              <button onClick={() => showAddresses()}>Get All Addresses</button>
              {toggle && (
                <div>
                  {addresses.map((address) => (
                    <div key={address}>
                      <p>{address}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
              <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center text-white blue-glassmorphism'>
                <Link to='/admin'>
                  <button
                  type='button'
                  className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer'>
                  Admin Dashboard
                </button>
                </Link>
              </div>
            </div>

            <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
              <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center text-white blue-glassmorphism'>
                <button
                  type='button'
                  onClick={handleSetup}
                  className='text-white w-full mt-2 mb-4 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer'>
                  Setup account to receive BVT
                </button>
                <div className='text-white mb-2'>Amount to Buy ($BVT)</div>
                <input
                  type='range'
                  min={0}
                  max={500}
                  value={buyAmount}
                  onChange={(e) => handleBuyChange(Number(e.target.value))}
                  className='w-full'
                />
                <div className='w-1/2 text-white text-center'>
                  {buyAmount} BVT
                </div>

                <button
                  type='button'
                  onClick={handlePurchase}
                  className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer'>
                  Purchase BVT
                </button>
              </div>
            </div>
            {/*             <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
              <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center text-black blue-glassmorphism'>
                <Exchange />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
