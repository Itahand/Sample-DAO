import { AiFillPlayCircle } from "react-icons/ai";
import { signGuestbook } from "../Flow/actions";
import { getAllAddresses } from "../Flow/Scripts/get_all_addresses";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome: React.FC = () => {
  //   const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext<TransactionContext>(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Welcome
          </h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Sign the Guestbook to get started!
            </p>
          <button
            type="button"
            onClick={() => signGuestbook()}
            className="flex flex-row justify-center items-center my-5 bg-[#0f9c45] p-3 rounded-full cursor-pointer hover:bg-[#76ef4e]"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">
              Sign Guestbook
            </p>
          </button>

          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Welcome;