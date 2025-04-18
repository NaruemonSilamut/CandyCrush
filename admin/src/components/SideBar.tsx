import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import icecream from '../assets/ice-cream.png';
import order from '../assets/checklist.png';
import logoutIcon from '../assets/logout.png';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const linkClass = (path: string) =>
    `flex items-center gap-4 p-4 rounded-xl transition ${
      location.pathname === path
        ? 'bg-purple-500 text-white font-bold'
        : 'hover:bg-purple-300 text-black'
    }`;

  return (
    <div className="bg-purple-400 w-[300px] h-screen px-6 pt-[70px] flex flex-col justify-between fixed left-0  z-20">
      <div>
        <Link to="/" className="block mb-6">
          <div className={linkClass('/')}>
            <img src={icecream} className="w-12 h-12 object-contain" />
            <h1 className="text-lg">Add Product</h1>
          </div>
        </Link>

        <Link to="/confirmorder" className="block mb-6">
          <div className={linkClass('/confirmorder')}>
            <img src={order} className="w-12 h-12 object-contain" />
            <h1 className="text-lg">Confirm Order</h1>
          </div>
        </Link>
      </div>

      <div className="mb-16">
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 w-full p-4 rounded-xl hover:bg-purple-200 transition text-black"
        >
          <img src={logoutIcon} alt="Logout" className="w-10 h-10 object-contain" />
          <span className="text-lg font-semibold">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
