import React, { Component } from 'react';
import iconList from './icon_list.svg';
import './Header.css';
import { cn } from "@bem-react/classname";
import Navigation from '../Navigation';

const cnHeader = cn("Header");

class Header extends Component {
    render() {
        return (
            <header className={cnHeader()}>
            <Navigation />
            {/* <div className={cnHeader("Navigation", {position: 'fixed'})}>
                <div class="navigation-block">
                    <div class="navigation-logo"><img src={logo} alt="Яндекс Дом"></img></div>
                    <nav class="navigation-collapse">
                        <div class="navigation-nav">
                            <div class="nav-item"><a class="nav-link" id="getMainPage">События</a></div>
                            <div class="nav-item"><a class="nav-link" href="#">Сводка</a></div>
                            <div class="nav-item"><a class="nav-link" href="#">Устройства</a></div>
                            <div class="nav-item"><a class="nav-link" href="#">Сценарии</a></div>
                            <div class="nav-item"><a class="nav-link" id="getMonitoringPage">Видеонаблюдение</a></div>
                        </div>
                    </nav> */}
                    {/* <div class="menu-toggle-switch"><img src={iconList}></img></div> */}
                {/* </div> */}
            {/* </div> */}
            </header>
        );
    }
}

export default Header;
