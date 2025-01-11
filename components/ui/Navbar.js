"use client"
import React from 'react'

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
        <Link href={"/"}><div className="logo font-bold">ArjunBlogs</div></Link>
      
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #333;
          color: white;
        }
        .logo {
          font-size: 1.5rem;
        }
        .menu {
          display: flex;
          gap: 1rem;
        }
        .menu-toggle {
          display: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .menu {
            display: ${isOpen ? 'flex' : 'none'};
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            background-color: #333;
            width: 100%;
          }
          .menu-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

