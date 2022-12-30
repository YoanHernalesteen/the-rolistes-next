import { Fragment } from 'react';
import classes from './AboutPost.module.css';

const AboutPost = (props) => {

    return (
        
        <Fragment>
            <div className={"item_box_left"} >               
                <h1 className={["section_title", "section_title_article"].join(' ')}>{props.title}</h1>                    
                {/* <p>{props.author}</p> */}
                <div dangerouslySetInnerHTML={{ __html: props.content }} className={classes.aboutPost}/>     
            </div>                                   
        </Fragment>
    );
}

export default AboutPost;
