import { Container, Row, Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h2>Snehil Ahuja</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Snehil16"><img src={"https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg"} alt="Icon" /></a>
              <a href="https://www.facebook.com/snehil.ahuja.30"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/snehilahuja/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
