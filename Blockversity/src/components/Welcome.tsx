import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { TbCoin } from "react-icons/tb";
import { BsInfoCircle } from "react-icons/bs";

import Loader from "./Loader";

interface FormData {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
}

interface TransactionContext {
  currentAccount: string | null;
  connectWallet: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  sendTransaction: () => void;
  formData: FormData;
  isLoading: boolean;
}

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input: React.FC<{ placeholder: string; name: string; type: string; value: string; handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void }> = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome: React.FC = () => {
//   const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext<TransactionContext>(TransactionContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Welcome <br /> Become a flow Developer
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the Web3 world. Become a flow developer. Learn how to build
            your own NFTs, DAOs, and more.
          </p>
         
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#0f9c45] p-3 rounded-full cursor-pointer hover:bg-[#76ef4e]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 flow-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <TbCoin fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  currentAccount
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  flow
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism"> 

          </div>
        </div>


          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              flow
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;