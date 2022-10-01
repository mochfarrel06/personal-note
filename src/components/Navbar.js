import React, { useState } from 'react';
import NavbarSearch from './NavbarSearch';

function Navbar({ searchNote }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-red-500 to-red-600 fixed top-0 left-0 w-full">
      <div className="flex flex-col lg:flex-row px-5 lg:px-14">
        <div className="flex justify-between items-center px-4 py-4 lg:py-0 border-b border-rose-400 lg:border-b-0">
          <div>
            <h1 className="uppercase font-semibold text-white">PersonalNotes</h1>
          </div>
          <div>
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-white block lg:hidden">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path className={!isOpen ? 'block' : 'hidden'} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                <path className={isOpen ? 'block' : 'hidden'} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0`}>
          <div className="flex flex-col lg:flex-row">
            <button type="text" className="block px-4 py-2 lg:py-5 text-rose-200 hover:text-white">
              Add Notes
            </button>
            <button className="block px-4 py-2 lg:py-5 text-rose-200 hover:text-white">Active Notes</button>
            <button className="block px-4 py-2 lg:py-5 text-rose-200 hover:text-white">Archive Notes</button>
          </div>
          <div className="flex flex-col lg:flex-row px-4">
            <NavbarSearch searchNote={searchNote} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
