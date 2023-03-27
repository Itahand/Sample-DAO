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

    const handleFreezeClick = () => {
        setFormValues({
            ...formValues,
            freeze: !formValues.freeze,
        });
    };

    const handleDistributeClick = () => {
        setFormValues({
            ...formValues,
            distribute: !formValues.distribute,
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
                        onChange={(event) =>
                            setFormValues({ ...formValues, refund: Number(event.target.value) })
                        }
                        className="rounded-lg border-gray-400 border p-2 w-full mt-2"
                    />
                    <label htmlFor="burn" className="mt-4">
                        Burn
                    </label>
                    <input
                        type="number"
                        id="burn"
                        name="burn"
                        value={formValues.burn}
                        onChange={(event) =>
                            setFormValues({ ...formValues, burn: Number(event.target.value) })
                        }
                        className="rounded-lg border-gray-400 border p-2 w-full mt-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label>Freeze</label>
                    <button
                        type="button"
                        className={`mt-2 rounded-lg border-gray-400 border p-2 w-full ${formValues.freeze ? 'bg-green-500 text-white' : ''
                            }`}
                        onClick={handleFreezeClick}
                    >
                        {formValues.freeze ? 'Frozen' : 'Not frozen'}
                    </button>
                    <label htmlFor="distribute" className="mt-4">
                        Distribute
                    </label>
                    <button
                        type="button"
                        className={`mt-2 rounded-lg border-gray-400 border p-2 w-full ${formValues.distribute ? 'bg-green-500 text-white' : ''
                            }`}
                        onClick={handleDistributeClick}
                    >
                        {formValues.distribute ? 'Distributed' : 'Not distributed'}
                    </button>
                </div>
            </div>
            <button type="submit" className="mt-8 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                Launch
            </button>
        </form>
    );
}
