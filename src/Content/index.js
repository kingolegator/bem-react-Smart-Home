import React, { Component } from 'react';
import './Content.css';
import { cn } from "@bem-react/classname";
import Link from "../Link";
import Card from "../Card";

const cnContent = cn("Content");

class Content extends Component {
    render() {
        return (
            <div className={cnContent()}>
                <h1 className={cnContent("Main-Feed")}>Видеонаблюдение</h1>
                <div className={cnContent("Grid-Container")}>
                    <Card size="m" className={cnContent({size: "m"})} id="box-1"></Card>
                </div>
            </div>
        );
    }
}

export default Content;

{/* <div class="grid-container">
   <div class="grid-item m" id="box-1">
      <div class="device-header">
         <p class="item-content-header">Камера 1</p>
      </div>

      <div class="device-content">
         <video class="video" id="video-1" controls="" muted="" autoplay=""></video>
         <div class="video-control">
            <div class="video-range"><label>Яркость</label><input id="brightness-1" type="range" value="1" step="0.1" min="1" max="5" oninput="changeBrightnessFilter('video-1', value)"><label>Контраст</label><input id="contrast-1" type="range" value="1" step="0.1" min="0.25" max="10" oninput="changeContrastFilter('video-1', value)"></div>
            <label class="volume-graph-label">Ур. громкости</label>
            <canvas class="volume-video" id="volume-graph-1"></canvas>
         </div>
      </div>
   </div>
   <div class="grid-item m" id="box-2">
      <div class="device-header">
         <p class="item-content-header">Камера 2</p>
      </div>
      <div class="device-content">
         <video class="video" id="video-2" controls="" muted="" autoplay=""></video>
         <div class="video-control">
            <div class="video-range"><label for="#brightness-2">Яркость</label><input id="brightness-2" type="range" value="1" step="0.1" min="1" max="5"><label for="#contrast-2">Контраст</label><input id="contrast-2" type="range" value="1" step="0.1" min="0.25" max="10"></div>
            <label class="volume-graph-label">Ур. громкости</label>
            <canvas class="volume-video" id="volume-graph-2"></canvas>
         </div>
      </div>
   </div>
   <div class="grid-item m" id="box-3">
      <div class="device-header">
         <p class="item-content-header">Камера 3</p>
      </div>
      <div class="device-content">
         <video class="video" id="video-3" controls="" muted="" autoplay=""></video>
         <div class="video-control">
            <div class="video-range"><label>Яркость</label><br><input id="brightness-3" type="range" value="1" step="0.1" min="1" max="5"><br><label>Контраст</label><br><input id="contrast-3" type="range" value="1" step="0.1" min="0.25" max="10"></div>
            <label class="volume-graph-label">Ур. громкости</label>
            <canvas class="volume-video" id="volume-graph-3"></canvas>
         </div>
      </div>
   </div>
   <div class="grid-item m" id="box-4">
      <div class="device-header">
         <p class="item-content-header">Камера 4</p>
         <button class="btn btn-default" style="display:none">Все камеры</button>
      </div>
      <div class="device-content">
         <video class="video" id="video-4" controls="" muted="" autoplay=""></video>
         <div class="video-control">
            <div class="video-range"><label>Яркость</label><input id="brightness-4" type="range" value="1" step="0.1" min="1" max="5"><label>Контраст</label><input id="contrast-4" type="range" value="1" step="0.1" min="0.25" max="10"></div>
            <label class="volume-graph-label">Ур. громкости</label>
            <canvas class="volume-video" id="volume-graph-4"></canvas>
         </div>
      </div>
   </div>
</div> */}