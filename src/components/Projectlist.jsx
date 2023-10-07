import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import eduwell from '/src/assets/images/eduwell.png'
import chat from "/src/assets/images/chat.png";
import "../pages/style.css";


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={eduwell}
                isBlog={false}
                title="eduwell"
                description="Sample project made with HTML, CSS, Bootstrap, js, json"
                ghLink="https://github.com/mohaddeseh-heydri/EduWell"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chat}
                isBlog={false}
                title="chat"
                description="Sample project made react and tailwind "
                ghLink="https://github.com/mohaddeseh-heydri/FarawinLoginReact1/tree/main/mohaddesehHeydari"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;