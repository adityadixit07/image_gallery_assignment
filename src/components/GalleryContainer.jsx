import React, { useState, useMemo } from "react";
import EasyView from "./EasyView";
import MediumView from "./MediumView";
import ImageGallery from "./ImageGallery";
const GalleryContainer = () => {
  const [activeTab, setActiveTab] = useState("easy");

  const tabs = [
    { id: "easy", label: "Easy" },
    { id: "medium", label: "Medium" },
    { id: "hard", label: "Hard" },
  ];

  // Memoize the gallery components
  const galleryComponents = useMemo(
    () => ({
      easy: <EasyView />,
      medium: <MediumView />,
      hard: <ImageGallery />,
    }),
    []
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium 
                ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } 
                ${tab.id === "easy" ? "rounded-l-lg" : ""}
                ${tab.id === "hard" ? "rounded-r-lg" : ""}
                border border-gray-200 
                focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">
        {Object.entries(galleryComponents).map(([id, component]) => (
          <div key={id} className={activeTab === id ? "block" : "hidden"}>
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryContainer;
