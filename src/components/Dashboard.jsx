import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className=" m-auto h-screen max-w-7xl text-lg text-white p-8 ">
      <ul className="flex justify-around shrink flex-wrap gap-4">
        <NavLink
          to="/1"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          <li className="flex gap-2 items-center cursor-pointer">Postcodes</li>
        </NavLink>
        <NavLink
          to="/2"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          <li className="flex gap-2 items-center cursor-pointer">Waste Type</li>
        </NavLink>
        <NavLink
          to="/skip"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          <li className="flex gap-2 items-center cursor-pointer">
            Select Skip
          </li>
        </NavLink>
        <NavLink
          to="/3"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          <li className="flex gap-2 items-center cursor-pointer">
            Permit Check
          </li>
        </NavLink>
        <NavLink
          to="/4"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          <li className="flex gap-2 items-center cursor-pointer">
            Choose Date
          </li>
        </NavLink>
        <NavLink
          to="/5"
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
        >
          <li className="flex gap-2 items-center cursor-pointer">Payment</li>
        </NavLink>
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
