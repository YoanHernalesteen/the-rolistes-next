import React, { Fragment } from 'react';
import Footer from '../../../components/Footer/Footer';
import { Container } from 'react-bootstrap';
import Posts from '../../../containers/Posts/Posts';
import { Helmet } from 'react-helmet';

const HomeLayout = (props) => (
    <Fragment>
        <Helmet>
            <title>The Rolistes Podcast - Home</title>
            <meta name="description" content=""/>
        </Helmet>
        <Container>  
            <Posts {...props} type="LATEST" />                
        </Container>        
        <Footer/>        
    </Fragment>
)

export default HomeLayout;