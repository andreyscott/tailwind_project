import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Header2() {

    let Links = [
        {name: 'Home', link: '/'},
        {name: 'Gallery', link: '/gallery'},
        {name: 'Contact', link: '/contact'},
        {name: 'About', link: '/about'},
        {name: 'BootyServices', link: '/services'}
    ];

    const [isOpen, setIsOpen] = React.useState(false);


  return (
    
    <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div>
                    <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                 
                </div>
                
                <div className="flex md:hidden">
                    <button type="button" onClick={ () => setIsOpen(!isOpen) }  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                    <ion-icon className="text-5xl" name={isOpen ? 'close':'menu'}></ion-icon>
                    </button>
                </div>
            </div>

            <div className={`items-center md:flex ${ isOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col md:flex-row md:mx-6 ">
                {
                    Links.map((link, index) => {
                        return (
                          <Link to={link.link} > <a className="my-1 p-2 text-md font-medium text-gray-700 transition-all duration-5000 ease-in-out transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href={link.link} key={index}>{link.name}</a> </Link> 
                        )
                    })
                }
                    
                </div>

                

                <div className="flex justify-center md:block">
                    <a className="relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}
