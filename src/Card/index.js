import React, { Component } from "react";
import "./Card.css";
import { cn } from "@bem-react/classname";
import Video from "../Video";
import VideoControl from "../VideoControl";

const cnCard = cn("Card");

class Card extends Component {
    render() {
        return (
            <div className={cnCard({size: this.props.size})} id={`box-${this.props.number}`}>
                <div className={cnCard("Header")}>
                    <p>Камера {this.props.number}</p>
                </div>
                <div className={cnCard("Content")}>
                    <Video id={`video-${this.props.number}`}></Video>
                    <VideoControl id={this.props.number}/>
                </div>
            </div>
        );
    }
}

export default Card;