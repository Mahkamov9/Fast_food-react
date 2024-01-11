import React from 'react'
import './MenuCard.css';

import CardBurger from '../../Assets/Img/burger-06-free-img.png';

export default function MenuCard() {
    return (
        <>
            <div className='menu_card'>
                <img src={CardBurger} alt="Rasm" />
                <div className='menu_card_box'>
                    <p>Chiken Burger</p>
                    <p>$4.99</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quod.</p>
                    <button>➕</button>
                    <button>➕</button>
                    <button>➕</button>
                    <button>➕</button>
                    <button>➕</button>
                    <button>➕</button>
                    <button>➕</button>
                    <button>➕</button>
                    <button>➕</button>
                    <button>➕</button>
                    <button>➕</button>
                    <button>➕</button>
                    <button>➕</button>
                    <button>➕</button>
                    <button>➕</button>
                </div>
            </div>
        </>
    )
}
