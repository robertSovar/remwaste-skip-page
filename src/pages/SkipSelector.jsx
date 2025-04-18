// SkipSelector.jsx
import { skipImages } from "../utils/skipImages";
import { useEffect, useState } from "react";
import getSkips from "../services/api";
import { FiAlertTriangle } from "react-icons/fi";

const SkipSelector = ({ onSelect }) => {
  const [skips, setSkips] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    getSkips().then((data) => {
      setSkips(data);
    });
  }, []);

  const getImageForSize = (size) => {
    const image = skipImages.find((img) =>
      img.title.startsWith(`${size} Yard`)
    );
    return image
      ? image.url
      : "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg";
  };

  const handleCardClick = (id) => {
    setSelectedCardId(id);
    const selected = skips.find((s) => s.id === id);
    if (onSelect) onSelect(selected);
  };

  return (
    <div className="mt-16 mx-auto max-w-7xl mb-16">
      <div className="flex flex-col items-center gap-6 mb-16">
        <h1 className="text-xl sm:text-3xl font-bold">Choose Your Skip Size</h1>
        <p className="text-white text-sm sm:text-lg">
          Select the skip size that best suits your needs
        </p>
      </div>

      <div className="flex justify-center gap-4 sm:gap-10 flex-wrap w-full">
        {skips.map((skip) => (
          <div
            key={skip.id}
            className="cursor-pointer"
            onClick={() => handleCardClick(skip.id)}
          >
            <div
              className={`flex flex-col gap-4 sm:gap-6 text-white border-2 rounded-md p-8 relative ${
                skip.id === selectedCardId
                  ? "border-green-500 "
                  : "border-blue-500"
              }`}
            >
              <div className="relative">
                <div className="w-64 h-40 sm:w-80 sm:h-52 overflow-hidden rounded-lg">
                  <img
                    src={getImageForSize(skip.size)}
                    alt={`${skip.size} Yard Skip`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {Number(skip.size) >= 10 && (
                  <p className="flex items-center gap-2 text-yellow-500 text-sm absolute bottom-6 left-2 bg-gray-800 rounded-md p-2">
                    <FiAlertTriangle />
                    Not allowed on the road
                  </p>
                )}
              </div>

              <div>
                <span className="text-xs sm:text-sm text-white bg-blue-500 rounded-md p-2 absolute top-10 right-10">
                  {skip.size} yards
                </span>
                <span className="text-xs sm:text-lg">
                  {skip.size} Yard Skip
                </span>
                <p className="text-xs sm:text-sm">
                  {Number(skip.size) === 16 ? "7" : skip.hire_period_days} day
                  hire period
                </p>
              </div>

              <span className="text-2xl sm:text-3xl text-blue-500 font-bold">
                £
                {Math.round(
                  skip.price_before_vat +
                    (skip.price_before_vat * skip.vat) / 100
                )}
              </span>

              <div className="flex justify-center">
                <button
                  className={`${
                    selectedCardId === skip.id ? "bg-green-500" : "bg-blue-500"
                  } text-white font-bold py-2 px-4 rounded-full w-full`}
                >
                  {selectedCardId === skip.id
                    ? "Selected"
                    : "Select this skip →"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkipSelector;
