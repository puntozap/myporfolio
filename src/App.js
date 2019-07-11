import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Section1 />
      <Section3 />
      <Section2 />
    </div>
  );
}

export default App;
