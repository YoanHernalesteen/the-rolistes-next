import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import classes from "../Footer.module.css";
import globalClasses from '../../../styles/App.module.css';

const paypalButton = "/images/Buttons_PayPal_BnW.png";
const patreonButton = "/images/Buttons_Patreon_BnW.png";
const DriveThruRPGButton = "/images/Buttons_DriveThruRPG_BnW.png";
const itchIOButton = "/images/Buttons_Itch.io_BnW.png";

const Support = (props) => {
  return (
    <Fragment>
      <Row>
        <Col xs={12}>
          <div className={globalClasses.item_box_footer}>
            <h2 className={globalClasses.section_title_footer}>Support Us</h2>
            <Row>
              <Col xs={6} md={3} lg={3}>
                <a
                  href="https://www.drivethrurpg.com/index.php?affiliate_id=1289000/"
                  className={classes.supportLink}
                >
                  <img
                    src={DriveThruRPGButton}
                    alt="Donate with Paypal"
                    aria-hidden="true"
                  />
                </a>
              </Col>

              <Col xs={6} md={3} lg={3}>
                <a
                  href="https://itch.io/?ac=6hKcoR9Jch"
                  className={classes.supportLink}
                >
                  <img
                    src={itchIOButton}
                    alt="Support on ItchIo"
                    aria-hidden="true"
                  />
                </a>
              </Col>

              <Col xs={6} md={3} lg={3}>
                <a
                  href="https://www.paypal.com/paypalme/rolistespod/"
                  className={classes.supportLink}
                >
                  <img
                    src={paypalButton}
                    alt="Donate with Paypal"
                    aria-hidden="true"
                  />
                </a>
              </Col>

              <Col xs={6} md={3} lg={3}>
                <a
                  href="https://www.patreon.com/RolistesPod"
                  className={classes.supportLink}
                >
                  <img
                    src={patreonButton}
                    alt="Support me on Patreon"
                    aria-hidden="true"
                  />
                </a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Support;
