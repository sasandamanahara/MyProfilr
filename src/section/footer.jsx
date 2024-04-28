import React from 'react';

const footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a href="" target="_blank" rel="noreferrer">
                            <span className="copy">&copy; Copyright {currentYear} - Sasanda Manahara</span>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="social-icons">
                            <a href="https://www.facebook.com/sasanda.manahara" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                            
                            <a href="https://www.linkedin.com/in/sasanda-manahara-324b92276" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                            <a href="https://github.com/sasandamanahara" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                            <a href="https://www.instagram.com/sasanda_manahara" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;