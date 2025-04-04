import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <header className="flex items-center gap-6 bg-white p-6 border-b border-solid max-sm:p-4">
        <div className="flex items-center gap-6">
      </div>
      <nav className="flex flex-1 justify-end gap-2 flex-wrap max-md:hidden">
        <Link
          to="/"
          className="rounded text-[#1e1e1e] text-base cursor-pointer p-2"
        >
          Home
        </Link>
        <Link
          to="/profile"
          className="rounded text-[#1e1e1e] text-base cursor-pointer p-2"
        >
          Profile
        </Link>
        <Link
          to="/projects"
          className="rounded text-[#1e1e1e] text-base cursor-pointer p-2"
        >
          Projects
        </Link>
        <Link
          to="/resources"
          className="rounded text-[#1e1e1e] text-base cursor-pointer p-2"
        >
          Resources
        </Link>
        <Link
          to="/pricing"
          className="rounded text-[#1e1e1e] text-base cursor-pointer p-2"
        >
          Pricing
        </Link>
        <Link
          to="/contact"
          className="rounded text-[#1e1e1e] text-base cursor-pointer p-2"
        >
          Contact
        </Link>
        <Link
          to="/link"
          className="rounded text-[#1e1e1e] text-base cursor-pointer p-2"
        >
          Link
        </Link>
      </nav>
      <div className="flex items-center gap-3 max-sm:w-full max-sm:justify-between">
        <button className="rounded border border text-[#1e1e1e] text-base cursor-pointer bg-neutral-100 p-2 border-solid max-sm:w-[48%]">
          Sign in
        </button>
        <button className="rounded border border-indigo-600 text-neutral-100 text-base cursor-pointer bg-indigo-600 p-2 border-solid max-sm:w-[48%]">
          Register
        </button>
      </div>
    </header>
  );
};
