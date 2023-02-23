import React from 'react';
import { CONTACT_DATA, NAVBAR_TITLE, PROJECTS_DATA } from './main';

export default function Navbar() {
    return (
        <div className="navbar bg-base-100" id="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a href="#projects">{PROJECTS_DATA.title}</a>
                        </li>
                        <li>
                            <a href="#contact">{CONTACT_DATA.title}</a>
                        </li>
                    </ul>
                </div>
                <a className="text-xl normal-case btn btn-ghost">{NAVBAR_TITLE}</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="menu menu-horizontal">
                    <li>
                        <a href="#projects">{PROJECTS_DATA.title}</a>
                    </li>
                    <li>
                        <a href="#contact">{CONTACT_DATA.title}</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end"></div>
        </div>
    );
}
