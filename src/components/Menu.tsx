import React from "react";
import Link from "next/link";

export const navLinks = [
    { name: "Home", 
     path: "/" 
    },
    {
      name: "Work Experience",
      path: "/work",
    },
    {
      name: "Personal Projects",
      path: "/personal",
    },
    {
      name: "About me",
      path: "/about",
    },
  ];

export default function Menu() {

  const getNavLinks  = () => {
    return navLinks.map((link, index) => {
      return (
          <Link key={index} href={link.path}><a className="hover:no-underline underline px-3">{link.name}</a></Link>     
      );
    })
  }

  return (
    <header className="container flex justify-center content-center px-40 md:px-20 mx-auto font-mono bg-orange-400 rounded-xl">
          <nav className='text-xl menu'>
              {getNavLinks()}       
            </nav> 
    </header>
  );
}