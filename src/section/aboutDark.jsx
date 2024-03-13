import React from 'react';
import Skillbar from '../layout/skillbar';

import AOS from 'aos';
AOS.init();


const hero = () => {
	return(
		<div className="v-center">
		<div className="container">
			<div className="row align-items-center">
					            
					<div className="col-md-12">
	                <h2>About Me</h2>
	                <p>I am a driven Computer Engineering student passionate about technology and innovation. 
						Proficient in programming languages like Java & C++ with hands-on experience in software development. 
						Eager to secure an internship where I can apply my skills, contribute to exciting projects,
						 and continue learning and growing in the field of computer engineering.
	                </p>
	                <div className="d-skills-bar">
	                  <div className="d-bar">
	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>C++</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={70} />
	                    </div>

	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>Java Script</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={65} />
	                    </div>

	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>C#</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={70} />
	                    </div>

	                    <div className="d-skill">
	                        <div className="d-info">
	                          <span>Python</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={75} />
	                    </div>

	                    <div className="d-skill" data-value="90%" style={{width: "90%"}}>
	                        <div className="d-info">
	                          <span>Dart</span>
	                        </div>
	                        <Skillbar bgColor={"#50BEC2"} progress={70} />
	                    </div>

	                    </div>
	                </div>
	            </div>  

			</div>
		</div>
		</div>
	);
}

export default hero;