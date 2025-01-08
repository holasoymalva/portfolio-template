import React from 'react';
import { portfolioData } from '../data/portfolio-data';

const Header: React.FC = () => {
  const { header } = portfolioData;
  
  return (
    <header className="flex justify-between items-center p-6">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold">YourName.dev</h1>
        <p className="text-white text-sm text-gray-500">
          {header.title}<br />
          {header.subtitle}
        </p>
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="text-gray-500 hover:text-gray-300">home</a>
        <a href="#work" className="text-gray-500 hover:text-gray-300">work</a>
        <a href="#about" className="text-gray-500 hover:text-gray-300">about</a>
        <a href="#contact" className="text-gray-500 hover:text-gray-300">contact</a>
      </nav>
    </header>
  );
};

export default Header;