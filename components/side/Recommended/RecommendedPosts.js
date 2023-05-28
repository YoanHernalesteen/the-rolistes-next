
import { Fragment } from 'react';
import Spinner from '../../UI/Spinner/Spinner';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import classes from './RecommendedPosts.module.css';

const RecommendedPosts = (props) => {
    
    // let recommendedPosts = <Spinner/>
    const relatedPosts = props.recommendedPosts;

    const recommendedPosts = relatedPosts.map (post => {
        return <Col xs={6} md={6} lg={6} className={classes.cell} key={post["id"]}>
            <Link href={post.url}>
                <div className={"img_color_animate"}>  
                    <img src={post.cover} alt="Cover Episode"/>
                </div>  
            </Link>
            <Link href={post.url}>
                <h3 className={["section_title", "section_title_side", "section_title_Reco"].join(' ')}>{post["title"]}</h3>    
            </Link>
        </Col>;   
    });    
    
    return (
        <Fragment>
            <div className={"item_box_right"}>
                <h2 className={"section_title"}>Recommended</h2>
                <Row>
                    {recommendedPosts}
                </Row>         
            </div>
        </Fragment>
    )
}

export default RecommendedPosts;