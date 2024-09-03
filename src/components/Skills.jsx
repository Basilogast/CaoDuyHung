import webdev from "../assets/img/webdev.svg";
import graphdes from "../assets/img/graphdes.svg";
import landing from "../assets/img/landing.svg";
import consultation from "../assets/img/consultation.svg";
import blog from "../assets/img/blog.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="service">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Testimonials</h2>
                        <p>What others says about me!</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={consultation} alt="Image" />
                                <h5>Website Consultation</h5>
                            </div>
                            <div className="item">
                                <img src={landing} alt="Image" />
                                <h5>Landing Page Design</h5>
                            </div>
                            <div className="item">
                                <img src={blog} alt="Image" />
                                <h5>Blog Page Design</h5>
                            </div>
                            <div className="item">
                                <img src={graphdes} alt="Image" />
                                <h5>Graphic Design</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
