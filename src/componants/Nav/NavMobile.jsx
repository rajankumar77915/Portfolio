import React from 'react'
import NavLink from './NavLink'

export default function NavMobile({ links }) {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink destination={link.path} btnName={link.title} />
                </li>
            ))}
        </ul>
    )
}
