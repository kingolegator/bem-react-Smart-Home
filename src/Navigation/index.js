import React, { Component } from "react";
import "./Navigation.css";
import { cn } from "@bem-react/classname";
import logo from "./logo.png";
import Link from "../Link";

const cnNavigation = cn("Navigation");

class Navigation extends Component {
    render() {
        return (
            <div className={cnNavigation({position: "fixed"})}>
                <div className={cnNavigation("Block")}>
                    <div className={cnNavigation("Logo")}><img src={logo} alt="Яндекс Дом"></img></div>
                    <nav className={cnNavigation("Collapse")}>
                        <div className={cnNavigation("List")}>
                            <div className={cnNavigation("Item")}>
                                <Link className={cnNavigation("Link")} id="getMainPage" href="#" title="События"/>
                            </div>
                            <div className={cnNavigation("Item")}>
                                <Link className={cnNavigation("Link")} href="#" title="Сводка"/>
                            </div>
                            <div className={cnNavigation("Item")}>
                                <Link className={cnNavigation("Link")} href="#" title="Устройства"/>
                            </div>
                            <div className={cnNavigation("Item")}>
                                <Link className={cnNavigation("Link")} href="#" title="Сценарии"/>
                            </div>
                            <div className={cnNavigation("Item")}>
                                <Link className={cnNavigation("Link")} id="getMonitoringPage" href="#" title="Видеонаблюдение"/>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navigation;
