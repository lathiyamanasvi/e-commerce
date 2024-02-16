import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from '../../Contexxt/Auth';
<link src="https://abubakersaeed.github.io/dashboard-ui-n20/public/style.css"></link>

const Leftsiderbar = () => {
    const [auth, setAuth] = useAuth();
    return (
        <div class="app-body-navigation">
        <nav class="navigation px-2 py-3 border-3">
            <a href="#">
                <i class="ph-browsers"></i>
                <span>Dashboard</span>
            </a>
            <a href="#">
                <i class="ph-check-square"></i>
                <span>Scheduled</span>
            </a>
            <a href="#">
                <i class="ph-swap"></i>
                <span>Transfers</span>
            </a>
            <a href="#">
                <i class="ph-file-text"></i>
                <span>Templates</span>
            </a>
            <a href="#">
                <i class="ph-globe"></i>
                <span>SWIFT</span>
            </a>
            <a href="#">
                <i class="ph-clipboard-text"></i>
                <span>Exchange</span>
            </a>
        </nav>
        <button class="user-profile d-flex align-items-center" style={{borderTop:"2px solid white"}}>
				<span className='text-white'>{auth.user?.username}</span>
				<span>
                    <FaRegUserCircle  className='fs-2 text-white'/>
				</span>
			</button>
    
    </div>
    )
}

export default Leftsiderbar