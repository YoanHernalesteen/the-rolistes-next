
import { Fragment } from 'react';
import classes from './TeamPost.module.css';
import globalClasses from '../../styles/App.module.css';
import { Col, Row } from 'react-bootstrap';

const TeamPost = (props) => {

    return (
        
        <Fragment> 
            <h2 className={[globalClasses.section_title, globalClasses.section_title_article, classes.teamPost_title].join(' ')}>{props.title}</h2>  
            <Row>
                <Col xs={12} md={4}>
                    <img src={props.cover} alt=""/>
                </Col>
                <Col xs={12} md={8}>                        
                    <div dangerouslySetInnerHTML={{ __html: props.content }} className={classes.teamPost}/>  
                </Col>
            </Row>                                                     
        </Fragment>
    );
}

export default TeamPost;
