import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import MFF from "../assets/img/route.jpg";
import comic from "../assets/img/background for cities.png";
import audio from "../assets/img/plane.webp";
import video from "../assets/img/blackbox.png";
import control from "../assets/img/control.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Route to Communication Lab",
      description: "30MFF Website",
      imgUrl: MFF,
      linkUrl: "https://snehil16.github.io/30MFF-Website/",
    },
    {
      title: "Business Startup",
      description: "Comic Website",
      imgUrl: comic,
      linkUrl: "https://snehil16.github.io/ComicWebsite/",
    },
    {
      title: "Fear in the Skies: A Flight Emergency",
      description: "Audio Project",
      imgUrl: audio,  
      linkUrl: "https://snehil16.github.io/AudioProject/",
    },
    {
      title: "A Virtual Tour",
      description: "Video Project",
      imgUrl: video,
      linkUrl: "https://snehil16.github.io/Video-Project/",
    },
    {
      title: "Humans Under Algorithmic Control",
      description: "Web Dev Project",
      imgUrl: control,
      linkUrl: "https://snehil16.github.io/Humans-Under-Algirthmic-Control/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>The projects below are a collection that showcases my skills, accomplishment's, and creative work. The projects include projects varying from interactive websites to other types of creative work. </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="specialRow">
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Web Dev"></img>
    </section>
  )
}
