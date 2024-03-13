import React from 'react';
import AOS from 'aos';
AOS.init();



const hero = () => {
	return(
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
	                <h2>My Resume</h2>
	                <div className="space-border"></div>
	            </div>
			</div>
			<div className="row gh-5">

				<div className="col-lg-6"
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Experiences &amp; Achivements</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2021 - Now</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Co-Founder &amp; Web Developer </span>
                                	<a href="http://schoolpaperbank.lk" target="_blank" rel="noopener noreferrer" class="d_company">schoolpaperbank.lk</a>

                                	I leveraged the WordPress platform to create and optimize an E-commerce store tailored 
                                    for A/L science students. Handling everything from design to development, I ensured smooth navigation and user-friendly interfaces.
                                     By negotiating contracts with book publishers, I secured competitive pricing and abundant product availability. Managing sourcing, marketing, 
                                     and customer relations, I streamlined the entire process, offering students a convenient and efficient way to access essential educational materials.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2024</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">OCVP in Best Performing OC - Youth Space 3.0 Term 23.24</span>
                                	<span className="d_company">AIESEC in University of Ruhuna</span>
                                	As the Finance OCVP in Youth Space 3.0 Term 23.24 at AIESEC, University of Ruhuna,
                                     I oversaw financial operations, ensuring accountability and transparency. 
                                     This role enhanced my financial management skills within the dynamic AIESEC network.
                                      </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2023</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Runner's Up-INSL 2023 Provincial Competition</span>
                                	<span className="d_company">IEEE Sri Lanka</span>
                                    I was honored to achieve Runner-up in the INSL 2023 Provincial Competition. 
                                    This recognition highlights my dedication to excellence and my commitment to pushing boundaries in the field of engineering.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2022</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Champions - Eminence 2.0</span>
                                	<span className="d_company">IEEE Student Branch - University of Ruhuna</span>
                                    
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2022</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Runner's Up - Spaghetti Bridge Competition</span>
                                	<span className="d_company">CESS - University of Ruhuna</span>
                                    
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6" 
                    data-aos="fade-up"
                        data-aos-once="true"
                    >
                    <div className="p-4">
                        <h3 className="s_border">Education</h3>
                        <ul className="d_timeline">
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2021 - Now</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Bsc. Hons Computer Engineering </span>
                                	<span className="d_company">University of Ruhuna</span> 
                                    I am currently pursuing a Bachelor of Science (Hons) degree in Computer Engineering at the University of Ruhuna, 
                                    where I maintain a strong academic standing with a current OGPA of 3.46. This program has provided 
                                    me with a robust foundation in computer science and engineering principles, equipping me with the skills 
                                    and knowledge necessary to excel in the field. I am dedicated to furthering my education and contributing
                                     positively to the ever-evolving landscape of technology.
                                </p>
                            </li>
                            <li className="d_timeline-item">
                                <h3 className="d_timeline-title">2011-2019</h3>
                                <p className="d_timeline-text">
                                	<span className="d_title">Advanced Level - 2A's, B</span>
                                	<span className="d_company">Isipathana College</span>
                                    In 2019, I completed my Advanced Level examinations with distinction, 
                                    achieving 2A's and a B while attending Isipathana College. This academic 
                                    achievement reflects my dedication to academic excellence and my ability to excel in challenging environments.
                                </p>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
                <div className="spacer-double"></div>
			</div>
		</div>
	);
}

export default hero;