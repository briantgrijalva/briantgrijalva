import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import imgPomodoro from '../assets/imgPomodoro.png';
import imgPrespuesto from '../assets/presupuesto.png';
import imgPixabay from '../assets/imgPixabay.png';
import imgPapershipx from '../assets/imgPapershipx.png';
import imgMerntask from '../assets/mernTaskImg.png';
import imgCalendar from '../assets/imgCalendar.png';

const Projects = () => {
    return ( 
        <Container id='projects'>
            <Row>
                <Col xs={{ order: 'first' }} md={4}></Col>
                <Col xs md={4}>
                    <h5 className='h5-project'>Proyectos</h5>
                    <div className='box'>

                    </div>
                    <div className='box-project'>
                        Algunos proyectos que he creado a lo largo de mi travesía.
                    </div>
                </Col>
                <Col xs={{ order: 'last' }} md={4}></Col>
            </Row>

            <Row>
                <Col sm>
                    <ProjectCard imgProject={imgPomodoro} urlProject={'https://briantgrijalva.github.io/pomodoro-app/'}/>
                </Col>
                <Col sm>
                    <ProjectCard imgProject={imgPrespuesto} urlProject={'https://controldegastosbgreact.netlify.app/'}/>
                </Col>
                <Col sm>
                    <ProjectCard imgProject={imgPixabay} urlProject={'https://briantgrijalva.github.io/pixabay/'}/> 
                </Col>
                <Col sm>
                    <ProjectCard imgProject={imgPapershipx} urlProject={'https://play.google.com/store/apps/details?id=com.KirinXstudio.PaperShipX'}/>
                </Col>
                <Col sm>
                    <ProjectCard imgProject={imgMerntask} urlProject={'https://merntaskbg.netlify.app/'}/>
                </Col>
                <Col sm>
                    <ProjectCard imgProject={imgCalendar} urlProject={'https://mern-calendar-briant.herokuapp.com/'}/>
                </Col>
            </Row>

        </Container>
     );
}
 
export default Projects;