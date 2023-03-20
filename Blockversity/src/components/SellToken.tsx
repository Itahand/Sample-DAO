import React, { useState } from 'react';

type SellTokensFormData = {
    maxSupply: number;
    totalSupply: number;
    minCap: number;
    maxCap: number;
    startDate: Date;
    endDate: Date;
    tokenPrice: number;
    lockup: number;
};

const initialFormData: SellTokensFormData = {
    maxSupply: 1000000,
    totalSupply: 0,
    minCap: 100,
    maxCap: 100000,
    startDate: new Date(),
    endDate: new Date(),
    tokenPrice: 1,
    lockup: 0,
};

export default function SellTokensForm() {
    const [formData, setFormData] = useState<SellTokensFormData>(initialFormData);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form className="w-full max-w-screen-xl mx-auto px-6 py-8" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <h2 className="text-2xl mb-2 font-medium">Token Supply</h2>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <div className="text-lg mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="maxSupply">
                                Max Supply
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="maxSupply"
                                type="number"
                                name="maxSupply"
                                value={formData.maxSupply}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="text-lg mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="totalSupply">
                                Total Supply
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="totalSupply"
                                type="number"
                                name="totalSupply"
                                value={formData.totalSupply}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <h2 className="text-2xl mb-2 font-medium">Token Sale</h2>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <div className="text-lg mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="minCap">
                                Min Cap
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="minCap"
                                type="number"
                                name="minCap"
                                value={formData.minCap}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="text-lg mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="maxCap">
                                Max Cap
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="maxCap"
                                type="number"
                                name="maxCap"
                                value={formData.maxCap}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="text-lg mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="startDate">
                                Start Date
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="startDate"
                                type="date"
                                name="startDate"
                                value={formData.startDate.toISOString().split('T')[0]}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="text-lg mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="endDate">
                                End Date
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="endDate"
                                type="date"
                                name="endDate"
                                value={formData.endDate.toISOString().split('T')[0]}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <h2 className="text-2xl mb-2 font-medium">Token Price</h2>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <div className="text-lg mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tokenPrice">
                                Token Price
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="tokenPrice"
                                type="number"
                                name="tokenPrice"
                                value={formData.tokenPrice}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="text-lg mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tokenPriceCurrency">
                                Token Price Currency
                            </label>
                            <select
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="tokenPriceCurrency"
                                name="tokenPriceCurrency"
                                value={formData.tokenPriceCurrency}
                                onChange={handleInputChange}
                            >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="JPY">JPY</option>
                                <option value="CNY">CNY</option>
                                <option value="INR">INR</option>
                                <option value="KRW">KRW</option>
                                <option value="RUB">RUB</option>
                                <option value="TRY">TRY</option>
                                <option value="BRL">BRL</option>
                                <option value="CAD">CAD</option>

                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <h2 className="text-2xl mb-2 font-medium">Token Distribution</h2>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <div className="text-lg mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tokenDistribution">
                                Token Distribution
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="tokenDistribution"
                                name="tokenDistribution"
                                value={formData.tokenDistribution}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <h2 className="text-2xl mb-2 font-medium">Token Allocation</h2>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <div className="text-lg mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tokenAllocation">
                                Token Allocation
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="tokenAllocation"
                                name="tokenAllocation"
                                value={formData.tokenAllocation}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <h2 className="text-2xl mb-2 font-medium">Token Vesting</h2>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <div className="text-lg mb-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tokenVesting">
                                Token Vesting
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="tokenVesting"
                                name="tokenVesting"
                                value={formData.tokenVesting}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

