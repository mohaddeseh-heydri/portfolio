import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import eduwell from "/src/assets/images/eduwell.png";
import chat from "/src/assets/images/chat.png";
import portfolio from "/src/assets/images/portfolio.png";
import "../pages/style.css";

function Projectlist() {
  return (
    <div className="projectbackground min-vh-100">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={eduwell}
                isBlog={false}
                title="eduwell"
                description="Sample project made with HTML, CSS, Bootstrap, js, json .The website is fully responsive and works flawlessly on all devices"
                ghLink="https://github.com/mohaddeseh-heydri/EduWell"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chat}
                isBlog={false}
                title="chat"
                description="Sample project made react and tailwind.The website is responsive in web and mobile "
                ghLink="https://github.com/mohaddeseh-heydri/FarawinLoginReact1/tree/main/mohaddesehHeydari"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={portfolio}
                isBlog={false}
                title="portfolio"
                description="Sample project made with react , react Router and Bootstrap , showcasing various aspects of my skills and projects.The website is fully responsive and works flawlessly on all devices, ensuring a seamless user experience across different screen sizes."
                ghLink="https://github.com/mohaddeseh-heydri/portfolio"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
