import { Fragment } from "react";

import classes from "../Footer.module.css";
import { Row, Col } from "react-bootstrap";

const Subscribe = (props) => {
  return (
    <Fragment>
      <div className={"item_box_footer"}>
        <Row>
          <Col xs={12}>
            <h2 className={"section_title_footer"}>Newsletter</h2>
          </Col>
        </Row>

        <a href="http://eepurl.com/gJCUVX" className={classes.FooterLinkText}>
          <span>Subscribe</span>
        </a>
      </div>
    </Fragment>
  );
};

export default Subscribe;
