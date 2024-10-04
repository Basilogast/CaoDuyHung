import React, { useState, useEffect } from "react";
import "./App.css";
import "./base.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner2 } from "./components/Banner2";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import {Pricing} from "./components/Pricing";
import { Footer } from "./components/Footer";
import { Parallax } from "./components/Parallax";
import { Work } from "./components/Work";
import Tech from "./components/Tech";
import DotLoader from "react-spinners/DotLoader"; // Import DotLoader

function App() {
  // State to manage loading
  const [loading, setLoading] = useState(true);

  // Simulate a loading effect
  useEffect(() => {
    // Simulating loading time (e.g., fetching data or loading external scripts)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as per the need

    return () => clearTimeout(timer);
  }, []);

  // Load external scripts after loading finishes
  useEffect(() => {
    if (!loading) {
      const scriptUrls = [
        "./imageReveal/js/charming.min.js",
        "./imageReveal/js/imagesloaded.pkgd.min.js",
        "./imageReveal/js/TweenMax.min.js",
        "./imageReveal/js/demo.js"
      ];

      scriptUrls.forEach((url) => {
        const script = document.createElement("script");
        script.src = url;
        script.defer = true;
        document.head.appendChild(script);

        // Cleanup script when the component is unmounted
        return () => {
          document.head.removeChild(script);
        };
      });
    }
  }, [loading]);

  return (
    <>
      {loading && (
        // Preloader Spinner with DotLoader and purple color
        <div className="preloader">
          <DotLoader color={"#800080"} loading={loading} size={200} />
        </div>
      )}

      <div className={`App ${loading ? '' : 'loaded'}`}>
        {!loading && (
          <>
            <Parallax />
            <NavBar />
            <Banner2 />
            <About />
            <Work />
            <Tech />
            <Testimonials />
            <Pricing/>
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
