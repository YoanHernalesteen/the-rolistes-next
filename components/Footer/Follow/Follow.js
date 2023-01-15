import { Fragment } from "react";
import { faFacebookF, faMastodon, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../Footer.module.css";
import { Row, Col } from "react-bootstrap";
import globalClasses from '../../../styles/App.module.css';

const Follow = (props) => {
  return (
    <Fragment>
      <div className={globalClasses.item_box_footer}>
        <Row>
          <Col xs={12}>
            <h2 className={globalClasses.section_title_footer}>Follow</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <a
              href="https://www.facebook.com/Rolistespod/"
              className={classes.FooterLink}
            >
              <span>
                <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
              </span>
            </a>
          </Col>

          <Col xs={4}>
            <a
              href="https://twitter.com/rolistespod"
              className={classes.FooterLink}
            >
              <span>
                <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
              </span>
            </a>
          </Col>

          <Col xs={4}>
            <a
              href="https://dice.camp/@Rolistespod"
              className={classes.FooterLink}
            >
              <span>
                <FontAwesomeIcon icon={faMastodon} aria-hidden="true" />
              </span>
            </a>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Follow;
