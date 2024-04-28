import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../layout/Navbar';
import Hero from '../section/heroDarkNew';
import About from '../section/aboutDark';
import Blockquote from '../section/blockquote';
import Whatido from '../section/whatido';
import Gallery from '../section/gallery';
import Resume from '../section/resume';
import Counter from '../section/counter';
import Blog from '../section/blog';
import Contact from '../section/contact';
import Footer from '../section/footer';
import Preloader from "../layout/Preloader";
import ScrollToTopBtn from '../layout/ScrollToTop';
import { GlobalStyles } from './style/darknew';

const image1 ="./img/background/6.jpg";

function home() {
  return (
    <>
    <GlobalStyles/>
    <Preloader/>
    <div className="home">

      <header id="header-wrap">
        <Navbar />
      </header>

      {/* HERO */}
      <section id="hero-area" className="bg-bottom py-0">
        <Parallax bgImage={image1} strength={300}>
        <Hero/>
        <Link smooth spy to="about">
          <span className="mouse transition" id="fly">
              <span className="scroll"></span>
          </span>
        </Link>
        </Parallax>
      </section>


      {/* ABOUT */}
      <section id="about" className="pb-0">
        <About/>
      </section>

      {/* What I DO */}
      <section id="whatido" className="pb-0">
        <Whatido/>
        <Blockquote/>
      </section>

      {/* Gallery */}
      <section id="gallery">
        <Gallery/>
      </section>

      {/* Gallery */}
      <section id="resume" className="pb-0">
        <Resume/>
      {/*  <Counter/> */}
      </section>

      {/* Gallery 
      <section id="blog" className="pb-0">
        <Blog/>
      </section>
      */}
      

      {/* contact */}
      <section id="contact" className="py-0">
      {/*  <Contact/> */}
        <Footer/>
      </section>
      

      


      <div className="float-text">
          <div className="de_social-icons">
          <a href="https://www.facebook.com/sasanda.manahara" target="_blank" rel="noreferrer" class="buton"><i class="fa fa-facebook fa-lg"></i></a>


          <a href="https://www.linkedin.com/in/sasanda-manahara-324b92276" target="_blank" rel="noreferrer" class="buton"><i class="fa fa-linkedin fa-lg"></i></a>

          <a href="https://www.instagram.com/sasanda_manahara" target="_blank" rel="noreferrer" class="buton"><i class="fa fa-instagram fa-lg"></i></a>

          </div>
          <span>Follow Me</span>
      </div>
    </div>
    <ScrollToTopBtn />
    </>
  );
}

export default home;
