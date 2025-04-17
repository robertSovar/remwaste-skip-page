import { useEffect, useState } from "react";
import getSkips from "../services/api.js";
import { FiAlertTriangle } from "react-icons/fi";

const SkipSelector = () => {
  const [skips, setSkips] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };

  useEffect(() => {
    getSkips().then((data) => {
      setSkips(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="mt-16">
      <div className="flex flex-col items-center gap-6 mb-16">
        <h1 className="text-xl sm:text-3xl font-bold">Choose Your Skip Size</h1>
        <p className="relative group text-white text-sm sm:text-lg">
          Select the skip size that best suits your needs
        </p>
      </div>
      <main>
        <div className="flex justify-center gap-4 sm:gap-10 flex-wrap w-full">
          {skips.map((skip) => {
            return (
              <div
                key={skip.id}
                className="cursor-pointer"
                onClick={() => handleCardClick(skip.id)}
              >
                <div
                  className={`flex flex-col gap-4 sm:gap-6 text-white border-2 inset-shadow-sm  rounded-md p-8 relative ${
                    skip.id === selectedCardId
                      ? "border-green-500  inset-shadow-green-500"
                      : "border-blue-500 inset-shadow-indigo-500"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={
                        Number(skip.size) < 20
                          ? "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg"
                          : "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg"
                      }
                      alt=""
                      className="rounded-md max-w-3xs sm:max-w-xs relative"
                    />
                    <p
                      className={
                        Number(skip.size) >= 10
                          ? `flex items-center gap-2 text-yellow-500 text-sm absolute bottom-6 left-2 bg-gray-800 rounded-md p-2`
                          : "hidden"
                      }
                    >
                      {Number(skip.size) >= 10 && (
                        <>
                          <FiAlertTriangle />
                          Not allowed on the road
                        </>
                      )}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs sm:text-sm text-white bg-blue-500 rounded-md p-2 absolute top-10 right-10">
                      {skip.size} yards
                    </span>
                    <span className="text-xs sm:text-lg">
                      {skip.size} Yard Skip
                    </span>
                    <p className="text-xs sm:text-sm">
                      {Number(skip.size) === 16 ? "7" : skip.hire_period_days}{" "}
                      day hire period
                    </p>
                  </div>

                  <span className="text-2xl sm:text-3xl text-blue-500 font-bold ">
                    £
                    {Math.round(
                      skip.price_before_vat +
                        (skip.price_before_vat * skip.vat) / 100
                    )}
                  </span>

                  <div className="flex justify-center">
                    <button
                      className={`${
                        selectedCardId === skip.id
                          ? "bg-green-500"
                          : "bg-blue-500"
                      } text-white font-bold py-2 px-4 rounded-full w-full cursor-pointer`}
                    >
                      {selectedCardId === skip.id
                        ? "Selected"
                        : "Select this skip ->"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default SkipSelector;
