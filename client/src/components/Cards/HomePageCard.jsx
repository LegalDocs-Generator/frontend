import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePageCard = ({ img, title, points, link }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(link)
  }

  return (
    <div
      onClick={handleClick}
      className="w-full border rounded-lg  overflow-hidden flex flex-col p-4 cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      {/* Image */}
      <div className="h-1/2 mb-[10px]">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Title */}
      <p className="text-2xl font-bold mb-2">{title}</p>

      {/* Points */}
      <ul className="-ml-8 list-decimal list-inside space-y-1 text-sm text-gray-500">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePageCard
