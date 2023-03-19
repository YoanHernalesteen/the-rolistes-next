import { Fragment } from "react";
import {
  faFacebookF,
  faTwitch,
  faSpotify,
  faTiktok,
  faTwitter,
  faYoutube,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPodcast,
  faEnvelope,
  faRss,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Follow.module.css";
import { Row, Col } from "react-bootstrap";

const PodchaserButton = "/images/Icon_Podchaser.png";

const Follow = (props) => {
  return (
    <Fragment>
      <div className={["item_box_right", "item_box_hide_mobile"].join(" ")}>
        <Row>
          <Col xs={12}>
            <h2 className={"section_title"}>Stay Connected</h2>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <h3 className={classes.side_title}>Listen</h3>
          </Col>
          <Row className={classes.side_icons}>
            <Col xs={3}>
              <a
                href="https://podcasts.apple.com/us/podcast/the-rolistes-podcast/id1043891191?mt=2"
                className={classes.SideLink}
              >
                <span>
                  <FontAwesomeIcon icon={faPodcast} aria-hidden="true" />
                </span>
              </a>
            </Col>

            <Col xs={3}>
              <a
                href="https://open.spotify.com/show/6WC5wywaLMEhnO7JWIuxom"
                className={classes.SideLink}
              >
                <span>
                  <FontAwesomeIcon icon={faSpotify} aria-hidden="true" />
                </span>
              </a>
            </Col>

            <Col xs={3}>
              <a
                href="https://www.podchaser.com/podcasts/the-rolistes-podcast-425798"
                className={classes.sideLinkIcon}
              >
                <img
                  src={PodchaserButton}
                  alt="Donate with Paypal"
                  aria-hidden="true"
                />
              </a>
            </Col>

            <Col xs={3}>
              <a
                href="http://feeds.feedburner.com/TheRolistesPodcast"
                className={classes.SideLink}
              >
                <span>
                  <FontAwesomeIcon icon={faRss} aria-hidden="true" />
                </span>
              </a>
            </Col>
          </Row>
        </Row>

        <Row>
          <Col xs={12}>
            <h3 className={classes.side_title}>Watch</h3>
          </Col>
          <Row className={classes.side_icons}>
            <Col xs={3}>
              <a
                href="https://www.youtube.com/channel/UCpguBUBlPRHN4BGTbKPFxrg"
                className={classes.SideLink}
              >
                <span>
                  <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
                </span>
              </a>
            </Col>

            <Col xs={3}>
              <a
                href="https://www.twitch.tv/rolistespod"
                className={classes.SideLink}
              >
                <span>
                  <FontAwesomeIcon icon={faTwitch} aria-hidden="true" />
                </span>
              </a>
            </Col>

            <Col xs={3}>
              <a
                href="https://www.tiktok.com/@rolistespod"
                className={classes.SideLink}
              >
                <span>
                  <FontAwesomeIcon icon={faTiktok} aria-hidden="true" />
                </span>
              </a>
            </Col>
          </Row>
        </Row>

        <Row>
          <Col xs={12}>
            <h3 className={classes.side_title}>Follow</h3>
          </Col>
          <Row className={classes.side_icons}>
            <Col xs={3}>
              <a
                href="https://www.facebook.com/Rolistespod/"
                className={classes.SideLink}
              >
                <span>
                  <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
                </span>
              </a>
            </Col>
            <Col xs={3}>
              <a
                href="https://twitter.com/rolistespod"
                className={classes.SideLink}
              >
                <span>
                  <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
                </span>
              </a>
            </Col>

            <Col xs={3}>
              <a
                href="https://dice.camp/@Rolistespod"
                className={classes.SideLink}
              >
                <span>
                  <FontAwesomeIcon icon={faMastodon} aria-hidden="true" />
                </span>
              </a>
            </Col>
          </Row>
        </Row>

        <Row>
          <Col xs={12}>
            <h3 className={classes.side_title}>Contact Us</h3>
          </Col>
          <Row className={classes.side_icons}>
            <Col xs={3}>
              <a
                href="mailto:rolistespod@gmail.com"
                className={classes.SideLink}
              >
                <span>
                  <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                </span>
              </a>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col xs={12}>
            <h3 className={classes.side_title}>Newsletter</h3>
          </Col>
          <Row className={classes.side_icons}>
            <Col xs={12}>
              <a
                href="http://eepurl.com/gJCUVX"
                className={classes.SideLinkText}
              >
                <span>Subscribe</span>
              </a>
            </Col>
          </Row>
        </Row>
      </div>
    </Fragment>
  );
};

export default Follow;
