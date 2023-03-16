import React from 'react'
import Router from '../routes/Router';
import Sidebar from '../sidebar/Sidebar';
import TopNav from '../TopNav/TopNav';

const Layout = () => {
  return (
    <div className='layout'>
      <Sidebar/>
       <div className='main_layout'>
         <TopNav/>
       </div>
        <div>
         <Router/>
        </div>

    </div>
  )
}

export default Layout