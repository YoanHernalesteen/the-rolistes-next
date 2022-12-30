import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Footer.module.css";
import Follow from "./Follow/Follow";
import Watch from "./Watch/Watch";
import Listen from "./Listen/Listen";
import Contact from "./Contact/Contact";
import { useEffect } from "react";
import Support from "./Support/Support";
import Subscribe from "./Subscribe/Subscribe";

const Footer = (props) => {
  useEffect(() => {
    window.onscroll = function () {
      toggleFooter(this);
    };
  });

  const toggleFooter = () => {
    const elem = document.getElementById("dynamicFooter");

    if (typeof elem !== "undefined" && elem !== null) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("dynamicFooter").className = classes.navUp;
      } else {
        document.getElementById("dynamicFooter").className = classes.navDown;
      }
    }
  };

  return (
    <Fragment>
      <footer>
        <Container className={classes.footer}>
          <Row>
            <Col xs={12} lg={7}>
              <Listen />
            </Col>
            <Col xs={6} lg={true}>
              <Watch />
            </Col>
            <Col xs={6} lg={true}>
              <Follow />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={7}>
              <Support />
            </Col>
            <Col xs={6} lg={true}>
              <Contact />
            </Col>
            <Col xs={6} lg={true}>
              <Subscribe />
            </Col>
          </Row>
        </Container>

        <div id="dynamicFooter">
          <a href="#top" className={classes.topLink}>
            <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
