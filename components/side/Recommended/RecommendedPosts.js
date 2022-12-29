
import { Fragment } from 'react';
import globalClasses from '../../../styles/styles.css';
import Spinner from '../../UI/Spinner/Spinner';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './RecommendedPosts.module.css';

const RecommendedPosts = (props) => {
    
    let recommendedPosts = <Spinner/>
    const relatedPosts = props.recommendedPosts;

    recommendedPosts = relatedPosts.map (post => {
        return <Col xs={6} md={6} lg={6} className={classes.cell} key={post["id"]}>
            <Link to={post.url}>
                <div className={globalClasses.img_color_animate}>  
                    <img src={post.cover} alt="Cover Episode"/>
                </div>  
            </Link>
            <Link to={post.url}>
                <h3 className={[globalClasses.section_title, globalClasses.section_title_side, globalClasses.section_title_Reco].join(' ')}>{post["title"]}</h3>    
            </Link>
        </Col>;   
    });    
    
    return (
        <Fragment>
            <div className={globalClasses.item_box_right}>
                <h2 className={globalClasses.section_title}>Recommended</h2>
                <Row>
                    {recommendedPosts}
                </Row>         
            </div>
        </Fragment>
    )
}

export default RecommendedPosts;