import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/Assets/logo.png";
import instagram from "../assets/Assets/instagram_icon.png";
import pintrest from "../assets/Assets/pintester_icon.png";
import whatsapp from "../assets/Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="alll">
          <Col className="logo">
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
          </Col>
          <Col className="Links_icon">
            <ul>
              <li>
                <a href="#company">Company</a>
              </li>
              <li>
                <a href="#Product">Products</a>
              </li>
              <li>
                <a href="#Offices">Offices</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            <div className="icon">
              <a href="#instagram">
                <img src={instagram} alt="icon" />
              </a>
              <a href="#pintrest">
                <img src={pintrest} alt="icon" />
              </a>
              <a href="#whatsapp">
                <img src={whatsapp} alt="icon" />
              </a>
            </div>
          </Col>
          <Col className="copyright">
            <hr />
            <p>Copyright @2024 - Mahmoud Al-Sheikh </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
