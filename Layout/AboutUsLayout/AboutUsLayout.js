import { Fragment } from 'react';
import Posts from '../../containers/Posts/Posts';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Head from 'next/head';

const AboutUsLayout = (props) => (
    <Fragment>
        <Head>
            <title>The Rolistes Podcast - About Us</title>
            <meta name="description" content=""/>
        </Head>
        <Container>
            <Row>                                           
                <Col xs={12} className={["no_padding_right","no_padding_smallscreen"].join(' ')} >                    
                    
                    {/* <Posts 
                        {...props} 
                        type="ABOUT"/>   */}

                <div className={"item_box_left"} >               
                    <h1 className={["section_title", "section_title_article"].join(' ')}>The Team</h1>                 
                    {/* <Posts 
                        {...props} 
                        type="THETEAM"/>   */}
                </div>
                </Col>
            </Row>
        </Container>
        <Footer/>        
    </Fragment>
)

export default AboutUsLayout;