import React from "react"

type CardServiceProps = {
  imageUrl: string
  title: string
  description: string
  imageAlt: string
}

const CardService: React.FC<CardServiceProps> = ({
  imageUrl,
  title,
  description,
  imageAlt,
}) => {
  return (
    <div className="rounded-2xl shadow-md overflow-hidden bg-white w-full max-w-sm">
      <img src={imageUrl} alt={imageAlt} className="w-full h-80 object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      </div>
    </div>
  )
}

export default CardService
