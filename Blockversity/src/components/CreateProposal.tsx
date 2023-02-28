import { useState } from "react";

interface Props {
    onSubmit: (title: string, description: string, options: string[], startAt: number, endAt: number) => void;
}

export default function CreateProposal({ onSubmit }: Props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [options, setOptions] = useState<string[]>([]);
    const [startAt, setStartAt] = useState(0);
    const [endAt, setEndAt] = useState(0);

    const handleOptionChange = (index: number, value: string) => {
        setOptions((prevOptions) => {
            const newOptions = [...prevOptions];
            newOptions[index] = value;
            return newOptions;
        });
    };

    const handleAddOption = () => {
        setOptions((prevOptions) => [...prevOptions, ""]);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(title, description, options, startAt, endAt);
    };

    return (
        <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
            <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center text-white blue-glassmorphism'>
                <form className="max-w-xl mx-auto p-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block mb-2 font-bold">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-2 font-bold">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="options" className="block mb-2 font-bold">
                            Options
                        </label>
                        {options.map((option, index) => (
                            <input
                                key={index}
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 text-black rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                            />
                        ))}
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            onClick={handleAddOption}
                        >
                            Add Option
                        </button>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="startAt" className="block mb-2 font-bold">
                            Start At
                        </label>
                        <input
                            type="number"
                            id="startAt"
                            className="w-full px-3 py-2  text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={startAt}
                            onChange={(e) => setStartAt(parseFloat(e.target.value))}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="endAt" className="block mb-2 font-bold">
                            End At
                        </label>
                        <input
                            type="number"
                            id="endAt"
                            className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={endAt}
                            onChange={(e) => setEndAt(parseFloat(e.target.value))}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Create Proposal
                    </button>
                </form>
            </div>
        </div>
    );
}
