import { useNavigate } from "react-router-dom";

const Footer = ({ selectedSkip }) => {
  if (!selectedSkip) return null;

  const navigate = useNavigate();

  return (
    <footer className="w-full bg-gray-900 text-white fixed bottom-0 left-0 py-6 px-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto text-xs sm:text-lg">
        <div className="flex gap-2 items-center">
          <span>{selectedSkip.size} Yard Skip</span>
          <span className="font-bold text-blue-500 text-lg">
            £
            {Math.round(
              selectedSkip.price_before_vat +
                (selectedSkip.price_before_vat * selectedSkip.vat) / 100
            )}
          </span>
          <span>{selectedSkip.hire_period_days} day hire</span>
        </div>

        <div className="flex gap-2">
          <button
            className="bg-gray-700 px-4 py-2 rounded cursor-pointer"
            onClick={() => navigate("/2")}
          >
            Back
          </button>
          <button
            className="bg-blue-500 px-4 py-2 rounded  cursor-pointer"
            onClick={() => navigate("/3")}
          >
            Continue
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
