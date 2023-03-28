import React, { useState } from "react";
import CreateToken from "./CreateToken";
import SellToken from "./SellToken";
import ManageToken from "./ManageToken";
import ICO from "./ICO";
import Tokennomics from "./Tokenomics";
import PurchaserList from "./PurchaserList";

type Tokenomics = {
  name: string;
  symbol: string;
  address: string;
  price: number;
  maxSupply: number;
  initialSupply: number;
};


const myTokenomics: Tokenomics = {
  name: 'Tour Token',
  symbol: 'YK',
  address: '0x00000',
  price: 0.000000000000000000,
  maxSupply: 100000,
  initialSupply: 100000
};

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("createToken");
  const [isManageAccountActive, setIsManageAccountActive] = useState(true);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const toggleSections = () => {
    setIsManageAccountActive(!isManageAccountActive);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin</h2>
          <div className="flex flex-wrap justify-center">
            <div className={`flex-grow ${isManageAccountActive ? "" : "hidden"}`}>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Managed account</h3>
              <button
                className={`btn btn-outline-secondary m-2 ${activeTab === "createToken" ? "btn-primary" : ""
                  }`}
                onClick={() => handleTabClick("createToken")}
              >
                Create Token
              </button>
              <button
                className={`btn btn-outline-secondary m-2 ${activeTab === "sellToken" ? "btn-primary" : ""
                  }`}
                onClick={() => handleTabClick("sellToken")}
              >
                Sell Token
              </button>
              <button
                className={`btn btn-outline-secondary m-2 ${activeTab === "manageToken" ? "btn-primary" : ""
                  }`}
                onClick={() => handleTabClick("manageToken")}
              >
                Manage Token
              </button>
            </div>
            <div className={`flex-grow ${isManageAccountActive ? "hidden" : ""}`}>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dashboard</h3>
              <button
                className={`btn btn-outline-secondary m-2 ${activeTab === "ico" ? "btn-primary" : ""
                  }`}
                onClick={() => handleTabClick("ico")}
              >
                ICO
              </button>
              <button
                className={`btn btn-outline-secondary m-2 ${activeTab === "tokennomics" ? "btn-primary" : ""
                  }`}
                onClick={() => handleTabClick("tokennomics")}
              >
                Tokennomics
              </button>
              <button
                className={`btn btn-outline-secondary m-2 ${activeTab === "purchaserList" ? "btn-primary" : ""
                  }`}
                onClick={() => handleTabClick("purchaserList")}
              >
                Purchaser List
              </button>
            </div>
            <div className="flex-grow">
              <button
                className="btn btn-outline-secondary m-2"
                onClick={() => toggleSections()}
              >
                {isManageAccountActive ? "Dashboard" : "Manage Account"}
              </button>
            </div>
          </div>
          <div className="mt-4">
            {activeTab === "createToken" && <CreateToken />}
            {activeTab === "sellToken" && <SellToken />}
            {activeTab === "manageToken" && <ManageToken />}
            {activeTab === "ico" && <ICO />}
            {activeTab === "tokennomics" && <Tokennomics tokenomics={myTokenomics} />}
            {activeTab === "purchaserList" && <PurchaserList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;