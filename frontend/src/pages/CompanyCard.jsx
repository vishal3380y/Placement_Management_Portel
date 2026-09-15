
import { useNavigate } from "react-router-dom";
function CompanyCard({id,name,salaryPackage,location,role}){
    // console.log(companyName)
    // const{companyName,salaryPackage,location}=props
    const navigate=useNavigate();
    return(
        <>
             <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-full bg-white text-blue-600 flex items-center justify-center text-2xl font-bold shadow-lg">
            {name.charAt(0)}
          </div>

          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-blue-100">{name}</p>
          </div>

        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">

        <div className="flex justify-between items-center">

          <span className="text-gray-600 font-medium">
            💼 Job Role
          </span>

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            {role}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="text-gray-600 font-medium">
            💰 Package
          </span>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            {salaryPackage}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="text-gray-600 font-medium">
            📍 Location
          </span>

          <span className="text-gray-700 font-semibold">
            Bangalore
          </span>

        </div>

        <div className="flex justify-between items-center">

          <span className="text-gray-600 font-medium">
            🟢 Status
          </span>

          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
            Hiring Now
          </span>

        </div>

        <button onClick={()=>navigate(`/companies/${id}`)}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300"
        >
          View Details →
        </button>

      </div>
    </div>
        </>
    )
}

export default CompanyCard;


