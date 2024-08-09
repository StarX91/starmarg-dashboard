import React, { useState } from "react";
import { FaSquare, FaFolder } from "react-icons/fa";
import { BiTask } from "react-icons/bi";

const Main = () => {
  // Sample images array for Section with unique identifiers
  const [images, setImages] = useState([
    { id: 1, label: "Sample_Windmill_1", date: "10 June 2024" },
    { id: 2, label: "Sample_Windmill_2", date: "10 June 2024" },
    { id: 3, label: "Sample_Windmill_3", date: "10 June 2024" },
    { id: 4, label: "Sample_Windmill_4", date: "10 June 2024" },
    { id: 5, label: "Sample_Windmill_5", date: "10 June 2024" },
    { id: 6, label: "Sample_Windmill_6", date: "10 June 2024" },
  ]);

  // Sample items array for Sect and Sec with unique identifiers
  const [sectItems, setSectItems] = useState([
    { id: 1, label: "Sample_Windmill_1", date: "10 June 2024" },
    { id: 2, label: "Sample_Windmill_2", date: "10 June 2024" },
    { id: 3, label: "Sample_Windmill_3", date: "10 June 2024" },
    { id: 4, label: "Sample_Windmill_4", date: "10 June 2024" },
  ]);

  const [secItems, setSecItems] = useState([
    { id: 1, label: "Project_Name", date: "10 June 2024" },
    { id: 2, label: "Project_Name", date: "10 June 2024" },
    { id: 3, label: "Project_Name", date: "10 June 2024" },
    { id: 4, label: "Project_Name", date: "10 June 2024" },
    { id: 5, label: "Project_Name", date: "10 June 2024" },
    { id: 6, label: "Project_Name", date: "10 June 2024" },
  ]);

  const [menuOpen, setMenuOpen] = useState(null);
  const [sectMenuOpen, setSectMenuOpen] = useState(null);
  const [secMenuOpen, setSecMenuOpen] = useState(null);

  const handleMenuClick = (index) => {
    setMenuOpen(menuOpen === index ? null : index);
  };

  const handleSectMenuClick = (index) => {
    setSectMenuOpen(sectMenuOpen === index ? null : index);
  };

  const handleSecMenuClick = (index) => {
    setSecMenuOpen(secMenuOpen === index ? null : index);
  };

  const handleDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setMenuOpen(null); // Close the menu after deletion
  };

  const handleSectDelete = (index) => {
    setSectItems(sectItems.filter((_, i) => i !== index));
    setSectMenuOpen(null); // Close the menu after deletion
  };

  const handleSecDelete = (index) => {
    setSecItems(secItems.filter((_, i) => i !== index));
    setSecMenuOpen(null); // Close the menu after deletion
  };

  return (
    <div className="bg-black min-h-screen text-white p-24">
      <Section
        title="Recent Image Sets"
        images={images}
        menuOpen={menuOpen}
        onMenuClick={handleMenuClick}
        onDelete={handleDelete}
      />
      <Sect
        title="Recent Plans"
        items={sectItems}
        menuOpen={sectMenuOpen}
        onMenuClick={handleSectMenuClick}
        onDelete={handleSectDelete}
      />
      <Sec
        title="All Projects"
        items={secItems}
        menuOpen={secMenuOpen}
        onMenuClick={handleSecMenuClick}
        onDelete={handleSecDelete}
      />
    </div>
  );
};

const Section = ({ title, images, menuOpen, onMenuClick, onDelete }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-neutral-300 font-bold">{title}</h2>
        <button className="text-sm text-neutral-400 hover:underline">
          See all
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-neutral-900 rounded-2xl">
        {images.map((image, index) => (
          <div key={image.id} className="p-4 rounded-lg shadow-lg relative">
            <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2"></div>
            <div className="flex justify-between">
              <h3 className="text-lg text-zinc-300 font-semibold">
                {image.label}
              </h3>
              <button onClick={() => onMenuClick(index)}>...</button>
            </div>
            <div className="flex justify-between mr-28">
              <p className="text-sm text-neutral-500 font-semibold">
                {image.date}
              </p>
              <div className="flex">
                <BiTask className="mt-0.5" />
                <p className="text-sm text-neutral-300 pl-1">0</p>
              </div>
            </div>
            {menuOpen === index && (
              <div className="absolute right-0 top-8 bg-neutral-800 text-white rounded shadow-md">
                <button
                  onClick={() => onDelete(index)}
                  className="block px-4 py-2 text-sm hover:bg-red-500 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Sect = ({ title, items, menuOpen, onMenuClick, onDelete }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-neutral-300 font-bold">{title}</h2>
        <button className="text-sm text-gray-400 hover:underline">
          See all
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-4 bg-neutral-900 rounded-2xl">
        {items.map((item, index) => (
          <div key={item.id} className="p-4 rounded-lg shadow-lg relative">
            <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2"></div>
            <div className="flex justify-between">
              <h3 className="text-lg text-zinc-300 font-semibold">
                {item.label}
              </h3>
              <button onClick={() => onMenuClick(index)}>...</button>
            </div>
            <div className="flex justify-between mr-64">
              <p className="text-sm text-neutral-500 font-semibold">
                {item.date}
              </p>
              <div className="flex">
                <BiTask className="mt-0.5" />
                <p className="text-sm text-neutral-300 pl-1">0</p>
              </div>
            </div>
            {menuOpen === index && (
              <div className="absolute right-0 top-8 bg-neutral-800 text-white rounded shadow-md">
                <button
                  onClick={() => onDelete(index)}
                  className="block px-4 py-2 text-sm hover:bg-red-500 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Sec = ({ title, items, menuOpen, onMenuClick, onDelete }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-neutral-300 font-bold">{title}</h2>
        <button className="text-sm text-gray-400 hover:underline">
          See all
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-neutral-900 rounded-2xl">
        {items.map((item, index) => (
          <div key={item.id} className="p-4 rounded-lg shadow-lg relative">
            <FaFolder className="h-32 md:h-48 size-[230px] rounded-lg mb-2 text-neutral-700" />
            <div className="flex justify-between">
              <h3 className="text-lg text-zinc-300 font-semibold">
                {item.label}
              </h3>
              <button onClick={() => onMenuClick(index)}>...</button>
            </div>
            <div className="flex justify-between mr-24">
              <p className="text-sm text-neutral-500 font-semibold">
                {item.date}
              </p>
              <div className="flex">
                <BiTask className="mt-0.5" />
                <p className="text-sm text-neutral-300 pl-1">0</p>
              </div>
            </div>
            {menuOpen === index && (
              <div className="absolute right-0 top-8 bg-neutral-800 text-white rounded shadow-md">
                <button
                  onClick={() => onDelete(index)}
                  className="block px-4 py-2 text-sm hover:bg-red-500 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
