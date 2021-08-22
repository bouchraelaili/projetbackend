import React from 'react';
import {useHistory,Link,nav,header,} from 'react-router-dom';
import {Navbar,Nav,NavDropdown}from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './Style.css';
import camel from '../image/jet-ski-1125329_1920.jpg';
import undrwimg from '../image/undraw_bike_ride_7xit.png';






const Home = () => {
 
        
    return (
        <div>
            

           <Navbar collapseOnSelect expand="lg"  variant="dark"  style={{ backgroundColor:'#343A40'}} >

             
  <Navbar.Brand href="#home"
  style={{
     color:'#FDC500',
     fontWeight:'bold',
    }}
  >YourActivity</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="nav2">
    <Nav.Link href="#homee">HOME</Nav.Link>
      <Nav.Link href="#GAllery">GALLERY</Nav.Link>
      <Nav.Link href="#ReSErvation">RESERVATION</Nav.Link>
      <Nav.Link href="#contact">CONTACT</Nav.Link>
      <Nav.Link href="#Login">LOG IN</Nav.Link>

    </Nav>
    
    
    
  </Navbar.Collapse>
</Navbar> 
<div className=" reservation">
        <section className="hero">         
		      	<img src={camel}/>
            <div className="text glass">
                <h1><span>Be</span> one of our client </h1>
            </div>
        </section>
  </div>

  <Container>
  <Row>
    <Col>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
   invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
    et justo duo dolores et ea rebum. Stet clita kasd.</p>
    </Col>
    <Col>	<img src={undrwimg} className="imagegrid"></img></Col>
  </Row>
 
</Container>



        </div>

        
        
    )
}


export default Home
