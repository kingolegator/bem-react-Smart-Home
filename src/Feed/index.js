import React, { Component } from "react";
import "./Feed.css";
import { cn } from "@bem-react/classname";
import Card from "../Card";
import VideoManager from "../VideoManagerScript/index";

const cnFeed = cn("Feed");
const cnBox = cn("Box");

class Feed extends Component {
    componentDidMount() {
        VideoManager();
    }
    render() {
        return (
            <div className={cnFeed()}>
                <h1 className={cnFeed("MainHeader")}>Видеонаблюдение</h1>
                <div className={cnFeed("GridContainer")}>
                    <Card size="m" className={cnFeed()} number="1" type={cnBox({horizontal: "left", vertical: "top"})}></Card>
                    <Card size="m" className={cnFeed()} number="2" type={cnBox({horizontal: "right", vertical: "top"})}></Card>
                    <Card size="m" className={cnFeed()} number="3" type={cnBox({horizontal: "left", vertical: "bottom"})}></Card>
                    <Card size="m" className={cnFeed()} number="4" type={cnBox({horizontal: "right", vertical: "bottom"})}></Card>
                </div>
            </div>
        );
    }
}

export default Feed;
