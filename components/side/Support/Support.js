
import { Fragment } from 'react';
import { faPatreon, faPaypal, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import classes from './Support.module.css';

const DriveThruRPGButton = "/images/Icon_Drivethru.png";

const Support = (props) => {
    return (
        <Fragment>
            <div className={["item_box_right","item_box_hide_mobile"].join(' ')}>
                <Row>
                    <Col xs={12}>                    
                        <h2 className={"section_title"}>Support Us</h2>                          
                    </Col>
                    <Row className={classes.side_icons}>
                            
                        <Col xs={3}>
                            <a href="https://www.patreon.com/RolistesPod" className={classes.SideLink}><span><FontAwesomeIcon icon={faPatreon} aria-hidden="true"/></span></a>
                        </Col>

                        <Col xs={3}>
                            <a href="https://www.paypal.com/paypalme/rolistespod/" className={classes.SideLink}><span><FontAwesomeIcon icon={faPaypal} aria-hidden="true"/></span></a>
                        </Col>

                        <Col xs={3}>
                            <a href="https://www.drivethrurpg.com/index.php?affiliate_id=1289000" className={classes.sideLinkIcon}><img src={DriveThruRPGButton}  alt="Donate with Paypal" aria-hidden="true"/></a>
                        </Col>

                        <Col xs={3}>
                            <a href="https://itch.io/?ac=6hKcoR9Jch" className={classes.SideLink}><span><FontAwesomeIcon icon={faItchIo} aria-hidden="true"/></span></a>
                        </Col>

                    </Row>               
                </Row> 
            </div>   
        </Fragment>
    )
}

export default Support;