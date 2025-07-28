import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Form 97', path: '/form97' },
    { name: 'Form 98', path: '/form98' },
    { name: 'Form 99', path: '/form99' },
    { name: 'Form 100', path: '/form100' },
    { name: 'Form 101', path: '/form101' },
    { name: 'Form 102', path: '/form102' },
  ]

  return (
    <>
    
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-18 left-4 z-50 text-white bg-gray-800 p-2 rounded"
      >
        <FaBars size={20} />
      </button>

     
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black opacity-40 md:hidden"
        />
      )}

     
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white shadow-lg z-40 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:block`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="text-2xl font-bold">All Forms</span>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-white"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <nav className="flex flex-col p-4 mt-4 space-y-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded transition-colors !no-underline ${
                  isActive
                    ? 'bg-gray-700 text-white'
                    : 'text-white hover:bg-gray-700'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Sidebar
