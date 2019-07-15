import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import NewSection1 from './newSerction1/newSection1';
import NewSection2 from './newSection2/newSection2';
import MyPicture from './newSerction1/myPicture';
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
      <NewSection1 />
      <div className="container-fluid">
        <div className="row">
          <MyPicture />
          <div class="col-xl-9 col-lg-8">
            <section class="tabs-section">
                <NewSection2 />
            </section>
          </div>
        </div>
      </div>
      {/* <Section1 />
      <Section3 />
      <Section2 /> */}
    </div>
  );
}

export default App;
