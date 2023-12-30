import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div className="bg-zinc-700 flex justify-between px-10 py-4">
        <Link
          to="/"
          className="text-white font-bold text-2xl flex items-center gap-x-2"
        >
          <h1 className="hover:text-gray-500"> React + MySQL </h1>
        </Link>
        <ul className="flex gap-3">
            <li>
                <Link 
                  to="/"
                  className="text-white font-bold text-2xl flex items-center gap-x-2 hover:text-gray-500"
                >
                  Home
                </Link>
            </li>
            <li>
                <Link 
                  to="/new"
                  className="text-white font-bold text-2xl flex items-center gap-x-2 hover:text-gray-500"
                >
                  Create Task
                </Link>
            </li>
        </ul>
      </div>
    );
}
  
export default Navbar;