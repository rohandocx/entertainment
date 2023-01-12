import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
import '../Contact/style.css';

const  ContactContainer = ()=>{
    const myData = [
      
        {name:'Linkedin', link:'https://www.linkedin.com/in/rohan-singh-b20aa71b8/', text:'Connect with me on Linkedin.'},
        {name:'Portfolio', link:'https://portfolio-cadlzoill-rohandocx.vercel.app/', text:'Check out my portfolio here.'},
        {name:'GitHub', link:'https://github.com/rohandocx', text:'Follow  my github account.'},
        {name:'Email', link:'rohandocx07@gmail.com',  text:'Connect with me'}
    ]
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH ME</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
                    <ul className='socialIconsList'>
                        
                        <li>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/rohitazad/" target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>
                        
                        
                        
                        <li>
                            <a rel="noreferrer" href="https://github.com/rohitazad" target="_blank">
                                <BsGithub />
                            </a>
                        </li>
                         
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;
