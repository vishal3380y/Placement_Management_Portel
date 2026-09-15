
import React from "react";

export default function Profile() {

    const student = JSON.parse(localStorage.getItem("student"));

    console.log(student);

    // If student is not logged in
    if (!student) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-2xl">!</span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800">
                        Please Login First
                    </h2>

                    <p className="text-gray-500 mt-2">
                        You need to login to view your profile.
                    </p>

                </div>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Main Container */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* ================= PROFILE HEADER ================= */}

                <div className="bg-white rounded-2xl shadow-md overflow-hidden">

                    {/* Top Background */}
                    <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600">
                    </div>

                    {/* Profile Information */}
                    <div className="px-6 pb-7">

                        <div className="flex flex-col md:flex-row items-center md:items-end gap-5 -mt-14">

                            {/* Avatar */}

                            <div className="w-28 h-28 rounded-full bg-white p-1 shadow-lg">

                                <div className="w-full h-full rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
                                    {student.name?.charAt(0).toUpperCase()}
                                </div>

                            </div>


                            {/* Student Details */}

                            <div className="flex-1 text-center md:text-left md:pb-2">

                                <h1 className="text-3xl font-bold text-gray-800">
                                    {student.name}
                                </h1>

                                <p className="text-gray-500 mt-1">
                                    {student.email}
                                </p>

                                <p className="text-blue-600 font-medium mt-1">
                                    {student.course}
                                </p>

                            </div>


                            {/* Role */}

                            <div className="md:pb-3">

                                <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold capitalize">

                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>

                                    {student.role}

                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= STUDENT INFORMATION ================= */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">


                    {/* Course Card */}

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition duration-300">

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                                🎓
                            </div>

                            <div>

                                <p className="text-sm text-gray-500">
                                    Course
                                </p>

                                <h2 className="text-xl font-semibold text-gray-800 mt-1">
                                    {student.course || "Not Available"}
                                </h2>

                            </div>

                        </div>

                    </div>


                    {/* Skills Card */}

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition duration-300">

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
                                💻
                            </div>

                            <div className="flex-1">

                                <p className="text-sm text-gray-500">
                                    Skills
                                </p>

                                <div className="flex flex-wrap gap-2 mt-2">

                                    {student.skills
                                        ?.split(",")
                                        .map((skill, index) => (

                                            <span
                                                key={index}
                                                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {skill.trim()}
                                            </span>

                                        ))
                                    }

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= APPLICATION SUMMARY ================= */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">


                    {/* Applications Count */}

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-md">

                        <p className="text-blue-100">
                            Total Applications
                        </p>

                        <h2 className="text-4xl font-bold mt-2">
                            {student.appliedCompanies?.length || 0}
                        </h2>

                        <p className="text-blue-100 mt-2">
                            Companies you have applied to
                        </p>

                    </div>


                    {/* Profile Status */}

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">
                                    Profile Status
                                </p>

                                <h2 className="text-2xl font-bold text-green-600 mt-1">
                                    Active
                                </h2>

                            </div>

                            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">

                                <span className="text-2xl">
                                    ✓
                                </span>

                            </div>

                        </div>

                        <p className="text-gray-500 text-sm mt-4">
                            Your profile is ready for placement opportunities.
                        </p>

                    </div>

                </div>


                {/* ================= APPLIED COMPANIES ================= */}

                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 mt-8">

                    {/* Section Header */}

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-7">

                        <div>

                            <h2 className="text-2xl font-bold text-gray-800">
                                Applied Companies
                            </h2>

                            <p className="text-gray-500 mt-1">
                                Track the companies you have applied to.
                            </p>

                        </div>


                        {/* Application Count */}

                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold w-fit">

                            <span>
                                {student.appliedCompanies?.length || 0}
                            </span>

                            <span>
                                Applications
                            </span>

                        </div>

                    </div>


                    {/* No Applications */}

                    {!student.appliedCompanies ||
                    student.appliedCompanies.length === 0 ? (

                        <div className="text-center py-14 border-2 border-dashed border-gray-200 rounded-xl">

                            <div className="text-5xl mb-4">
                                📭
                            </div>

                            <h3 className="text-xl font-semibold text-gray-700">
                                No Applications Yet
                            </h3>

                            <p className="text-gray-500 mt-2">
                                You haven't applied to any company yet.
                            </p>

                        </div>

                    ) : (

                        /* Company Cards */

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            {student.appliedCompanies.map((company) => (

                                <div
                                    key={company._id}
                                    className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition duration-300 bg-gray-50"
                                >

                                    {/* Company Header */}

                                    <div className="flex justify-between items-start gap-4">

                                        <div className="flex items-center gap-4">

                                            {/* Company Icon */}

                                            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                                                {company.companyName
                                                    ?.charAt(0)
                                                    .toUpperCase()}
                                            </div>

                                            <div>

                                                <h3 className="text-xl font-bold text-gray-800">
                                                    {company.companyName}
                                                </h3>

                                                <p className="text-blue-600 font-medium mt-1">
                                                    {company.role}
                                                </p>

                                            </div>

                                        </div>


                                        {/* Status */}

                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">

                                            Applied

                                        </span>

                                    </div>


                                    {/* Company Details */}

                                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

                                        {/* Location */}

                                        <div className="bg-white rounded-xl p-4">

                                            <p className="text-xs text-gray-400 uppercase tracking-wide">
                                                Location
                                            </p>

                                            <p className="text-gray-700 font-medium mt-1">
                                                📍 {company.location}
                                            </p>

                                        </div>


                                        {/* Package */}

                                        <div className="bg-white rounded-xl p-4">

                                            <p className="text-xs text-gray-400 uppercase tracking-wide">
                                                Package
                                            </p>

                                            <p className="text-green-600 font-semibold mt-1">
                                                💰 {company.salaryPackage}
                                            </p>

                                        </div>

                                    </div>


                                    {/* Description */}

                                    <div className="mt-4 bg-white rounded-xl p-4">

                                        <p className="text-xs text-gray-400 uppercase tracking-wide">
                                            Job Description
                                        </p>

                                        <p className="text-gray-600 mt-1">
                                            {company.description}
                                        </p>

                                    </div>


                                    {/* Applied Date */}

                                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">

                                        <span className="text-sm text-gray-500">
                                            Application Status
                                        </span>

                                        <span className="text-sm font-semibold text-green-600">
                                            ✓ Applied
                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

