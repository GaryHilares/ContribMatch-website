import { Link } from "react-router-dom";
import logo from '../../assets/contribmatch_logo.png';


export const Header = () => {
    return (
      <header className="flex justify-between items-center bg-white p-6 border-b border-solid">
        <img src={logo} alt="Logo" className="w-14 h-16"/>
        <div className="flex justify-end gap-4">
          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              className="rounded text-[#1e1e1e] text-xl cursor-pointer p-2"
            >
              Home
            </Link>
            <Link
              to="/profile"
              className="rounded text-[#1e1e1e] text-xl cursor-pointer p-2"
            >
              Profile
            </Link>
            <Link
              to="/projects"
              className="rounded text-[#1e1e1e] text-xl cursor-pointer p-2"
            >
              Projects
            </Link>
            <Link
              to="/resources"
              className="rounded text-[#1e1e1e] text-xl cursor-pointer p-2"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="rounded text-[#1e1e1e] text-xl cursor-pointer p-2"
            >
              Contact
            </Link>
            <Link
              to="/link"
              className="rounded text-[#1e1e1e] text-xl cursor-pointer p-2"
            >
              Link
            </Link>
          </nav>
        <div className="flex items-center gap-3">
          <Link 
            to="/signin"
          >          
            <button className="rounded border border text-[#1e1e1e] text-base cursor-pointer bg-neutral-100 p-2 border-solid">
              Sign in
            </button>
          </Link>
          <Link
            to="/register"
          >
            <button className="rounded border border-black text-neutral-100 text-base cursor-pointer bg-black p-2 border-solid">
              Register
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};
