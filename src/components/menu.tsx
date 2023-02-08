import React from "react";
import Link from "next/link";

export const navLinks = [
    { name: "Home", 
     path: "/" 
    },
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "About me",
      path: "/about",
    }, 
    {
      name: "API",
      path: "/graph",
    },
  ];

export default function Menu() {

  const getNavLinks  = () => {
    return navLinks.map((link, index) => {
      return (
          <Link key={index} href={link.path}><a className={`underline hover:no-underline px-3 
            ${link.name === 'API' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:to-green-500': ''}`}>{link.name}</a>
          </Link>     
      );
    })
  }

  return (
    <header className="container text-center px-40 py-2">
          <nav className='text-xl menu'>
              {getNavLinks()}       
            </nav> 
    </header>
  );
}