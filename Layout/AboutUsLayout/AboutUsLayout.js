import { Fragment } from 'react';
import Posts from '../../../containers/Posts/Posts';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../../components/Footer/Footer';
import globalClasses from '../../../styles/styles.css';
import { Helmet } from 'react-helmet';

const AboutUsLayout = (props) => (
    <Fragment>
        <Helmet>
            <title>The Rolistes Podcast - About Us</title>
            <meta name="description" content=""/>
        </Helmet>
        <Container>
            <Row>                                           
                <Col xs={12} className={[globalClasses.no_padding_right,globalClasses.no_padding_smallscreen].join(' ')} >                    
                    
                    <Posts 
                        {...props} 
                        type="ABOUT"/>  

                <div className={globalClasses.item_box_left} >               
                    <h1 className={[globalClasses.section_title, globalClasses.section_title_article].join(' ')}>The Team</h1>                 
                    <Posts 
                        {...props} 
                        type="THETEAM"/>  
                </div>
                </Col>
            </Row>
        </Container>
        <Footer/>        
    </Fragment>
)

export default AboutUsLayout;