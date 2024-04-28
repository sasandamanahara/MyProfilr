import React from 'react';
import Masonry from "react-masonry-component";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

const Gallery= function() {
    /* lightbox1 */
    const [lighbx, setlighbx] = React.useState(false);
    const handleBtnClick = (): void => {
      setlighbx(!lighbx);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "hidden";
    };
    const handleBtnClickclose = (): void => {
      setlighbx(!lighbx);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };

    /* lightbox2 */
    const [lighbx1, setlighbx1] = React.useState(false);
    const handleBtnClick1 = (): void => {
      setlighbx1(!lighbx1);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "hidden";
    };
    const handleBtnClickclose1 = (): void => {
      setlighbx1(!lighbx1);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };

    /* lightbox2 */
    const [lighbx2, setlighbx2] = React.useState(false);
    const handleBtnClick2 = (): void => {
      setlighbx2(!lighbx2);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "hidden";
    };
    const handleBtnClickclose2 = (): void => {
      setlighbx2(!lighbx2);
      var x = document.getElementsByTagName("BODY")[0];
      x.style.overflow = "auto";
    };
    return(
            <div className="container">
            <GlobalStyles/>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Portfolio</h2>
                        <div className="space-border"></div>
                    </div>
                </div>
                 <Masonry
                    className={"row my-gallery-class"} elementType={"div"}>
                    
                    <div className="col-lg-4 image-element-class de_modal" onClick={handleBtnClick1}
                        data-aos="fade-up"
                        data-aos-once="true"
                        > 
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Medi Connect</h3>
                                <h5 className="d-tag">App</h5>
                            </div>
                            <img src="./img/gallery/mediconnectlogo.png" alt="gallery"/>
                        </div>
                    </div>
                    <div className="col-lg-4 image-element-class de_modal" onClick={handleBtnClick2}
                        data-aos="fade-up"
                        data-aos-once="true"
                        >
                        <div className="card-image-1">
                            <div className="d-text">
                                <h3>Next Step Careers</h3>
                                <h5 className="d-tag">CV Matching website</h5>
                            </div>
                            <img src="./img/gallery/3.jpg" alt="gallery"/>
                        </div>
                    </div>
                   
                   
                   
                  </Masonry>

                 

                  {/* lightbox2 */}
                  {lighbx1 && ( 
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose1}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <div className="row g-4">
                                    <div className="col-lg-12 item">
                                        <img src="./img/gallery-big/1.jpg" className="img-fluid"/>
                                    </div>
                                   
                                    <div className="col-lg-12 item">
                                    <video className="pop" controls autoPlay loop>
                                <source src="./video/MediConnect.mp4" type="video/mp4"/>
                                  
                                </video>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div className="col-lg-4 de_project-info">
                            <h3>Medi Connect</h3>
                                <p>MediConnect mobile application is designed to simplify the process of finding 
essential medicines. Acting as a bridge between users and nearby pharmacies, our platform 
connects individuals in need of specialized medicines with pharmacies capable of fulfilling those 
needs.</p>
                                <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-user-o"></i>Framework: <span>Flutter</span>
                                    </div>
                                    
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Year: <span>2023</span>
                                    </div>
                                   
                                </div>
                                <div className="spacer-30"></div>
                                
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

                {/* lightboxvideo */}
                {lighbx2 && ( 
                  <div className="LightboxGal">
                    <div className="closeGal">
                        <button className="button-close" onClick={handleBtnClickclose2}></button>
                    </div>
                    <div className="v-center w-100">
                      <div className="mainLightbox container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                            <div className="row g-4">
                                    <div className="col-lg-12 item">
                                        <img src="./img/gallery-big/8.jpg" alt="galleryimage" className="img-fluid"/>
                                    </div>
                                   
                                    <div className="col-lg-6 item">
                                        <img src="./img/gallery-big/2.jpg" alt="galleryimage" className="img-fluid"/>
                                    </div>
                                    <div className="col-lg-6 item">
                                        <img src="./img/gallery-big/3.jpg" alt="galleryimage" className="img-fluid"/>
                                    </div>
                                    <div className="col-lg-12 item">
                                        <img src="./img/gallery-big/5.jpg"alt="galleryimage" className="img-fluid"/>
                                    </div>
                                    <div className="col-lg-6 item">
                                        <img src="./img/gallery-big/7.jpg"alt="galleryimage" className="img-fluid"/>
                                    </div>
                                    <div className="col-lg-6 item">
                                        <img src="./img/gallery-big/6.jpg"alt="galleryimage" className="img-fluid"/>
                                    </div>
                                    
                                    
                                   
                                </div>
                            </div>

                            <div className="col-lg-4 de_project-info">
                                <h3>CV-Matching Platform</h3>
                                <p> I am currently working on a CV-matching website as part of an ongoing project. This platform allows users to
 create profiles and update their CVs. This enables employers to browse and hire them based on their
 qualifications and skills. </p>
 <div className="de_project-details">
                                    <div className="d-field">
                                        <i className="fa fa-user-o"></i>Client: <span>NS Business & Consultancy Services</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-file-text-o"></i>Tech Stack: <span>MERN Stack</span>
                                    </div>
                                    <div className="d-field">
                                        <i className="fa fa-calendar-o"></i>Year: <span>2023 - Present</span>
                                    </div>
                                    
                                </div>
                                <div className="spacer-30"></div>
                                
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

      </div>
    );
}

export default Gallery;