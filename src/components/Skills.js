import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgReact from '../assets/react.png';
import imgCss from '../assets/css-3.png';
import imgHtml from '../assets/html5.png';
import imgJs from '../assets/js.png';
import imgUiUx from '../assets/uiux.png';
import imgGit from '../assets/git.png';
import imgMongo from '../assets/mongo.png';
import imgNode from '../assets/node-js.png';
import { SkillCard } from './SkillCard';

const Skills = () => {


    return ( 
        <Container>

            <Row>
                <Col sm={4}>
                    <div className='container-fluid skills-div'>
                        HABILIDADES
                    </div>
                </Col>

                <Col sm={8}>
                        <Row>
                            <Col xs={6} md={3}>
                                <SkillCard imgReact={imgReact} nameSkill={'React JS'}/>
                            </Col>
                            <Col xs={6} md={3}>
                                <SkillCard imgReact={imgNode} nameSkill={'Node JS'}/>
                            </Col>
                            <Col xs={6} md={3}>
                                <SkillCard imgReact={imgUiUx} nameSkill={'UI / UX'}/> 
                            </Col>
                            <Col xs={6} md={3}>
                                <SkillCard imgReact={imgGit} nameSkill={'Git'}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6} md={3}>
                                <SkillCard imgReact={imgMongo} nameSkill={'Mongo DB'}/>
                            </Col>
                            <Col xs={6} md={3}>
                                <SkillCard imgReact={imgHtml} nameSkill={'HTML'}/>
                            </Col>
                            <Col xs={6} md={3}>
                                <SkillCard imgReact={imgCss} nameSkill={'CSS'}/>
                            </Col>
                            <Col xs={6} md={3}>
                                <SkillCard imgReact={imgJs} nameSkill={'Javascript'}/>
                            </Col>
                            
                        </Row>
                
                </Col>
    
            </Row>
        </Container>
        
     );
}
 
export default Skills;