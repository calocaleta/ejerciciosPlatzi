import React, {useState} from 'react';
import '@styles/Header.scss';

import Menu from '@components/Menu'
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from "@icons/icon_shopping_cart.svg";


const Header = () => {
    const [toogle, setToogle] = useState(false);

    const handleToogle = () => {
        setToogle(!toogle);
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToogle}>
                        correo@jemplo.com
                    </li>
                    <li className="navbar-shopping-cart">
                        <img src={shoppingCart} alt="Shopping Cart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
            {toogle && <Menu />}
        </nav>
    );
};

export default Header;