import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Web Dev" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div className="proj-desc">
            <span>{description}</span>
            <button className="vvd" onClick={() => window.location.href = linkUrl}>Visit Site</button>
          </div>
        </div>
      </div>
    </Col>
  )
}
