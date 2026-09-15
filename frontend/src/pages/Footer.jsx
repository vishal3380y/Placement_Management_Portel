import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
      <footer className='bg-gray-900 text-white mt-10'>
          <div className='mx-w-7xl mx-auto px-6 py-10'>
              <div className='grid md:grid-cols-3 gap-8'>
                {/* Job Discription  */}
                <div>
                  <h2 className='text-2xl font-bold mb-3'>Placement Portal</h2>
                  <p className='text-gray-400'>Helping Students connect with top <br /> companies and acheive their goals.</p>
                </div>
                {/* quick links  */}
                <div>
                  <h3 className='text-xl font-semibold mb-3'>Quick Links</h3>
                  <ul className='flex flex-col text-gray-400'> 
                      <Link to='/' className="hover:text-white curser:pointer">Home</Link>
                      <Link to='/companies' className="hover:text-white curser:pointer">Company</Link>
                      <Link to='/students' className="hover:text-white curser:pointer">Students</Link>
                      <Link to='/about' className="hover:text-white curser:pointer">AboutUs</Link>
                      <Link to='/contact' className="hover:text-white curser:pointer">Contact</Link>
                  </ul>

                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-3'>Contact Us</h3>
                  <p className='text-gray-400'>Email:placementportal@gmail.com</p>
                  <p className='text-gray-400'>Phone: +91 123456789</p>
                  <p className='text-gray-400'>Address: New Delhi, India</p>
                </div>
              </div>
              <div>
              <p className='border-t border-gray-700 mt-8 text-center pt-4 text-gray-400'>@ 2026 Placement Portal. All Right Reserved</p>
              </div>
          </div>
      </footer>
    </>
  )
}
