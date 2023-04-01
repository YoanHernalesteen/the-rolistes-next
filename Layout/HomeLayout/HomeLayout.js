import React, { Fragment } from 'react';
import Footer from '../../components/Footer/Footer';
import { Container } from 'react-bootstrap';
import Posts from '../../containers/Posts/Posts';
import Head from 'next/head';

const HomeLayout = (props) => (
    <Fragment>
        <Head>
            <title>The Rolistes Podcast - Home</title>
            <meta name="description" content=""/>
        </Head>
        <Container>  
            <Posts {...props} type="LATEST" />                
        </Container>        
        <Footer/>        
    </Fragment>
)

export default HomeLayout;