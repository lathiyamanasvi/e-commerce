import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../Contexxt/Auth'
import { Link } from 'react-router-dom'

const Header = () => {
  const [auth, setAuth] = useAuth()
  console.log(auth);
  const logout = () =>{
   localStorage.removeItem('user');
   setAuth({
    ...auth,
    user :""
   })
   toast.success("user succesfully logout");
  }
  return (
    <div>
      <header className='p-1'>
        <div class="navbar">
          <div class="logo"><a href=""><img src='http://rozer.mallthemes.com/wp-content/uploads/2021/01/logowhitex2-300x98.png' width="150px" /></a></div>
          <ul class="links">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          {
            (!auth.user) ? (<>
              <div className='d-flex'>
                <div className='action_btn me-3'>
                  <Link to={'/'} class="action_btn me-2">LogIn</Link>
                </div>
                <div className='action_btn'>
                  <Link to={'/registre'} class="action_btn">Register</Link>
                </div>
              </div>
            </>) :
              (<div className='action_btn'>
                <Link class="action_btn" onClick={()=>{logout()}}>Logout</Link>
              </div>)
          }
        </div>
        <div class="toggle_btn">
          <i class="fa-solid fa-bars"></i>
        </div>

        <div class="dropdown_menu">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="" class="action_btn">Login</a></li>
        </div>
      </header>
    </div>
  )
}

export default Header
