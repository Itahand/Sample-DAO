import React, { useState } from 'react';

interface TokenManagement {
    refund: number;
    burn: number;
    freeze: boolean;
    distribute: boolean;
}

const initialFormValues: TokenManagement = {
    refund: 0,
    burn: 0,
    freeze: false,
    distribute: false,
};

export default function ManageTokensForm() {
    const [formValues, setFormValues] = useState<TokenManagement>(initialFormValues);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        setFormValues({
            ...formValues,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted:', formValues);
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-screen-md">
                <div className="flex flex-col">
                    <label htmlFor="refund">Refund</label>
                    <input
                        type="number"
                        id="refund"
                        name="refund"
                        value={formValues.refund}
                        onChange={handleChange}
                        className="rounded-lg border-gray-400 border p-2 w-full mt-2"
                    />
                    <label htmlFor="burn" className="mt-4">Burn</label>
                    <input
                        type="number"
                        id="burn"
                        name="burn"
                        value={formValues.burn}
                        onChange={handleChange}
                        className="rounded-lg border-gray-400 border p-2 w-full mt-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="freeze">Freeze</label>
                    <input
                        type="checkbox"
                        id="freeze"
                        name="freeze"
                        checked={formValues.freeze}
                        onChange={handleChange}
                        className="mt-2"
                    />
                    <label htmlFor="distribute" className="mt-4">Distribute</label>
                    <input
                        type="checkbox"
                        id="distribute"
                        name="distribute"
                        checked={formValues.distribute}
                        onChange={handleChange}
                        className="mt-2"
                    />
                </div>
            </div>
            <button type="submit" className="mt-8 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                Launch
            </button>
        </form>
    );
}
