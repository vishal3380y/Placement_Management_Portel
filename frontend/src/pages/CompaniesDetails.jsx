
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

export default function CompaniesDetails() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [company, setCompany] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDetails();
    }, [id]);

    async function fetchDetails() {

        try {

            const response = await API.get(`/company/${id}`);

            setCompany(response.data.company);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    }


    // Apply for company
    const handleApply = async () => {

        try {

            const response = await API.post(`/student/apply/${id}`);

            alert(response.data.message);

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Something went wrong while applying."
            );
        }
    };


    // Loading
    if (loading) {

        return (

            <div className="min-h-screen bg-gray-100 flex items-center justify-center">

                <div className="text-center">

                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto">
                    </div>

                    <p className="text-gray-600 mt-4">
                        Loading company details...
                    </p>

                </div>

            </div>

        );
    }


    return (

        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-10 px-4">

            <div className="max-w-5xl mx-auto">


                {/* Back Button */}

                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition"
                >

                    <span className="text-xl">
                        ←
                    </span>

                    Back to Companies

                </button>


                {/* Main Card */}

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">


                    {/* ================= HEADER ================= */}

                    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 px-6 sm:px-10 py-10 text-white">

                        <div className="flex flex-col md:flex-row md:items-center gap-6">


                            {/* Company Logo */}

                            <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-4xl font-bold shadow-lg">

                                {company.companyName
                                    ?.charAt(0)
                                    .toUpperCase()}

                            </div>


                            {/* Company Details */}

                            <div className="flex-1">

                                <div className="flex flex-wrap items-center gap-3">

                                    <h1 className="text-3xl sm:text-4xl font-bold">

                                        {company.companyName}

                                    </h1>

                                    <span className="bg-green-400/20 border border-green-300/40 text-green-100 px-3 py-1 rounded-full text-sm font-medium">

                                        Hiring

                                    </span>

                                </div>


                                <p className="text-blue-100 text-lg mt-2">

                                    {company.role}

                                </p>

                                <p className="text-blue-100 mt-1">

                                    📍 {company.location}

                                </p>

                            </div>

                        </div>

                    </div>


                    {/* ================= CONTENT ================= */}

                    <div className="p-6 sm:p-10">


                        {/* Job Information */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">


                            {/* Package */}

                            <div className="bg-green-50 border border-green-100 rounded-2xl p-6">

                                <div className="flex items-center gap-4">

                                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl">

                                        💰

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">

                                            Salary Package

                                        </p>

                                        <h2 className="text-xl font-bold text-green-700 mt-1">

                                            {company.salaryPackage}

                                        </h2>

                                    </div>

                                </div>

                            </div>


                            {/* Location */}

                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">

                                <div className="flex items-center gap-4">

                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">

                                        📍

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">

                                            Job Location

                                        </p>

                                        <h2 className="text-xl font-bold text-blue-700 mt-1">

                                            {company.location}

                                        </h2>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* ================= JOB DESCRIPTION ================= */}

                        <div className="mt-10">

                            <div className="flex items-center gap-3 mb-4">

                                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">

                                    📋

                                </div>

                                <h2 className="text-2xl font-bold text-gray-800">

                                    Job Description

                                </h2>

                            </div>


                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">

                                <p className="text-gray-600 leading-8">

                                    {company.description ||
                                        "No description available for this company."}

                                </p>

                            </div>

                        </div>


                        {/* ================= ROLE ================= */}

                        <div className="mt-8">

                            <h2 className="text-xl font-bold text-gray-800 mb-4">

                                Position

                            </h2>

                            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-5 py-2 rounded-full font-semibold">

                                💼

                                {company.role}

                            </div>

                        </div>


                        {/* ================= ACTION AREA ================= */}

                        <div className="mt-10 pt-8 border-t border-gray-200">

                            <div className="flex flex-col sm:flex-row gap-4">


                                {/* Apply Button */}

                                <button
                                    onClick={handleApply}
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center gap-2"
                                >

                                    <span>
                                        🚀
                                    </span>

                                    Apply Now

                                </button>


                                {/* Back Button */}

                                <button
                                    onClick={() => navigate(-1)}
                                    className="sm:w-40 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl transition duration-300"
                                >

                                    ← Back

                                </button>

                            </div>


                            <p className="text-center text-gray-400 text-sm mt-4">

                                Make sure your profile and resume are updated before applying.

                            </p>

                        </div>

                    </div>

                </div>


                {/* Footer Information */}

                <div className="text-center mt-6">

                    <p className="text-gray-400 text-sm">

                        Placement Portal • Find your next opportunity

                    </p>

                </div>

            </div>

        </div>

    );
}

