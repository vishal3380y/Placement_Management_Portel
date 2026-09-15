import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function AddCompany() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("student") || "null");
  const [form, setForm] = useState({ companyName:"", salaryPackage:"", role:"", location:"", description:"" });
  const [message, setMessage] = useState("");
  if (user?.role?.toLowerCase() !== "admin") return <div className="page-center"><div className="panel text-center"><h2 className="text-2xl font-bold">Admin access required</h2><p className="mt-2 text-slate-500">Only an admin can add a company.</p><Link to="/dashboard" className="primary-button inline-block mt-5">Back to Dashboard</Link></div></div>;
  function change(e) { setForm({...form,[e.target.name]:e.target.value}); }
  async function submit(e) { e.preventDefault(); setMessage(""); try { await API.post("/company", form); setMessage("Company added successfully."); setForm({companyName:"",salaryPackage:"",role:"",location:"",description:""}); } catch(error) { setMessage(error.response?.data?.message || "Unable to add company"); } }
  return <div className="px-6 py-12"><div className="max-w-6xl mx-auto grid grid-cols-2 gap-8"><div className="panel"><h1 className="section-title">Add Company / Job</h1>{message && <p className="notice">{message}</p>}<form onSubmit={submit} className="space-y-4 mt-6">{[["companyName","Company Name","Example: TCS"],["salaryPackage","Salary Package","Example: 6 LPA"],["role","Job Role","Example: Software Engineer"],["location","Job Location","Example: Delhi"],["description","Job Description","Describe the opportunity"]].map(([name,label,placeholder])=><div key={name}><label className="font-semibold block mb-2">{label}</label>{name === "description" ? <textarea required name={name} value={form[name]} onChange={change} placeholder={placeholder} rows="4" className="field"/> : <input required name={name} value={form[name]} onChange={change} placeholder={placeholder} className="field"/>}</div>)}<div className="flex gap-3"><button className="primary-button">Publish Job</button><button type="button" onClick={()=>navigate('/dashboard')} className="secondary-button">Cancel</button></div></form></div><div className="panel"><h2 className="text-3xl font-bold text-green-600 text-center mb-8">Live Preview</h2><div className="space-y-5 text-lg"><p><b>Company:</b> {form.companyName || "—"}</p><p><b>Package:</b> {form.salaryPackage || "—"}</p><p><b>Role:</b> {form.role || "—"}</p><p><b>Location:</b> {form.location || "—"}</p><p><b>Description:</b> {form.description || "—"}</p></div></div></div></div>;
}
