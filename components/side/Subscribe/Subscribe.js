
import { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import classes from './Subscribe.module.css';

const Subscribe = (props) => {
    return (
        <Fragment>
            <div className={["item_box_right","item_box_hide_mobile"].join(' ')}>
                <Row>            
                    <Col xs={12}>
                        <h2 className={"section_title"}>Newsletter</h2>                     
                    </Col>
                </Row>
               
                <a href="mailto:rolistespod@gmail.com" className={classes.SideLinkText}><span>Subscribe</span></a>
                   
            </div>   
        </Fragment>
    )
}

export default Subscribe;