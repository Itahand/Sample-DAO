import { signWhitelist, getAllAddresses } from "../Flow/actions";
import { useEffect, useState } from "react";


const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

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

const Welcome: React.FC = () => {
  //   const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext<TransactionContext>(TransactionContext);
  const [addresses, setAddresses] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData({ ...formData, [name]: e.target.value });
  };


  const showAddresses = () => {
    setToggle(!toggle);
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { addressTo, amount  } = formData;

  };

  useEffect(() => {
    getAllAddresses().then((addresses) => {
      setAddresses(addresses);
    });
  }, []);


  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Welcome
          </h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Sign the Whitelist to get started!
          </p>
          <button
            type="button"
            onClick={() => signWhitelist()}
            className="flex flex-row justify-center items-center my-5 bg-[#0f9c45] p-3 rounded-full cursor-pointer hover:bg-[#76ef4e]"
          >
            <p className="text-white text-base font-semibold">
              Sign Whitelist
            </p>
          </button>

          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center text-white blue-glassmorphism">
              <button onClick={() => showAddresses()}>
                Get All Addresses
              </button>
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

          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <h2>Buy</h2>
            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center text-white blue-glassmorphism">
            <Input placeholder="Amount tokens" name="amount" type="number" handleChange={handleChange} />
            
            <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
              Buy now
            </button>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Welcome;