import React, { Component } from "react";
import "./VideoControl.css";
import { cn } from "@bem-react/classname";

const cnVideoControl = cn("VideoControl");

class VideoControl extends Component {
    render() {
        return (
            <div className={cnVideoControl()}>
                <div className={cnVideoControl("VideoRange")}>
                    <label>Яркость</label>
                    <input id={`brightness-${this.props.id}`}
                        type="range"
                        defaultValue="1"
                        step="0.1"
                        min="1"
                        max="5">
                    </input>
                    <label>Контраст</label>
                    <input
                        id={`contrast-${this.props.id}`}
                        type="range"
                        defaultValue="1"
                        step="0.1"
                        min="0.25"
                        max="10">
                    </input>
                </div>
                <label className={cnVideoControl("VolumeGraphLabel")}>Ур. громкости</label>
                <canvas className={cnVideoControl("VolumeVideo")}
                    id={`volume-graph-${this.props.id}`}>
                </canvas>
            </div>
        );
    }
}

export default VideoControl;