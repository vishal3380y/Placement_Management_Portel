import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("student");
  const [form, setForm] = useState({ name:"", email:"", password:"", department:"", graduationYear:"", role:"student", adminCode:"" });
  const [message, setMessage] = useState("");
  function change(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
  async function submit(e) {
    e.preventDefault(); setMessage("");
    try { await API.post("/student/register", { ...form, role: mode }); navigate("/login"); }
    catch (error) { setMessage(error.response?.data?.message || "Registration failed"); }
  }
  return <div className="min-h-[650px] flex items-center justify-center px-5 py-12">
    <div className="w-full max-w-5xl grid grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center">Create Account</h1>
        <p className="text-center text-slate-500 mt-2">Choose your account type</p>
        <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-lg mt-6">
          {[["student","Student"],["admin","Admin"]].map(([value,label]) => <button type="button" key={value} onClick={() => {setMode(value);setForm({...form,role:value})}} className={`py-2 rounded-md font-semibold ${mode === value ? "bg-blue-600 text-white" : "text-slate-600"}`}>{label}</button>)}
        </div>
        {message && <p className="mt-4 rounded-lg bg-red-100 text-red-700 p-3 text-sm">{message}</p>}
        <form onSubmit={submit} className="space-y-4 mt-5">
          {[["name","Full Name","text"],["email","Email","email"],["password","Password","password"], ...(mode === "student" ? [["department","Department / Branch","text"],["graduationYear","Graduation Year","number"]] : [])].map(([name,label,type]) => <div key={name}><label className="font-semibold block mb-2">{label}</label><input required type={type} name={name} value={form[name]} onChange={change} placeholder={`Enter ${label.toLowerCase()}`} className="field" /></div>)}
          {mode === "admin" && <div><label className="font-semibold block mb-2">Admin Registration Code</label><input required type="password" name="adminCode" value={form.adminCode} onChange={change} placeholder="Enter admin code" className="field" /><p className="text-xs text-slate-500 mt-1">Authorized demo code is required for admin accounts.</p></div>}
          <button className="primary-button">Create {mode === "admin" ? "Admin" : "Student"} Account</button>
        </form>
        <p className="text-center mt-5 text-slate-600">Already registered? <Link to="/login" className="text-blue-600 font-semibold">Sign In</Link></p>
      </div>
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl text-white p-10 flex flex-col justify-center">
        <p className="uppercase tracking-widest text-blue-200 font-semibold">Placement Portal</p>
        <h2 className="text-4xl font-bold mt-4">Build your career with confidence.</h2>
        <p className="mt-5 text-blue-100 leading-7">Register, explore hiring companies, and manage your placement journey from one central platform.</p>
        <div className="mt-8 space-y-3 text-blue-50"><p>✓ Student and admin accounts</p><p>✓ Company job listings</p><p>✓ Simple placement tracking</p></div>
      </div>
    </div>
  </div>;
}
