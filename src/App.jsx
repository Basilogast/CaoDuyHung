import React, { useState, useEffect } from "react";
import "./App.css";
import useExternalScripts from "./useExternalScripts";
import "./base.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner2 } from "./components/Banner2";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
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

  // External script loading
  const scriptUrl2 = "./imageReveal/js/demo.js";
  const scriptUrl3 = "./imageReveal/js/charming.min.js";
  const scriptUrl4 = "./imageReveal/js/imagesloaded.pkgd.min.js";
  const scriptUrl5 = "./imageReveal/js/TweenMax.min.js";

  useExternalScripts({ url: scriptUrl3 });
  useExternalScripts({ url: scriptUrl4 });
  useExternalScripts({ url: scriptUrl5 });
  useExternalScripts({ url: scriptUrl2 });

  return (
    <>
      {loading && (
        // Preloader Spinner with DotLoader and purple color
        <div className="preloader">
          <DotLoader color={"#800080"} loading={loading} size={60} />
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
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
