/** @format */

import { useState } from "react";

interface TokenFormData {
    name: string;
    symbol: string;
    address: string;
    maxSupply: number;
    totalSupply: number;
    tokenPrice: number;
}

const CreateTokenForm = () => {
    const [formData, setFormData] = useState<TokenFormData>({
        name: '',
        symbol: '',
        address: '',
        maxSupply: 0,
        totalSupply: 0,
        tokenPrice: 0,
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        // Here you can handle the submission of the form, for example,
        // sending the data to a server to create a new token.
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
            />
            <label htmlFor="symbol">Symbol</label>
            <input
                type="text"
                name="symbol"
                value={formData.symbol}
                onChange={handleInputChange}
            />
            <label htmlFor="address">Address</label>
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
            />
            <label htmlFor="maxSupply">Max Supply</label>
            <input
                type="number"
                name="maxSupply"
                value={formData.maxSupply}
                onChange={handleInputChange}
            />
            <label htmlFor="totalSupply">Total Supply</label>
            <input
                type="number"
                name="totalSupply"
                value={formData.totalSupply}
                onChange={handleInputChange}
            />
            <label htmlFor="tokenPrice">Token Price</label>
            <input
                type="number"
                name="tokenPrice"
                value={formData.tokenPrice}
                onChange={handleInputChange}
            />
            <button type="submit">Create Token</button>
        </form>
    );
};

export default CreateTokenForm;
