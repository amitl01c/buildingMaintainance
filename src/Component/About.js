
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Card } from 'react-bootstrap';
import './About.css'; // Import your custom CSS file for additional styling
import Header from './Header';
import img1 from './download.png'
import img2 from './images.jpeg'

const About = () => {

  <Header/>  
  return (
    <>
    <Header/>
    <Container className="about-container">
      <Row>
        <Col md={6}>
          <img
            className="about-image"
            src="https://media.licdn.com/dms/image/C511BAQHBopfaAwjBqw/company-background_10000/0/1584408693207/airmech_engineers_cover?e=2147483647&v=beta&t=vK1kpRIZ6-VmHsuMZwakjXX3yOj1v10vTlI_Jvwj6c0" // Replace with your actual image source
            alt="About Page"
          />
        </Col>
        <Col md={6} className="about-content">
          <h1>About Us</h1>
          <p>
            At Building Maintenance Services, our vision is to redefine the standard of building care, fostering environments that inspire safety, comfort, and sustainability. We envision buildings not merely as structures, but as vibrant hubs of community, innovation, and well-being. Through our unwavering commitment to excellence, innovation, and environmental stewardship, we aim to set new benchmarks in building maintenance, elevating the quality of life for occupants while preserving resources for future generations. Our vision is to be recognized as the premier partner in building maintenance, trusted to deliver unparalleled service, reliability, and value to our clients, empowering them to thrive in spaces that are meticulously cared for and thoughtfully managed. Together, we are building a future where every building is a beacon of excellence, integrity, and sustainability, enriching the lives of all who inhabit them.
          </p>
          <p>
            We are dedicated to providing quality services and creating
            innovative solutions for our users. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. From essential infrastructure maintenance services like electricity, gardening, security, plumbing, lift maintenance, painting, and interior design, to meticulous cleaning services including sewage cleaning, society garbage collection, house cleaning, and bathroom cleaning, we have you covered.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        {/* Example Bootstrap Cards with Images */}
        <center><h2 style={{marginTop:'2%'},{marginBottom:'1%'}}>Our Team</h2></center>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={img1} alt="Card 1" />
            <Card.Body>
              <Card.Title>Prachi Thombre</Card.Title>
              <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={img2} alt="Card 2" />
            <Card.Body>
              <Card.Title>Abhishek Awatare</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={img2} alt="Card 2" />
            <Card.Body>
              <Card.Title>Akhilesh Bankar</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={img2} alt="Card 3" />
            <Card.Body>
              <Card.Title>Amit Lauwanshi</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    </>
  );
};

export default About;
