
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import classes from './ComingSoon.module.css';


const ComingSoon = (props) => (
    <Fragment>
    
        <div className={["item_box", classes.item_box_comingsoon].join(' ')}>
            <Row>
                <Col xs={12}>
                    <h2>Coming Soon - {props.latestComingSoon["title"]}</h2>
                    <Row>
                        <Col>
                            <br/>
                            <div dangerouslySetInnerHTML={{ __html: props.latestComingSoon["content:encoded"][0] }}/>
                        </Col>
                    </Row>    
                </Col> 

            </Row>
                
        </div>     
                
    </Fragment>
)

export default ComingSoon;