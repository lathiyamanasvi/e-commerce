import React from 'react'
import Header from '../Header'
import Leftsiderbar from './Leftsidebar'


const Dashboard = () => {
  return (
        <div>
            <Header/>
            
                {/* <div className="row">
                   <div className='mt-5'>
                      <h3 className='text-center'>Dashboard</h3>
                   </div>
                </div> */}

                <div className='d-flex'>
                      <div style={{width:"20%"}}>
                          <Leftsiderbar/>
                      </div>

                      <div style={{width:"70%"}}>
                          <h1>Item</h1>
                      </div>
                </div>

           
        </div>
  )
}

export default Dashboard