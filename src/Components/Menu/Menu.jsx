import React from 'react'
import "./Menu.css";
import ContactCode from './Contact_Code';
import MenuCard from '../MenuCard/MenuCard';
// import { useState } from 'react';

export default function Menu() {
    return (
        <>
            <div className="menu">
                <div className="container">
                    <h1 className='menu_title'>OUR MENU</h1>
                    <p className="menu_subtitle">Choose & Enjoy</p>
                    <div className="menu_list">
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                    </div>
                </div>
            </div>
        </>



    )
}
