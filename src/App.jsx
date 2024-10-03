import React from 'react';
// import logo from "./logo.svg";
import "./App.css";
import useExternalScripts from './useExternalScripts';
import "./base.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner2 } from "./components/Banner2";
import {About} from "./components/About";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
import {Testimonials} from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Parallax } from "./components/Parallax";
import { Work } from "./components/Work";
import Tech from "./components/Tech";
import p0 from "../src/assets/img/1.jpg";
// import { ParticleBackground } from "./components/ParticleBackground";

function App() {
  const scriptUrl2 = "./imageReveal/js/demo.js";
  const scriptUrl3 = "./imageReveal/js/charming.min.js";
  const scriptUrl4 = "./imageReveal/js/imagesloaded.pkgd.min.js";
  const scriptUrl5 = "./imageReveal/js/TweenMax.min.js";
  // Load the external script
  useExternalScripts({ url: scriptUrl3 });
  useExternalScripts({ url: scriptUrl4 });
  useExternalScripts({ url: scriptUrl5 });
  useExternalScripts({ url: scriptUrl2 });
  return (
    
      // <div className="content">
      //   <div className="block" data-fx="23">
      //     <a className="block__title" data-img={p0}>
      //       Effect 1
      //     </a>
      //     <a className="block__link" data-img="img/2.jpg">
      //       chloride
      //     </a>
      //     <a className="block__link" data-img="img/3.jpg">
      //       magnesium
      //     </a>
      //     <a className="block__link" data-img="img/4.jpg">
      //       zinc
      //     </a>
      //     <a className="block__link" data-img="img/5.jpg">
      //       iodine
      //     </a>
      //   </div>
      // </div>
      <div className="App">
      <Parallax />
      <NavBar />
      <Banner2 />
      <About/>
      <Work />
      <Tech/>
      {/* <Skills />
      <Projects /> */}
      <Testimonials/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

