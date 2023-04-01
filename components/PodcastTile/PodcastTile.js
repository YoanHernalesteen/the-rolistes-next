import { Fragment } from 'react';
import { Col } from 'react-bootstrap';
import Link from 'next/link';
import classes from './PodcastTile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import globalClasses from '../../styles/App.module.css';

const PodcastTile = (props) => { 

    return (
        <Fragment>
            <Col xs={12} md={6} lg={4} className={classes.cell} >
                {/* <Link href={props.location + '/'  + props.postName}> */}
                {/* <Link href={'/' + year + '/' + month + '/' + day + '/' + props.postName}>   */}
                <Link href={props.url}>
                    <img src={props.cover} alt="Cover Episode"/> 
                    {/* <img src={imgTest} alt=""/>  */}
                    <div className={classes.overlay}> 
                        <div className={classes.overlayText}>
                            <div className={globalClasses.date}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {props.date}</div>
                            
                            {/* <div dangerouslySetInnerHTML={{ __html: props.content }} /> */}                            
                            <h2>{props.title}</h2>
                        </div>
                    </div>
                    
                </Link>               
            </Col>
        </Fragment>
    )
}

export default PodcastTile;