import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-center gap-8 bg-gray-100 py-3">
 <ul className='flex gap-10'>
    <div>
      <NavLink to="/" className="text-gray-700 hover:text-indigo-600">
        <li>Counter</li>
      </NavLink>
      </div>
      <div>
      <NavLink to="/NextCounter" className="text-gray-700  hover:text-indigo-600">
        <li>NextCounter</li>
      </NavLink>
      </div>
      </ul>
    </div>
  );
}

export default Navbar;



