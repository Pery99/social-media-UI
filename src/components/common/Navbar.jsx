import { NavLink, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { useState } from 'react'

const Navbar = () => {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Logo />
            <div className="hidden md:flex items-center gap-1">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium ${
                    isActive
                      ? "bg-brand-50 text-brand-500"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/discover"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium ${
                    isActive
                      ? "bg-brand-50 text-brand-500"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                Discover
              </NavLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <i className="ph-bell text-xl"></i>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="relative">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100"
              >
                <img
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-gray-100"
                  src="https://i.pravatar.cc/150?img=3"
                  alt="User"
                />
                <i className="ph-caret-down text-gray-600"></i>
              </button>

              {/* Dropdown Menu */}
              {isMobileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </NavLink>
                  <button
                    onClick={() => navigate("/")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t">
        <div className="flex justify-around py-2">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium ${
                isActive ? "text-brand-500" : "text-gray-600"
              }`
            }
          >
            <i className="ph-house text-xl"></i>
          </NavLink>
          <NavLink
            to="/discover"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium ${
                isActive ? "text-brand-500" : "text-gray-600"
              }`
            }
          >
            <i className="ph-compass text-xl"></i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
