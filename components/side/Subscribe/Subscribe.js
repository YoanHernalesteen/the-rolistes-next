
import { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import classes from './Subscribe.module.css';
import globalClasses from '../../../styles/styles.css';

const Subscribe = (props) => {
    return (
        <Fragment>
            <div className={[globalClasses.item_box_right,globalClasses.item_box_hide_mobile].join(' ')}>
                <Row>            
                    <Col xs={12}>
                        <h2 className={globalClasses.section_title}>Newsletter</h2>                     
                    </Col>
                </Row>
               
                <a href="mailto:rolistespod@gmail.com" className={classes.SideLinkText}><span>Subscribe</span></a>
                   
            </div>   
        </Fragment>
    )
}

export default Subscribe;