import React from "react";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate=useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">
            About Placement Portal
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Placement Portal is a web-based platform designed to simplify the
            campus placement process by connecting students, companies, and
            administrators in one centralized system.
          </p>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
              alt="Students"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              Our mission is to provide students with a seamless platform to
              register, build their profiles, explore placement opportunities,
              and apply for jobs. At the same time, companies can post job
              openings and administrators can efficiently manage the complete
              placement process.
            </p>
          </div>

        </div>

        {/* Features */}
        <div className="mt-16">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="text-5xl mb-4">🎓</div>

              <h3 className="text-xl font-semibold mb-3">
                Student Management
              </h3>

              <p className="text-gray-600">
                Students can register, log in, manage their profiles, upload
                resumes, and apply for available placement opportunities.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="text-5xl mb-4">🏢</div>

              <h3 className="text-xl font-semibold mb-3">
                Company Management
              </h3>

              <p className="text-gray-600">
                Companies can create job openings, define eligibility criteria,
                and review applications submitted by students.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="text-5xl mb-4">🛡️</div>

              <h3 className="text-xl font-semibold mb-3">
                Admin Dashboard
              </h3>

              <p className="text-gray-600">
                Administrators can manage students, companies, applications,
                and monitor the overall placement process efficiently.
              </p>
            </div>

          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-blue-700 text-white rounded-xl p-10">

          <h2 className="text-4xl font-bold text-center mb-8">
            Why Choose Placement Portal?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <ul className="space-y-4 text-lg">
              <li>✔ Easy Student Registration</li>
              <li>✔ Secure JWT Authentication</li>
              <li>✔ Company Job Listings</li>
              <li>✔ Online Job Applications</li>
            </ul>

            <ul className="space-y-4 text-lg">
              <li>✔ Resume Management</li>
              <li>✔ Admin Dashboard</li>
              <li>✔ Role-Based Access Control</li>
              <li>✔ Modern MERN Stack Architecture</li>
            </ul>

          </div>

        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-4xl font-bold text-blue-600">500+</h3>
            <p className="mt-2 text-gray-600">Students</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-4xl font-bold text-blue-600">100+</h3>
            <p className="mt-2 text-gray-600">Companies</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-4xl font-bold text-blue-600">300+</h3>
            <p className="mt-2 text-gray-600">Placements</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-4xl font-bold text-blue-600">95%</h3>
            <p className="mt-2 text-gray-600">Success Rate</p>
          </div>

        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Build Your Career with Placement Portal
          </h2>

          <p className="text-gray-600 mb-6">
            Register today, explore exciting opportunities, and take the first
            step towards your dream career.
          </p>

          <button onClick={()=>navigate('/registration')} className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg text-lg font-semibold">
            Get Started
          </button>

        </div>

      </div>
    </div>
  );
}