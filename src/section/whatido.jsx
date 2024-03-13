import React from 'react';
import AOS from 'aos';
AOS.init();

const whatido = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <h2>What I Do</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="spacer-single"></div>
            <div className="row">
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_genius id-color-2"></i>
                            <div className="text">
                                <h3>UI/UX Design</h3>
                                Proficient in UI/UX design, I specialize in creating visually appealing and user-friendly interfaces. I focus on understanding user needs and behaviors to design intuitive digital experiences that enhance usability and satisfaction.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4" 
                    data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_tools id-color-2"></i>
                            <div className="text">
                                <h3>Development</h3>
                                I'm skilled in web and app development, crafting websites with HTML, CSS, and JavaScript,
                                 and building mobile apps using React Native and Flutter.
                                 I focus on creating user-friendly experiences through clean and efficient code, ensuring seamless digital solutions for all.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="fa fa-code id-color-2"></i>
                            <div className="text">
                                <h3>CMS</h3>
                                I build easy-to-update websites with WordPress. With expertise in content management systems, 
                                I ensure smooth navigation and user-friendly experiences. Whether it's new sites or improvements, 
                                I focus on creating visually appealing and functional solutions for diverse needs.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default whatido;