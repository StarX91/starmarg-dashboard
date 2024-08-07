import React from "react";
import { FaFolder } from "react-icons/fa";
import { BiTask } from "react-icons/bi";

const Main = () => {
  return (
    <div className="bg-black min-h-screen text-white p-24">
      <Section title="Recent Image Sets" />
      <Sect title="Recent Plans " />
      <Sec title="All Projects" />
    </div>
  );
};

const Section = ({ title }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-neutral-300 font-bold">{title}</h2>
        <button className="text-sm text-neutral-400 hover:underline">
          See all
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-neutral-900 rounded-2xl">
        {/* Hardcoded items for demonstration */}
        <div className=" p-4 rounded-lg shadow-lg">
          <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2"></div>
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Sample_Windmill
            </h3>
            <button>...</button>
          </div>
          <div className="flex justify-between mr-28">
            <p className="text-sm text-neutral-500 font-semibold">
              10 June 2024
            </p>
            <div className="flex ">
              <BiTask className="mt-0.5" />
              <p className="text-sm text-neutral-300 pl-1 ">
                <i className="fas fa-eye"></i> 0
              </p>
            </div>
          </div>
        </div>
        <div className=" p-4 rounded-lg shadow-lg">
          <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2"></div>
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Sample_Windmill
            </h3>
            <button>...</button>
          </div>
          <div className="flex justify-between mr-28">
            <p className="text-sm text-neutral-500 font-semibold">
              10 June 2024
            </p>
            <div className="flex ">
              <BiTask className="mt-0.5" />
              <p className="text-sm text-neutral-300 pl-1 ">
                <i className="fas fa-eye"></i> 0
              </p>
            </div>
          </div>
        </div>
        <div className=" p-4 rounded-lg shadow-lg">
          <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2"></div>
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Sample_Windmill
            </h3>
            <button>...</button>
          </div>
          <div className="flex justify-between mr-28">
            <p className="text-sm text-neutral-500 font-semibold">
              10 June 2024
            </p>
            <div className="flex ">
              <BiTask className="mt-0.5" />
              <p className="text-sm text-neutral-300 pl-1 ">
                <i className="fas fa-eye"></i> 0
              </p>
            </div>
          </div>
        </div>
        <div className=" p-4 rounded-lg shadow-lg">
          <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2"></div>
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Sample_Windmill
            </h3>
            <button>...</button>
          </div>
          <div className="flex justify-between mr-28">
            <p className="text-sm text-neutral-500 font-semibold">
              10 June 2024
            </p>
            <div className="flex ">
              <BiTask className="mt-0.5" />
              <p className="text-sm text-neutral-300 pl-1 ">
                <i className="fas fa-eye"></i> 0
              </p>
            </div>
          </div>
        </div>
        <div className=" p-4 rounded-lg shadow-lg">
          <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2"></div>
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Sample_Windmill
            </h3>
            <button>...</button>
          </div>
          <div className="flex justify-between mr-28">
            <p className="text-sm text-neutral-500 font-semibold">
              10 June 2024
            </p>
            <div className="flex ">
              <BiTask className="mt-0.5" />
              <p className="text-sm text-neutral-300 pl-1 ">
                <i className="fas fa-eye"></i> 0
              </p>
            </div>
          </div>
        </div>
        <div className=" p-4 rounded-lg shadow-lg">
          <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2"></div>
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Sample_Windmill
            </h3>
            <button>...</button>
          </div>
          <div className="flex justify-between mr-28">
            <p className="text-sm text-neutral-500 font-semibold">
              10 June 2024
            </p>
            <div className="flex ">
              <BiTask className="mt-0.5" />
              <p className="text-sm text-neutral-300 pl-1 ">
                <i className="fas fa-eye"></i> 0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sect = ({ title }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-neutral-300 font-bold">{title}</h2>
        <button className="text-sm text-gray-400 hover:underline">
          See all
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-4 bg-neutral-900 rounded-2xl">
        {/* Hardcoded items for demonstration */}

        <div className=" p-4 rounded-lg shadow-lg">
          <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2"></div>
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Sample_Windmill
            </h3>
            <button>...</button>
          </div>
          <div className="flex justify-between mr-64">
            <p className="text-sm text-neutral-500 font-semibold">
              10 June 2024
            </p>
            <div className="flex ">
              <BiTask className="mt-0.5" />
              <p className="text-sm text-neutral-300 pl-1 ">
                <i className="fas fa-eye"></i> 0
              </p>
            </div>
          </div>
        </div>
        <div className=" p-4 rounded-lg shadow-lg">
          <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2"></div>
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Sample_Windmill
            </h3>
            <button>...</button>
          </div>
          <div className="flex justify-between mr-64">
            <p className="text-sm text-neutral-500 font-semibold">
              10 June 2024
            </p>
            <div className="flex ">
              <BiTask className="mt-0.5" />
              <p className="text-sm text-neutral-300 pl-1 ">
                <i className="fas fa-eye"></i> 0
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg shadow-lg">
          <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2"></div>
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Sample_Windmill
            </h3>
            <button>...</button>
          </div>
          <div className="flex justify-between mr-64">
            <p className="text-sm text-neutral-500 font-semibold">
              10 June 2024
            </p>
            <div className="flex ">
              <BiTask className="mt-0.5" />
              <p className="text-sm text-neutral-300 pl-1 ">
                <i className="fas fa-eye"></i> 0
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg shadow-lg">
          <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2"></div>
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Sample_Windmill
            </h3>
            <button>...</button>
          </div>
          <div className="flex justify-between mr-64">
            <p className="text-sm text-neutral-500 font-semibold">
              10 June 2024
            </p>
            <div className="flex ">
              <BiTask className="mt-0.5" />
              <p className="text-sm text-neutral-300 pl-1 ">
                <i className="fas fa-eye"></i> 0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sec = ({ title }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-neutral-300 font-bold">{title}</h2>
        <button className="text-sm text-gray-400 hover:underline">
          See all
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-neutral-900 rounded-2xl">
        {/* Hardcoded items for demonstration */}
        <div className=" p-4 rounded-lg shadow-lg">
          <FaFolder className="h-32 md:h-48 size-[230px] rounded-lg mb-2 text-neutral-700" />
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Project_Name
            </h3>
            <button>...</button>
          </div>
          <p className="text-sm text-gray-400 font-semibold">10 June 2024</p>
        </div>
        <div className="bg-neutral-900 p-4 rounded-lg shadow-lg">
          <FaFolder className="h-32 md:h-48 size-[230px] rounded-lg mb-2 text-neutral-700" />
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Project_Name
            </h3>
            <button>...</button>
          </div>
          <p className="text-sm text-gray-400 font-semibold">10 June 2024</p>
        </div>
        <div className="bg-neutral-900 p-4 rounded-lg shadow-lg">
          <FaFolder className="h-32 md:h-48 size-[230px] rounded-lg mb-2 text-neutral-700" />
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Project_Name
            </h3>
            <button>...</button>
          </div>
          <p className="text-sm text-gray-400 font-semibold">10 June 2024</p>
        </div>
        <div className="bg-neutral-900 p-4 rounded-lg shadow-lg">
          <FaFolder className="h-32 md:h-48 size-[230px] rounded-lg mb-2 text-neutral-700" />
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Project_Name
            </h3>
            <button>...</button>
          </div>
          <p className="text-sm text-gray-400 font-semibold">10 June 2024</p>
        </div>
        <div className="bg-neutral-900 p-4 rounded-lg shadow-lg">
          <FaFolder className="h-32 md:h-48 size-[230px] rounded-lg mb-2 text-neutral-700" />
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Project_Name
            </h3>
            <button>...</button>
          </div>
          <p className="text-sm text-gray-400 font-semibold">10 June 2024</p>
        </div>
        <div className="bg-neutral-900 p-4 rounded-lg shadow-lg">
          <FaFolder className="h-32 md:h-48 size-[230px] rounded-lg mb-2 text-neutral-700" />
          <div className="flex justify-between">
            <h3 className="text-lg text-zinc-300 font-semibold">
              Project_Name
            </h3>
            <button>...</button>
          </div>
          <p className="text-sm text-gray-400 font-semibold">10 June 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
