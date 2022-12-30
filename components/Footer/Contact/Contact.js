import { Fragment } from 'react';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from '../Footer.module.css';
import { Row, Col } from 'react-bootstrap';
import globalClasses from '../../../styles/App.module.css';

const Contact = (props) => {

    

    return (
        <Fragment>   
            <div className={globalClasses.item_box_footer}>                
                <Row>            
                    <Col xs={12}>
                        <h2 className={globalClasses.section_title_footer}>Contact Us</h2>                     
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <a href="mailto:rolistespod@gmail.com" className={classes.FooterLink}><span><FontAwesomeIcon icon={faEnvelope} aria-hidden="true"/></span></a>
                    </Col>                          
                </Row>           
            </div>                    
        </Fragment>
    )
}

export default Contact;