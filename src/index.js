import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider';

var images = ["images/spore1.png", "images/spore2.png", "images/spore3.png", "images/spore4.png", "images/spore5.png"]

ReactDOM.render(<Slider images={images}/>, document.getElementById('component'));
