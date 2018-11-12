import React, { Component } from 'react';
import './Card.css';
import { cn } from "@bem-react/classname";

const cnCard = cn("Card");

class Card extends Component {
    render() {
        return (
            <div className={cnCard({size: this.props.size})} id={this.props.id}>
                <div className={cnCard("Header")}>
                    <p>Камера 1</p>
                </div>
                <div className={cnCard("Content")}>
                    <p>test</p>
                </div>

                {/* <div class="grid-item m" id="box-1">
                    <div class="device-header">
                        <p class="item-content-header">Камера 1</p>
                    </div>

                    <div class="device-content">
                        <video class="video" id="video-1" controls="" muted="" autoplay=""></video>
                        <div class="video-control">
                            <div class="video-range">
                                <label>Яркость</label>
                                <input id="brightness-1" type="range" value="1" step="0.1" min="1" max="5" oninput="changeBrightnessFilter('video-1', value)"></input>
                                <label>Контраст</label><input id="contrast-1" type="range" value="1" step="0.1" min="0.25" max="10" oninput="changeContrastFilter('video-1', value)"></input>
                            </div>
                            <label class="volume-graph-label">Ур. громкости</label>
                            <canvas class="volume-video" id="volume-graph-1"></canvas>
                        </div>
                    </div>
                </div> */}


            </div>
        );
    }
}

export default Card;