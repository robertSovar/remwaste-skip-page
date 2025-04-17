import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

// incons
import { FaTruck } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuShield } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineCreditCard } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 py-8 text-lg text-white p-8 ">
      <ul className="flex justify-around shrink flex-wrap gap-4">
        <NavLink
          to="/1"
          className={({ isActive }) =>
            isActive ? "text-blue-500  border-b" : ""
          }
        >
          <li className="flex gap-2 items-center cursor-pointer">
            {<FaLocationDot />} Postcodes
          </li>
        </NavLink>
        <NavLink
          to="/2"
          className={({ isActive }) =>
            isActive ? "text-blue-500 border-b" : ""
          }
        >
          <li className="flex gap-2 items-center cursor-pointer">
            {<RiDeleteBin5Line />} Waste Type
          </li>
        </NavLink>
        <NavLink
          to="/skip"
          className={({ isActive }) =>
            isActive ? "text-blue-500 border-b" : ""
          }
        >
          <li className="flex gap-2 items-center cursor-pointer">
            {<FaTruck />} Select Skip
          </li>
        </NavLink>
        <NavLink
          to="/3"
          className={({ isActive }) =>
            isActive ? "text-blue-500 border-b" : ""
          }
        >
          <li className="flex gap-2 items-center cursor-pointer">
            {<LuShield />} Permit Check
          </li>
        </NavLink>
        <NavLink
          to="/4"
          className={({ isActive }) =>
            isActive ? "text-blue-500 border-b" : ""
          }
        >
          <li className="flex gap-2 items-center cursor-pointer">
            {<LuCalendar />} Choose Date
          </li>
        </NavLink>
        <NavLink
          to="/5"
          className={({ isActive }) =>
            isActive ? "text-blue-500 border-b" : ""
          }
        >
          <li className="flex gap-2 items-center cursor-pointer">
            {<MdOutlineCreditCard />} Payment
          </li>
        </NavLink>
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
