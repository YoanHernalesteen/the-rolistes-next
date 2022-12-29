import { Fragment } from 'react';
import classes from '../Footer.module.css';
import { Row, Col } from 'react-bootstrap';
import appleButton from '../../../assets/images/Buttons_Apple_BnW.png';
import spotifyButton from '../../../assets/images/Buttons_Spotify_BnW.png';
import stitcherButton from '../../../assets/images/Buttons_Stitcher_BnW.png';
import podchaserButton from '../../../assets/images/Buttons_Podchaser_BnW.png';
import RSSButton from '../../../assets/images/Buttons_RSS_BnW.png';
import globalClasses from '../../../App.module.css';


const Listen = (props) => {

    

    return (
        <Fragment>   
            <div className={globalClasses.item_box_footer}>                
                <Row>            
                    <Col xs={12}>
                        <h2 className={globalClasses.section_title_footer}>Listen</h2>                     
                    </Col>
                </Row>
                <Row>                        
                    <Col xs={6} md={true}>
                        <a href="https://podcasts.apple.com/us/podcast/the-rolistes-podcast/id1043891191" className={classes.supportLink}><img src={appleButton}  alt="Donate with Paypal" aria-hidden="true"/></a>
                    </Col>

                    <Col xs={6} md={true}>
                        <a href="https://open.spotify.com/show/6WC5wywaLMEhnO7JWIuxom?si=f8oaIyG1QU2cgrBeDlLP5A"  className={classes.supportLink}><img src={spotifyButton}  alt="Support on ItchIo" aria-hidden="true"/></a>
                    </Col>

                    <Col xs={6} md={true}>
                        <a href="http://www.stitcher.com/podcast/the-rolistes-podcast" className={classes.supportLink}><img src={stitcherButton}  alt="Donate with Paypal" aria-hidden="true"/></a>
                    </Col>

                    <Col xs={6} md={true}>
                        <a href="https://www.podchaser.com/podcasts/the-rolistes-podcast-425798" className={classes.supportLink}><img src={podchaserButton} alt="Support me on Patreon" aria-hidden="true"/></a>
                    </Col >

                    <Col xs={6} md={true}>
                        <a href="http://feeds.feedburner.com/TheRolistesPodcast" className={classes.supportLink}><img src={RSSButton} alt="Support me on Patreon" aria-hidden="true"/></a>
                    </Col>
                </Row>   
            </div>                    
        </Fragment>
    )
}

export default Listen;