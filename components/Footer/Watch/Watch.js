import { Fragment } from "react";
import {
  faTwitch,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../Footer.module.css";
import { Row, Col } from "react-bootstrap";
import globalClasses from '../../../styles/App.module.css';

const Watch = (props) => {
  return (
    <Fragment>
      <div className={globalClasses.item_box_footer}>
        <Row>
          <Col xs={12}>
            <h2 className={globalClasses.section_title_footer}>Watch</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <a
              href="https://www.youtube.com/channel/UCpguBUBlPRHN4BGTbKPFxrg"
              className={classes.FooterLink}
            >
              <span>
                <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
              </span>
            </a>
          </Col>

          <Col xs={4}>
            <a
              href="https://www.twitch.tv/rolistespod"
              className={classes.FooterLink}
            >
              <span>
                <FontAwesomeIcon icon={faTwitch} aria-hidden="true" />
              </span>
            </a>
          </Col>

          <Col xs={4}>
            <a
              href="https://www.tiktok.com/@rolistespod?lang=en"
              className={classes.FooterLink}
            >
              <span>
                <FontAwesomeIcon icon={faTiktok} aria-hidden="true" />
              </span>
            </a>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Watch;
