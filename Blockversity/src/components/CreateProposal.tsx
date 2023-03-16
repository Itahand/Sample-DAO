/** @format */

import { useState } from "react";
import { createProposal } from "../Flow/GovernanceActions";

interface Props {
  onSubmit: (
    title: string,
    description: string,
    options: string[],
    startAt: number,
    endAt: number
  ) => void;
}

export default function CreateProposal({ onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [startAt, setStartAt] = useState(0);
  const [endAt, setEndAt] = useState(0);
  const [createdBy, setCreatedBy] = useState("");

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
    <div className='flex flex-col items-center justify-start mt-10'>
      <div className='py-5 text-white'>
        <form
          className='max-w-3xl mx-auto p-2'
          onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='block mb-2 font-bold'>
              Title
            </label>
            <input
              type='text'
              id='title'
              className='w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='description'
              className='block mb-2 font-bold'>
              Description
            </label>
            <textarea
              id='description'
              className='w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              value={description}
              onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className='mb-4'>
            <div className='mb-4 flex items-center'>
              <label
                htmlFor='options'
                className='block mr-2 font-bold'>
                Options
              </label>
              <button
                type='button'
                className='bg-[#3C773E] text-white px-4 py-2 rounded-full'
                onClick={handleAddOption}>
                +
              </button>
            </div>

            {options.map((option, index) => (
              <input
                key={index}
                type='text'
                className='w-full px-3 py-2 border border-gray-300 text-black rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            ))}
          </div>
          <div className='flex justify-between'>
            <div className='mb-4 flex flex-row justify-between items-center'>
              <label
                htmlFor='startAt'
                className='block mr-2 font-bold'>
                Start At
              </label>
              <input
                type='date'
                id='startAt'
                className='w-full px-3 py-2  text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={startAt}
                onChange={(e) => setStartAt(parseFloat(e.target.value))}
                placeholder='MM/DD/YYYY'
              />
            </div>
            <div className='mb-4 flex flex-row justify-between items-center'>
              <label
                htmlFor='endAt'
                className='block mr-2 font-bold'>
                End At
              </label>
              <input
                type='date'
                id='endAt'
                className='w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                value={endAt}
                onChange={(e) => setEndAt(parseFloat(e.target.value))}
                placeholder='MM/DD/YYYY'
              />
            </div>
          </div>

          <div className='mb-4'>
            <label
              htmlFor='createdBy'
              className='block mb-2 font-bold'>
              Created by
            </label>
            <input
              type='text'
              id='createdBy'
              className='w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
            />
          </div>
          <div className='flex justify-end'>
            <button
              type='submit'
              className='bg-[#2D873B] text-white px-4 py-2 rounded-md mr-2'>
              Create Proposal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
