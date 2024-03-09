import React, { useEffect } from 'react'
import 'jquery-ui-dist/jquery-ui';
import $ from 'jquery'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../Contexxt/Auth';

function Header() {
    useEffect(() => {
        let menuIcon = document.querySelector('.menuIcon');
        let nav = document.querySelector('.overlay-menu');

        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else {
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
        });


        // Toggle Menu Icon ========================================
        let toggleIcon = document.querySelector('.menuIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'menuIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'menuIcon';
            }
        });
    }, [])
    const [auth, setAuth] = useAuth()
    console.log(auth);
    const logout = () => {
        localStorage.removeItem('user');
        setAuth({
            ...auth,
            user: ""
        })
        toast.success("user succesfully logout");
    }
    return (
        <>
            <div className="border-end mb-5">
                <nav id="navbar" class="border-bottom">
                    <div class="nav-wrapper">

                        <div class="logo">

                            <a href="#home"><img src="https://lusion.arrowtheme.com/wp-content/uploads/2020/03/logo-80x27.png" alt="Logo" width="200px!impotant" /></a>
                        </div>


                        <ul id="menu">
                            <li><Link to={'/user/home'}>Home</Link></li>
                            <li><Link to={'/user/product'}>Product</Link></li>
                            <li><Link href="#about">About</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <div class="menuIcon">
                    <span class="icon icon-bars"></span>
                    <span class="icon icon-bars overlay"></span>
                </div>
                <div class="overlay-menu">
                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className='p-3 d-flex justify-content-between' style={{ backgroundColor: "#F5F5F3", marginTop: "61px" }}>

                <div class="search">
                    <input type="text" class="search__input" placeholder="Type your text" />
                    {/* <button class="search__button">
                    <CiSearch />
                    </button> */}
                </div>
                <div className='d-flex'>
                    <div class="dropdown">
                        <button class=" dropdown-toggle bg-transparent" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaUser className='fs-4' />
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li><Link class="dropdown-item" to={'/'}>Login</Link></li>
                            <li><Link class="dropdown-item" to={'/Register'}>Sign up</Link></li>
                            <li><Link class="dropdown-item" href="#" onClick={()=>logout()}>Logout</Link></li>
                            <li><Link class="dropdown-item" href="#">Profile</Link></li>

                        </ul>
                    </div>
                    <div>
                    <Link to={'/user/cart'}>
                        <FaShoppingCart className='fs-4 ms-3' />
                     </Link>
                        
                    </div>
                </div>
            </div>


        </>
    )
}

export default Header
