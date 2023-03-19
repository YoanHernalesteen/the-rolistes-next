import { Col } from 'react-bootstrap';
import Link from 'next/link';
import classes from './Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import globalClasses from '../../styles/App.module.css';

const Post = (props) => {    

    return (
        
        <Col xs={12} className={"article_preview"}>
            <Link href={props.url}>
                <div className={"img_scale_animate"}>
                    <img src={props.cover + '?w=2237&h=1173&crop=1'} alt=""/>
                </div>          
            </Link>   
            <Link href={props.url}>
                <h2 className={classes.title_news}>{props.title}</h2>            
                {/* <p className={globalClasses.author}>{props.author}</p> */}
                <p className={globalClasses.date}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {props.date}</p>            
                {/* <div className={classes.mainArticle} dangerouslySetInnerHTML={{ __html: props.article }} /> */}           
                <p>{props.excerpt}... <span className={"continue_reading"}>Continue reading</span></p>
            </Link>
                <span className={classes.end_article}/>
        </Col>
    );
}

export default Post;
