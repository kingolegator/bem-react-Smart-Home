import React, { Component } from "react";
import "./Video.css";
import { cn } from "@bem-react/classname";

const cnVideo = cn("Video");

class Video extends Component {
    render() {
        return (
            <video
                className={cnVideo()}
                id={this.props.id}
                controls
                muted>
            </video>
        );
    }
}

export default Video;