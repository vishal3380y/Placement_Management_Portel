import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("student");
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function change(e) { setForm({ ...form, [e.target.name]: e.target.value }); }

  async function submit(e) {
    e.preventDefault(); setMessage(""); setLoading(true);
    try {
      const { data } = await API.post("/student/login", form);
      const user = data.student;
      if (mode === "admin" && user.role?.toLowerCase() !== "admin") throw new Error("This account is not an admin account.");
      if (mode === "student" && user.role?.toLowerCase() === "admin") throw new Error("Please select Admin to log in with this account.");
      localStorage.setItem("token", data.token);
      localStorage.setItem("student", JSON.stringify(user));
      navigate("/dashboard");
    } catch (error) { setMessage(error.response?.data?.message || error.message || "Login failed"); }
    finally { setLoading(false); }
  }

  return <div className="min-h-[650px] flex items-center justify-center px-5 py-12">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600">Welcome Back</h1>
      <p className="text-center text-slate-500 mt-2">Sign in to your placement account</p>
      <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-lg mt-7">
        {[["student","Student Login"],["admin","Admin Login"]].map(([value,label]) => <button key={value} type="button" onClick={() => setMode(value)} className={`py-2 rounded-md font-semibold ${mode === value ? "bg-blue-600 text-white" : "text-slate-600"}`}>{label}</button>)}
      </div>
      {message && <p className="mt-4 rounded-lg bg-red-100 text-red-700 p-3 text-sm">{message}</p>}
      <form onSubmit={submit} className="space-y-5 mt-6">
        <div><label className="font-semibold block mb-2">Email</label><input required type="email" name="email" value={form.email} onChange={change} placeholder="Enter your email" className="field" /></div>
        <div><label className="font-semibold block mb-2">Password</label><input required type="password" name="password" value={form.password} onChange={change} placeholder="Enter your password" className="field" /></div>
        <button disabled={loading} className="primary-button">{loading ? "Signing in..." : `Sign In as ${mode === "admin" ? "Admin" : "Student"}`}</button>
      </form>
      <p className="text-center mt-6 text-slate-600">Don't have an account? <Link to="/register" className="text-blue-600 font-semibold">Sign Up</Link></p>
    </div>
  </div>;
}
