import React, { useState } from "react";
import { FaSquare, FaFolder, FaPlus } from "react-icons/fa";
import { BiTask } from "react-icons/bi";

const Main = () => {
  const [imageSections, setImageSections] = useState([
    [
      { id: 1, label: "Sample_Windmill_1", date: "10 June 2024" },
      { id: 2, label: "Sample_Windmill_2", date: "10 June 2024" },
      { id: 3, label: "Sample_Windmill_3", date: "10 June 2024" },
      { id: 4, label: "Sample_Windmill_4", date: "10 June 2024" },
      { id: 5, label: "Sample_Windmill_5", date: "10 June 2024" },
      { id: 6, label: "Sample_Windmill_6", date: "10 June 2024" },
    ],
  ]);

  const [planSections, setPlanSections] = useState([
    [
      { id: 1, label: "Sample_Windmill_1", date: "10 June 2024" },
      { id: 2, label: "Sample_Windmill_2", date: "10 June 2024" },
      { id: 3, label: "Sample_Windmill_3", date: "10 June 2024" },
      { id: 4, label: "Sample_Windmill_4", date: "10 June 2024" },
    ],
  ]);

  const [projectSections, setProjectSections] = useState([
    [
      { id: 1, label: "Project_Name_1", date: "10 June 2024" },
      { id: 2, label: "Project_Name_2", date: "10 June 2024" },
      { id: 3, label: "Project_Name_3", date: "10 June 2024" },
      { id: 4, label: "Project_Name_4", date: "10 June 2024" },
      { id: 5, label: "Project_Name_5", date: "10 June 2024" },
      { id: 6, label: "Project_Name_6", date: "10 June 2024" },
    ],
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

  const handleDelete = (sectionIndex, index) => {
    const newSections = [...imageSections];
    newSections[sectionIndex] = newSections[sectionIndex].filter(
      (_, i) => i !== index
    );
    setImageSections(newSections);
    setMenuOpen(null); // Close the menu after deletion
  };

  const handleSectDelete = (sectionIndex, index) => {
    const newSections = [...planSections];
    newSections[sectionIndex] = newSections[sectionIndex].filter(
      (_, i) => i !== index
    );
    setPlanSections(newSections);
    setSectMenuOpen(null); // Close the menu after deletion
  };

  const handleSecDelete = (sectionIndex, index) => {
    const newSections = [...projectSections];
    newSections[sectionIndex] = newSections[sectionIndex].filter(
      (_, i) => i !== index
    );
    setProjectSections(newSections);
    setSecMenuOpen(null); // Close the menu after deletion
  };

  const handleAddSection = (setSectionFunction) => {
    setSectionFunction((prevSections) => [...prevSections, []]); // Add an empty array for new sections
  };

  return (
    <div className="bg-black min-h-screen text-white p-24">
      {imageSections.map((images, sectionIndex) => (
        <Section
          key={sectionIndex}
          title={`Recent Image Sets ${sectionIndex + 1}`}
          images={images}
          menuOpen={menuOpen}
          onMenuClick={handleMenuClick}
          onDelete={(index) => handleDelete(sectionIndex, index)}
        />
      ))}
      <button
        onClick={() => handleAddSection(setImageSections)}
        className="flex items-center text-sm text-white hover:text-neutral-400 mb-12"
      >
        <FaPlus className="mr-2" />
        Add New Image Set
      </button>

      {planSections.map((items, sectionIndex) => (
        <Sect
          key={sectionIndex}
          title={`Recent Plans ${sectionIndex + 1}`}
          items={items}
          menuOpen={sectMenuOpen}
          onMenuClick={handleSectMenuClick}
          onDelete={(index) => handleSectDelete(sectionIndex, index)}
        />
      ))}
      <button
        onClick={() => handleAddSection(setPlanSections)}
        className="flex items-center text-sm text-white hover:text-neutral-400 mb-12"
      >
        <FaPlus className="mr-2" />
        Add New Plan Set
      </button>

      {projectSections.map((items, sectionIndex) => (
        <Sec
          key={sectionIndex}
          title={`All Projects ${sectionIndex + 1}`}
          items={items}
          menuOpen={secMenuOpen}
          onMenuClick={handleSecMenuClick}
          onDelete={(index) => handleSecDelete(sectionIndex, index)}
        />
      ))}
      <button
        onClick={() => handleAddSection(setProjectSections)}
        className="flex items-center text-sm text-white hover:text-neutral-400"
      >
        <FaPlus className="mr-2" />
        Add New Project Set
      </button>
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
        {images.length > 0 ? (
          images.map((image, index) => (
            <div
              key={image.id || index}
              className="p-4 rounded-lg shadow-lg relative"
            >
              <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2"></div>
              <div className="flex justify-between">
                <h3 className="text-lg text-zinc-300 font-semibold">
                  {image.label || "Empty"}
                </h3>
                <button onClick={() => onMenuClick(index)}>...</button>
              </div>
              <div className="flex justify-between mr-28">
                <p className="text-sm text-neutral-500 font-semibold">
                  {image.date || "No Date"}
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
          ))
        ) : (
          // Empty container with bg-neutral-900 and specified height
          <div className="p-4 rounded-lg shadow-lg bg-neutral-900 relative h-48 md:h-64"></div>
        )}
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
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 bg-neutral-900 rounded-2xl">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={item.id || index}
              className="p-4 rounded-lg shadow-lg relative"
            >
              <div className="bg-neutral-400 h-32 md:h-48 rounded-lg mb-2 flex items-center justify-center"></div>
              <div className="flex justify-between">
                <h3 className="text-lg text-neutral-300 font-semibold">
                  {item.label || "Empty"}
                </h3>
                <button onClick={() => onMenuClick(index)}>...</button>
              </div>
              <div className="flex justify-between mr-28">
                <p className="text-sm text-neutral-500 font-semibold">
                  {item.date || "No Date"}
                </p>
                <div className="flex">
                  <BiTask className="mt-0.5" />
                  <p className="text-sm text-neutral-300 pl-1 mr-32">0</p>
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
          ))
        ) : (
          // Empty container with bg-neutral-900 and specified height
          <div className="p-4 rounded-lg shadow-lg bg-neutral-900 relative h-48 md:h-64"></div>
        )}
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
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={item.id || index}
              className="p-4 rounded-lg shadow-lg relative"
            >
              <FaFolder className="h-32 md:h-48 size-[230px] rounded-lg mb-2 text-neutral-700" />

              <div className="flex justify-between">
                <h3 className="text-lg text-neutral-300 font-semibold">
                  {item.label || "Empty"}
                </h3>
                <button onClick={() => onMenuClick(index)}>...</button>
              </div>
              <div className="flex justify-between mr-28">
                <p className="text-sm text-neutral-500 font-semibold">
                  {item.date || "No Date"}
                </p>
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
          ))
        ) : (
          // Empty container with bg-neutral-900 and specified height
          <div className="p-4 rounded-lg shadow-lg bg-neutral-900 relative h-48 md:h-64"></div>
        )}
      </div>
    </div>
  );
};

export default Main;
