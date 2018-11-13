import React, { Component } from "react";
import "./Header.css";
import { cn } from "@bem-react/classname";
import Navigation from "../Navigation";

const cnHeader = cn("Header");

class Header extends Component {
    render() {
        return (
            <header className={cnHeader()}>
                <Navigation />
            </header>
        );
    }
}

export default Header;
