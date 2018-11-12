import React, { Component } from 'react';
import './Footer.css';
import { cn } from "@bem-react/classname";
import Link from "../Link";

const cnFooter = cn("Footer");

class Footer extends Component {
    render() {
        return (
            <div className={cnFooter()}>
                <ul className={cnFooter("List")}>
                    <li className={cnFooter("Item")}>
                        <Link className={cnFooter("Link")} href="#" title="Помощь"/>
                    </li>
                    <li className={cnFooter("Item")}>
                        <Link className={cnFooter("Link")} href="#" title="Обратная связь"/>
                    </li>
                    <li className={cnFooter("Item")}>
                        <Link className={cnFooter("Link")} href="#" title="Разработчикам"/>
                    </li>
                    <li className={cnFooter("Item")}>
                        <Link className={cnFooter("Link")} href="#" title="Условия использования"/>
                    </li>
                    <li className={cnFooter("Item")}>
                        <Link className={cnFooter("Link")} href="public/data/license.pdf" title="Авторские права"/>
                    </li>
                </ul>
                <p className={cnFooter("Copy")}>© 2001-2017 ООО "Яндекс"</p>
            </div>
        );
    }
}

export default Footer;