import React from 'react'
import "./Header.css"
import SignHand from "../../assests/SignHand.jpg";

const Header = () => {
  return (
    <div className="signlang__header section__padding gradient__bg" id="home">

    <div className="signlang__header-content">
      <h1 className="gradient__text">Sign Language Recognition System <br></br>(*￣▽￣*)ブ</h1>
      <p>
      We are Group 4 
      </p>

    </div>
    <div className="signlang__header-image">
      <img src={SignHand} alt='SIGN-HAND'/>
    </div>
  </div>
  )
}

export default Header