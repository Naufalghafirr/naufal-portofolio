import About from '../components/about';
import Skill from '../components/skill';
import Resume from '../components/resume';
import Contact from '../components/contact';

const HomePage = () => {
    return (
        <>
    <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Naufal Ghafir Ramadhan</h1>
        <p>
          I'm <span className="typed" data-typed-items="Junior Software Engineer, Junior Web Developer"></span>
        </p>
      </div>
    </section>

    <main id="main">
      
        <About />
        <Skill />
        <Resume />
        <Contact />
    </main>

    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
        );
  };
  
  export default HomePage;