import React, { Component } from "react";
import "./Feed.css";
import { cn } from "@bem-react/classname";
import Card from "../Card";
import VideoManager from "../VideoManagerScript/index";

const cnContent = cn("Feed");

class Feed extends Component {
    componentDidMount() {
        VideoManager();
    }
    render() {
        return (
            <div className={cnContent()}>
                <h1 className={cnContent("MainHeader")}>Видеонаблюдение</h1>
                <div className={cnContent("GridContainer")}>
                    <Card size="m" className={cnContent()} number="1"></Card>
                    <Card size="m" className={cnContent()} number="2"></Card>
                    <Card size="m" className={cnContent()} number="3"></Card>
                    <Card size="m" className={cnContent()} number="4"></Card>
                </div>
            </div>
        );
    }
}

export default Feed;
