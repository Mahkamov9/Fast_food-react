import Navbar from "../Navbar/Navbar"
import "./Header.css"

import React from 'react'

export default function Header() {
  return (
    <>
        <div className="header">
            <Navbar/>
            <div className="container">
                <div className="header-box">
                    <div className="header-right">
                        <p className="header-price">Only $12.99$</p>
                        <h2 className="header-title">The Smokin Burger</h2>
                        <div>
                            <div>
                                <p>20%</p>
                                <p>DISCOUNT</p>
                            </div>
                            <div>
                                <p>On your first order, if you order online through our App!</p>
                            </div>
                        </div>
                        <a href="#">ORDER ONLINE</a>
                    </div>
                    <div className="header-left">
                        <img src="https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/hero-01-free-img.png" alt="Burger" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
