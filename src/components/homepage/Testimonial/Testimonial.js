import React, { Component } from "react";
import './Testimonial.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div> 
        <img src="https://daveymason.com/assets/external/images/client1.png" alt="" />
          <div className="myCarousel">
            <h4>Developer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
            <cite> - Sven Holtz</cite>
          </div>
        </div>

        <div>
          <img src="https://daveymason.com/assets/external/images/client2.png" alt="" />
          <div className="myCarousel">
            
            <h4>UX Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
            
            <cite> - Mia Yang</cite>
          </div>
        </div>

        <div>
          <img src="https://daveymason.com/assets/external/images/client3.png" alt="" />
          <div className="myCarousel">
            <h4>Entrepreneur</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
            <cite> - Abigail Martinez</cite>
          </div>
          
        </div>
      </Carousel>
    );
  }
}