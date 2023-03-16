import React from 'react'
import {NavLink} from "react-router-dom";
import navLinks from '../../assets/dummy-data/navLinks'

const Sidebar = () => {
  return <div className="sidebar">
      <div className="sidebar_top">
        <h2><i class="ri-taxi-line"></i>uberx</h2>
      </div>

      <div className="sidebar_content">
        <div className="menu">
          <ul className='nav_list'>
             { 
             navLinks.map((item,index) => (
              <li className='nav_item'>
              <NavLink to= {item.path}>
                 <span><i className={item.icon}></i></span> {item.display}
              </NavLink>
            </li>
             ))
            }
          </ul>
        </div>
      </div>
  </div>
}

export default Sidebar