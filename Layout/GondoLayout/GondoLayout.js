import React, { Fragment, useEffect } from 'react';
import Posts from '../../containers/Posts/Posts';
import classes from './GondoLayout.module.css';
import PaginationList from '../../components/UI/PaginationList/PaginationList';
import { Col, Container, Row } from 'react-bootstrap';
import Follow from '../../components/side/Follow/Follow';
import Ads from '../../components/UI/Ads/Ads';
import Support from '../../components/side/Support/Support';
import Footer from '../../components/Footer/Footer';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Subscribe from '../../components/side/Subscribe/Subscribe';
import Head from 'next/head';
import globalClasses from '../../styles/App.module.css';


const NewsLayout = (props) => 
{    
    useEffect(() => {
        window.scrollTo(0, 0);
      },)

    const postPerPage = 10;
    const indexOfLastPost = props.currentPageNews * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;    

    const paginate = (pageNumber) => props.onSetCurrentPageNews(pageNumber);    

    return (
        <Fragment>
            <Head>
                <title>The Rolistes Podcast - Paris Gondo</title>
                <meta name="description" content=""/>
            </Head>
            <Container>
                <Ads/>
                <Row>                                           
                    <Col lg={8} xs={12} className={["no_padding_right","no_padding_smallscreen"].join(' ')} >                    
                        <Posts 
                            {...props} 
                            type="INTROGONDO"/>
                        {/* crash comes from here */}
                        {/* <div className={classes.item_box_left_gondo}>
                            <iframe className={classes.gondo_ads} frameBorder="0" src="https://itch.io/embed/1185131?border_width=0&amp;border_color=ffffff" width="206" height="165"><a href="https://rolistespod.itch.io/paris-gondo%22%3EParis Gondo - The Life-Saving Magic of Inventorying by Kalum from The Rolistes Podcast"></a></iframe>                       
                        </div>                           */}
                        
                        <div className={"item_box_left"}>
                            <h2 className={"section_title"}>Latest Paris Gondo News</h2>
                            <Posts 
                                {...props} 
                                type="GONDO"
                                indexOfFirstPost={indexOfFirstPost} 
                                indexOfLastPost={indexOfLastPost}/>
                            <PaginationList 
                                totalRecords={props.gondo.length} 
                                pageLimit={postPerPage} 
                                clicked={paginate}
                                currentPage={props.currentPageNews}/>

                        </div>  
                    </Col>
                   
                    <Col  lg={4} xs={12}>
                        <Row>  
                            <Col xs={12} className={globalClasses.no_padding_smallscreen}>
                                <Follow /> 
                            </Col>                  
                            <Col xs={12} className={globalClasses.no_padding_smallscreen}>
                                <Support />
                            </Col>                                         
                            {/* <Col xs={12} className={globalClasses.no_padding_smallscreen}>
                                <Subscribe />
                            </Col>      */}
                        </Row>    
                    </Col>
                </Row>
                
            </Container>  
            <Footer/>           
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        currentPageNews: state.posts.currentPageNews
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentPageNews: (pageNumber) => dispatch (actions.setCurrentPageNews(pageNumber))
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(NewsLayout);
