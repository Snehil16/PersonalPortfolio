import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Skilled in Python, C/C++, HTML, CSS, JavaScript, SQL, Typescript, and experienced with databases like MongoDB, Redis, MySQL, and Neo4j. Familiar with Pandas, Numpy, Django, and React.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Web Dev" />
                  <h5>C/C++</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Web Dev" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>Redis</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>Neo4j</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>Linux</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>Latex</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>Autodesk Maya</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>Pixologic Zbrush</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>Adobe Photoshop</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>Adobe Illustrator</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Dev" />
                  <h5>Adobe InDesign</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Web Dev" />
    </section>
  )
}
