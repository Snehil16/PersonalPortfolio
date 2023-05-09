import pythonImg from "../assets/img/python.png";
import cImg from "../assets/img/c++.png";
import htmlImg from "../assets/img/html.png";
import cssImg from "../assets/img/css.png";
import jsImg from "../assets/img/js.png";
import reactImg from "../assets/img/react.png";
import djangoImg from "../assets/img/django.png";
import mongoImg from "../assets/img/mongodb.png";
import redisImg from "../assets/img/redis.png";
import mysqlImg from "../assets/img/mysql.png";
import neoImg from "../assets/img/neo4j.png";
import figmaImg from "../assets/img/figma.png";
import gitImg from "../assets/img/git.png";
import photoshopImg from "../assets/img/photoshop.png";
import illustratorImg from "../assets/img/illustrator.png";
import indesignImg from "../assets/img/indesign.png";
import mayaImg from "../assets/img/maya.png";
import zbrushImg from "../assets/img/zbrush.png";
import latexImg from "../assets/img/latex.png";
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
                  <img src={pythonImg} alt="Web Dev" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={cImg} alt="Web Dev" />
                  <h5>C/C++</h5>
                </div>
                <div className="item">
                  <img src={htmlImg} alt="Web Dev" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={cssImg} alt="Web Dev" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={jsImg} alt="Web Dev" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={mysqlImg} alt="Web Dev" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={mongoImg} alt="Web Dev" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={redisImg} alt="Web Dev" />
                  <h5>Redis</h5>
                </div>
                <div className="item">
                  <img src={djangoImg} alt="Web Dev" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={neoImg} alt="Web Dev" />
                  <h5>Neo4j</h5>
                </div>
                <div className="item">
                  <img src={reactImg} alt="Web Dev" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={gitImg} alt="Web Dev" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={figmaImg} alt="Web Dev" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={latexImg} alt="Web Dev" />
                  <h5>Latex</h5>
                </div>
                <div className="item">
                  <img src={mayaImg} alt="Web Dev" />
                  <h5>Autodesk Maya</h5>
                </div>
                <div className="item">
                  <img src={zbrushImg} alt="Web Dev" />
                  <h5>Pixologic Zbrush</h5>
                </div>
                <div className="item">
                  <img src={photoshopImg} alt="Web Dev" />
                  <h5>Adobe Photoshop</h5>
                </div>
                <div className="item">
                  <img src={illustratorImg} alt="Web Dev" />
                  <h5>Adobe Illustrator</h5>
                </div>
                <div className="item">
                  <img src={indesignImg} alt="Web Dev" />
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
