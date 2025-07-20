import { ArrowRight } from "lucide-react"
import React from "react"

interface ButtonProps {
  stylename?: string
  childen?: string
}

const Button: React.FC<ButtonProps> = ({ stylename, childen }) => {
  return (
    <button className={`${stylename}`}>
      {childen}
      <ArrowRight className="w-5 h-5 font-bold" />
    </button>
  )
}

export default Button
