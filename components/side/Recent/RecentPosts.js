
import { Fragment } from 'react';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './RecentPosts.module.css';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const RecentPosts = (props) => {
    
    // let recentPosts = <Spinner/>
    const relatedPosts = props.recentPosts;

    const recentPosts = relatedPosts.map (post => {
        return <Col xs={12} className={classes.cell} key={post["id"]}>
            <div className={classes.post_recent}>
                <aside className={[classes.aside, classes.aside_1].join(' ')}>
                    <Link href={post.url}>
                        <div className={"img_color_animate"}>  
                            <img src={post.cover} alt="Episode Cover" className={classes.recent_img}/>              
                        </div>
                    </Link> 
                </aside>
                <aside className={[classes.aside, classes.aside_2].join(' ')}>
                    <Link href={post.url}>
                        <div className={["date_article", classes.date_recent].join(' ')}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {post["pubDate"][0]}</div>
                        <h3 className={["section_title", "section_title_side", "section_title_Reco"].join(' ')}>{post["title"]}</h3>      
                    </Link>  
                </aside>                  
            </div>
        </Col>;
    });
       
    return (
        <Fragment>
            <div className={"item_box_right"}>
                <h2 className={"section_title"}>Recent</h2>
                <Row>
                    {recentPosts}
                </Row>         
            </div>
        </Fragment>
    )
}

export default RecentPosts;