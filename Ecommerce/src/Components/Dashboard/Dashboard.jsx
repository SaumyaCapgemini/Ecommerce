import React from 'react';
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='dashboard--header'>
         <h1 className='title'>DCX-App Store</h1>
          <div className='login'>
          <label className="email">Email</label>
          <input type="text" id="email" placeholder='Enter Mail ID...' className="email-id" required />
          <label className="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password"className="pwd" required/>
          <button type="submit" className="submit">Login</button>
          </div>
        </div>
        <div className='dashboard--navbar'>
            <a href="./Dashboard.jsx">Home</a>
            <a href="">Whats New</a>
            <a href="">Specials</a>
            <a href= "">Products</a>
            <a href= "">My Account</a>

        </div>
        <div className='dashboard--body--1'>

        </div>
        <div className='dashboard--body--2'>

        </div>

    </div>
  )
}

export default Dashboard