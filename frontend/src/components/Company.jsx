import React, { useEffect, useState } from 'react'
// import {companies} from '../pages/Companies'
import CompanyCard from '../pages/CompanyCard'
import API from '../services/api';
export default function Company() {
   const[filteredList,setFilteredList]=useState([])
   const[search,setSearch]=useState("");
   // console.log(search)
   useEffect(()=>{
      fetchCompany()
   },[search])

   async function fetchCompany(){
       const companies=await API.get("/company");

       console.log("list of companies")
       console.log(companies.data.companies)
       const filteredList=companies.data.companies.filter((cur)=>cur.companyName.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
       setFilteredList(filteredList)
   }

  return(
     <section className='bg-gray-100 py-16'>
         {/* Top Hiring Comapanies  */}
            <div className='max-w-7xl mx-auto px-6'>
              <h2 className='text-3xl font-bold text-center mb-10'>Top Hiring Comanies</h2>
              <input type="text" 
              placeholder='Search Company...' 
              value={search} 
              onChange={(e)=>setSearch(e.target.value)}
              className='border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-blue-500 bg-blue-300 mb-4'
              />
              <div className='grid md:grid-cols-3 gap-6'>
                {/* <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" />
                <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" />
                <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" /> */}
                {filteredList.map((cur)=>{
                   return <CompanyCard key={cur._id}  id={cur._id} name={cur.companyName} role={cur.role} salaryPackage={cur.salaryPackage}/>
                })}
              </div>
    
            </div>
           </section>
  )
}
