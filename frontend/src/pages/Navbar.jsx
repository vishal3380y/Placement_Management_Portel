import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("student") || "null");
  const isAdmin = user?.role?.toLowerCase() === "admin";

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("student");
    navigate("/login");
  }

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="text-3xl font-bold whitespace-nowrap">Placement Portal</Link>
        <div className="flex items-center gap-7 font-semibold">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/companies" className="hover:text-yellow-300">Companies</Link>
          {token && <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>}
          <Link to="/about" className="hover:text-yellow-300">AboutUs</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
        <div className="flex items-center gap-2">
          {token ? (
            <>
              <button onClick={logout} className="rounded-lg border border-white bg-red-600 px-4 py-2 hover:bg-red-700">Logout</button>
              <Link to="/profile" className="rounded-lg border border-white px-4 py-2 hover:bg-blue-700">{user?.name || (isAdmin ? "Admin" : "Profile")}</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="rounded-lg border border-white px-4 py-2 hover:bg-blue-700">Login</Link>
              <Link to="/register" className="rounded-lg border border-white px-4 py-2 hover:bg-blue-700">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
