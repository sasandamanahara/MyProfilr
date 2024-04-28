import React from 'react';

import Typed from "react-typed";
import AOS from 'aos';
import CV from '../CV_Sasanda_Manahara.pdf';

AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out-sine',
  delay: 200,
  mirror: true
});

const hero = () => {
    const downloadResume = () => {
        // Use the imported file as the source URL
        window.open(CV, '_blank');
    };
    return(
        <div className="v-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h6 className="color"
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >Welcome to My Website
                        </h6>
                        <div className="spacer-20"></div>
                        <div className="h1_big mb-0">Hi, I'm <span className="color">Sasanda Manahara</span></div>
                        <div className="h1_big"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                            <Typed
                                strings={[ "a Programmer." , "a Designer.","a Developer."]}
                                typeSpeed={60}
                                backSpeed={50}
                                loop
                              />
                        </div>
                        <p className="list_location"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                            data-aos-once="true"
                            >
                          Welcome! I'm a third-year undergraduate student studying Computer Engineering at the University of Ruhuna. 
                          This portfolio offers a glimpse into my journey, showcasing projects and insights as I navigate the world of technology. 
                          Join me as I strive to make an impact through innovation.
                        </p>
                        <button className="btn-main mt-3" onClick={downloadResume} style={{ cursor: 'pointer' }}>
                            My Resume
                        </button>
                    </div>

                    <div className="col-md-6">
                        <img src="./img/misc/1.png" className="img-fluid" alt="imghero"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hero;