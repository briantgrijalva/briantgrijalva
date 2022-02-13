import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img from '../assets/pcAboutOption2.jpg';

const About = () => {
    return ( 
    <Container>
        
        <Row id='about'>
            <Col xs={6}>
                <div className='name-div'>
                    <span className='span-title'>Briant Grijalva.</span>
                    <br />
                    <span className='span-title'>Diseñador & 
                    Desarrollador web</span>
                    {/* <p className='p-subtitle'></p> */}
                </div>
                
                <div className='social-div'>
                    <a className='a-icon-social' href='https://www.linkedin.com/in/briant-grijalva-0b5a76156'><i className="fab fa-linkedin" ></i></a> <a className='a-icon-social' href='https://github.com/briantgrijalva'><i className="fab fa-github"></i></a> <a className='a-icon-social' href='https://www.instagram.com/briantgrijalva/'><i className="fab fa-instagram-square"></i></a>
                </div>

                
            </Col>
            <Col xs={6}>
                <img src={`.${img}`} className="img-fluid img-about" alt="..."/>
            </Col>
        </Row>

       
        <Row id='skills'>
            
            <Col xs={{ order: 'first' }} md={4}></Col>
            <Col xs md={4}>
                <h5 className='h5-about'>Acerca de</h5>
                <div className='box'>

                </div>
                <div className='box-about'>
                    Estudié ingeniería de sistemas en 2016, he creado videojuegos y desarrollado aplicaciones web, actualmente estoy trabajando con MERN Stack<p className='p-tech'>(MongoDB, Express, React JS, Node JS).</p>
                </div>
            </Col>
            <Col xs={{ order: 'last' }} md={4}></Col>
        </Row>

    </Container>
     );
}
 
export default About;