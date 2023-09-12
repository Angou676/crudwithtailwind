import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate= useNavigate()
    return (
        <div className='flex'>
            <h4 className='m-m10' onClick={()=>navigate(`/infinitescroll`)}>Infinite Scroll Calendar</h4>
            <h4 className='m-m10'  onClick={()=>navigate(`/dropdownemployeesearch`)}>Employee Search Dropdown</h4>
            <h4 className='m-m10' onClick={()=>navigate(`/dropdownsearch`)}>Search Dropdown Selection</h4>
            <h4 className='m-m10' onClick={()=>navigate(`/employee`)}>Employee List</h4>
            <h4 className='m-m10' onClick={()=>navigate(`/register`)}>Employee Register</h4>
        </div>
    )
}

export default Header