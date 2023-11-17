import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import cinema from "../assets/img/cinema-img.jpg";
import netflix from "../assets/img/netflix-img1.png"
import bsone from "../assets/img/bsone-img.jpg"
import minhasTarefas from "../assets/img/minhas-tarefas.png"
import sudokuSolveria from "../assets/img/sudoku-solveria.png"
import petSaude from "../assets/img/pet-saude.png"
import { ProjetoCard } from "./ProjetoCard"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projetos = (scrolly) => {

    console.log(scrolly);

    const projetosWeb = [
        {
            titulo: "Cinema",
            descricao: "Desenvolvido com React.Js, com estático ",
            imgUrl: cinema,
        },
        {
            titulo: "Netflix",
            descricao: "Uma replica do site NETFLIX. Desenvolvido com React.Js, consumindo API publica",
            imgUrl: netflix,
        },
        {
            titulo: "BSOne",
            descricao: "Uma landing page estática",
            imgUrl: bsone,
        },

    ];
    const projetosMobile = [
        {
            titulo: "Minhas tarefas",
            descricao: "Crie e gerencie suas tarefas e finanças.",
            imgUrl: minhasTarefas,
            playstore: "https://play.google.com/store/apps/details?id=com.henrique.minhas_tarefas",
            github: "https://github.com/rick5678/controlador-de-tarefas",
            figma: "https://www.figma.com/proto/5tMkaBrdVEF4WGWsR4Ilio/Minhas-Tarefas?type=design&node-id=1-2&t=4Y9hRuUH1vTMPJNs-1&scaling=scale-down&page-id=0%3A1&mode=design",
        },
        {
            titulo: "Sudoku Solveria",
            descricao: "Game de Sudoku com mais de 200 níveis!",
            imgUrl: sudokuSolveria,
            playstore: "https://play.google.com/store/apps/details?id=com.henrique.sudoku_solveria",
            github: "https://github.com/rick5678/sudoku-solveria",

        },
        {
            titulo: "Pet Saúde",
            descricao: "Cuide das vacinas e vermífugos de seus pets",
            imgUrl: petSaude,
            playstore: "https://play.google.com/store/apps/details?id=com.henrique.pet_care",
            github: "https://github.com/rick5678/pet-saude",
        },

    ];

    return (
        <section className="project" id="projetos">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : "invisivel"}>
                                    <h2>Projetos</h2>
                                    <p>Uma seleção de projetos elaborados e codificados</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="primeiro">
                                        <Nav variant="pills" className="nav-pilss mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="primeiro">Web</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="segundo">Mobile</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="terceiro">Back-end</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                                            <Tab.Pane eventKey="primeiro">
                                                <Row>
                                                    {
                                                        projetosWeb.map((projeto, index) => {
                                                            return (
                                                                <ProjetoCard key={index} {...projeto} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="segundo">
                                                <Row>
                                                    {
                                                        projetosMobile.map((projeto, index) => {
                                                            return (
                                                                <ProjetoCard key={index} {...projeto} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>

                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2}/> */}
        </section>
    );
}