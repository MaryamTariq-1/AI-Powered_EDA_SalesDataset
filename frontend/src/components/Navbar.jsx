import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-4 py-3 fixed w-full z-50">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/overview">Overview</Link>
      </div>
    </nav>
  );
}
