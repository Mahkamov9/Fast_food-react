asdasdasasdadsdfgasdimport Navbar from "../Navbar/Navbar"
import "./Header.css"

import IMG from "../../Assets/Img/hero-free-img.png";

import React from 'react'

export default function Header() {
  return (
    <>
        <div className="header">
            <Navbar/>
            <div className="container">
                <div className="header-box">
                    <div className="header-right">
                        <p className="header-price">Only $12.99</p>
                        <h2 className="header-title">The Smokin Burger</h2>
                        <div>
                            <div className="header-sale-box">
                                <p className="header-sale-box-num">20%</p>
                                <p>DISCOUNT</p>
                            </div>
                            <div>
                                <p className="header-sale-title">On your first order, if you order online through our App!</p>
                            </div>
                        </div>
                        <a className="heder-order-link" href="#">ORDER ONLINE</a>
                    </div>
                    <div className="header-left">
                        <img className="header-img" src={IMG} alt="Burger" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
