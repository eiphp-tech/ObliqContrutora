import { useState } from "react"
import { NavLink } from "react-router-dom"

interface MenuItem {
  path: string
  label: string
}

const menuItems: MenuItem[] = [
  { path: "/", label: "Home" },
  { path: "/sobre", label: "Sobre" },
  { path: "/servicos", label: "Serviços" },
  { path: "/projetos", label: "Projetos" },
  { path: "/contato", label: "Contato" },
]

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = (): void => setIsMenuOpen((prev) => !prev)

  return (
    <div className="bg-gray-900 font-primary relative z-8">
      <header className="bg-neutral-900 shadow-lg">
        <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <NavLink to="/" className="flex items-center">
            <img src="/logo-obliq.svg" alt="Logo OBLIQ" className="w-40" />
          </NavLink>

          <ul className="hidden lg:flex space-x-8 list-none">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-colors duration-200 font-bold ${
                      isActive
                        ? "text-[#c9653c]"
                        : "text-gray-300 hover:text-[#c9653c]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden text-gray-300 hover:text-[#c9653c] transition-colors duration-200 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        <div
          className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "visible" : "invisible"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isMenuOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={toggleMenu}
          />

          <aside
            className={`absolute left-0 top-0 h-full w-80 bg-neutral-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-[#c9653c] transition-colors duration-200 focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-6 pb-6 border-b border-gray-700">
              <NavLink
                to="/"
                className="flex items-center"
                onClick={toggleMenu}
              >
                <img
                  src="/logo-obliq.svg"
                  alt="Logo OBLIQ"
                  className="w-40 object-contain"
                />
              </NavLink>
            </div>

            <nav className="mt-6">
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={toggleMenu}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-6 py-4 transition-all duration-200 border-l-4 ${
                          isActive
                            ? "text-[#c9653c] bg-gray-700 border-[#c9653c]"
                            : "text-gray-300 hover:text-[#c9653c] hover:bg-gray-700 border-transparent"
                        }`
                      }
                    >
                      <span className="font-bold">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </header>
    </div>
  )
}

export default NavBar
