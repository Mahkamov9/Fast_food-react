import React from 'react'
import './MenuCard.css';

import CardBurger from '../../Assets/Img/burger-06-free-img.png';

export default function MenuCard() {
    return (
        <>
            <div className='menu_card'>
                <img src={CardBurger} alt="Rasm" />
                <div className='menu_card_box'>
                    <p className='menu_card_title'>Chiken Burger</p>
                    <p className='menu_card_price'>$4.99</p>
                    <p className='menu_card_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quod.</p>
                    <button className='menu_card_btn'>+</button>
                </div>
            </div>
        </>
    )
}
