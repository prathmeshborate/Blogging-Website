import React from "react"
import {Container, Logo, LogoutBtn} from '../index'
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

function Header() {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
          }, 
          {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        }
    ]

    return(
        <header className="py-3 bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl shadow-md">
        <Container>
            <nav className="flex">
                <div className="mr-4">
                    <Link to='/'>
                    <Logo width = '40px' />
                    </Link>
                </div>
                <ul className="flex ml-auto">
                    {navItems.map((item) => 
                    item.active ? (
                        <li key={item.name}>
                            <button
                            onClick={() => navigate(item.slug)}
                            className="px-6 py-2 duration-200 text-white hover:text-gray-200"
                            >{item.name}</button>
                        </li>
                    ) : null
                    )}
                    {authStatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )}
                </ul>
            </nav>
        </Container>
        </header>
    )
}

export default Header