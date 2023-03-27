import React, { useState } from "react";
import CreateToken from "./CreateToken";
import SellToken from "./SellToken";
import ManageToken from "./ManageToken";
import ICO from "./ICO";
import Tokennomics from "./Tokenomics";
import PurchaserList from "./PurchaserList";

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("createToken");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h2>
          <div className="flex flex-wrap justify-center">
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
          <div className="mt-6">
            {activeTab === "createToken" && <CreateToken />}
            {activeTab === "sellToken" && <SellToken />}
            {activeTab === "manageToken" && <ManageToken />}
            {activeTab === "ico" && <ICO />}
            {activeTab === "tokennomics" && <Tokennomics />}
            {activeTab === "purchaserList" && <PurchaserList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
