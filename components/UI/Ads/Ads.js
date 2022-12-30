
import { Fragment } from 'react';
import classes from './Ads.module.css';
import { Row, Col } from 'react-bootstrap';

const adsIMG = "/images/Banner_DriveThruRPG_BnW.png";

const Ads = (props) => (
    <Fragment>
        <Row>
            <Col xs={12}>
                <div className={classes.adsContainer}>
                    <a href="https://www.drivethrurpg.com/index.php?affiliate_id=1289000/">            
                        <img src={adsIMG} alt="drivethru RPG ads" className={classes.ads}/>  
                    </a>
                </div>

            </Col>
        </Row>                  
    </Fragment>
)

export default Ads;