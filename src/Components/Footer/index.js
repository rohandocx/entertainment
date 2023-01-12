import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook,BsInstagram, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            
                            <ul className='socialIconsList'>
                                
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/rohan-singh-b20aa71b8/" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://www.instagram.com/rohan_singh724/" target="_blank">
                                        <BsInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://twitter.com/RohanSi01063908" target="_blank">
                                        <BsTwitter />
                                    </a>
                                </li>
                                           
                                <li>
                                    <a rel="noreferrer" href="https://github.com/rohandocx" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                                
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>©Developed & designed by Rohan Singh  </small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;