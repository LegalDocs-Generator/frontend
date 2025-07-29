import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa'

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
      {/* Mobile Toggle Button */}
      {!isOpen && <button
        aria-label="Open sidebar"
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-22 left-4 bg-gray-800 text-white p-2 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 z-0"
      >
        <FaArrowRight size={20} />
      </button>}
      

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 min-h-screen min-w-64 bg-gray-800 text-white shadow-lg z-40
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:block
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="w-full text-2xl font-bold text-center">All Forms</span>
          {/* Only show close on mobile */}
          <button
            aria-label="Close sidebar"
            onClick={() => setIsOpen(false)}
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 mt-2 space-y-2">
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg transition-colors !no-underline text-center
                 ${isActive
                   ? 'bg-gray-700 text-white'
                   : 'text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300'}`
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
