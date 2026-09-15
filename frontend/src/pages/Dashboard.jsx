import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("student") || "null");
  const [companies, setCompanies] = useState([]);
  useEffect(() => { API.get('/company').then(({data})=>setCompanies(data.companies || [])).catch(()=>setCompanies([])); }, []);
  if (!user) return <div className="page-center"><div className="panel text-center"><h2 className="text-2xl font-bold">Please login first</h2><Link to="/login" className="primary-button inline-block mt-5">Login</Link></div></div>;
  const admin = user.role?.toLowerCase() === 'admin';
  return <div className="px-6 py-12"><div className="max-w-7xl mx-auto"><div className="flex justify-between items-end mb-8"><div><p className="text-blue-600 font-semibold">{admin ? 'ADMIN DASHBOARD' : 'STUDENT DASHBOARD'}</p><h1 className="text-4xl font-bold mt-2">Welcome, {user.name}</h1><p className="text-slate-500 mt-2">{admin ? 'Manage placement opportunities and students.' : 'Explore opportunities and track your applications.'}</p></div>{admin && <Link to="/addCompany" className="primary-button w-auto">+ Add Company</Link>}</div><div className="grid grid-cols-3 gap-6"><div className="panel"><p className="text-slate-500">Available Companies</p><h2 className="text-4xl font-bold text-blue-600 mt-2">{companies.length}</h2></div><div className="panel"><p className="text-slate-500">Account Type</p><h2 className="text-2xl font-bold capitalize mt-2">{user.role}</h2></div><div className="panel"><p className="text-slate-500">Applications</p><h2 className="text-4xl font-bold text-green-600 mt-2">{user.appliedCompanies?.length || 0}</h2></div></div><div className="panel mt-8"><h2 className="text-2xl font-bold">Quick Actions</h2><div className="flex gap-4 mt-5"><Link to="/companies" className="secondary-button w-auto">View Companies</Link><Link to="/profile" className="secondary-button w-auto">View Profile</Link>{admin && <Link to="/addCompany" className="secondary-button w-auto">Manage Job Listings</Link>}</div></div></div></div>;
}
