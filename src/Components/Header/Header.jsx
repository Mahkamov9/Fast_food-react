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
                        <h1>20% TinkofF</h1>
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
