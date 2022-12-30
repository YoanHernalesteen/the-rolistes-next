import * as actionTypes from './actionTypes';
import axios from 'axios';
// import xmlData from '../../assets/therolistespodcast.xml';

const missingIMG = "/images/Logo_Nav_Missing.jpg";
const xmlData = "/therolistespodcast.xml";

export const fetchPostsStart = () => {
    return {
        type: actionTypes.FETCH_POSTS_START,
    }
};

export const fetchPostsSuccess = (posts, news, podcast, gondo, introGondo, comingSoon, about, theTeam) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts,
        news: news,
        podcast: podcast,
        gondo: gondo,
        introGondo: introGondo,
        comingSoon: comingSoon,
        about: about,
        theTeam: theTeam,
        loaded: true
    }
};

export const fetchPostsFailed = (error) => {
    return {
        type: actionTypes.FETCH_POSTS_FAILED,
        error: error
    }
};

export const setCurrentPageNews = (pageNumber) => {
    return {
        type: actionTypes.SET_CURRENT_PAGE_NEWS,
        currentPageNews: pageNumber
    
    }
}

export const setCurrentPagePodcast = (pageNumber) => {
    return {
        type: actionTypes.SET_CURRENT_PAGE_PODCAST,
        currentPagePodcast: pageNumber    
    }
}

export const setCurrentCategoryPodcast = (category) => {
    return {
        type: actionTypes.SET_CURRENT_CATEGORY_PODCAST,
        currentCategoryPodcast: category
    }
}

export const setCurrentCategorySize = (size) => {
    return {
        type: actionTypes.SET_CURRENT_CATEGORY_SIZE,
        currentCategorySize: size    
    }
}

const getAttachmentURL = (attachments, postMeta) => {
    
    let attachmentId = 0;
    let imgLink = "";
    let startIndex = 0;
    let endIndexJPG = 0;
    let endIndexPNG = 0;
    
    for (let metaKey in postMeta["wp:postmeta"]){

        if(postMeta["wp:postmeta"][metaKey]["wp:meta_key"][0]==="_thumbnail_id"){
            attachmentId = postMeta["wp:postmeta"][metaKey]["wp:meta_value"][0];

        }
    }   
    
    for(let key in attachments){

        if(attachments[key]["wp:post_id"][0] == attachmentId){    
               
            if(attachments[key]["guid"][0]["_"]){                                                                  
                return attachments[key]["guid"][0]["_"];  
            }
                      
        }
    }

    // console.log(postMeta);
    // console.log(postMeta);    
    // console.log(attachments);
    // console.log(postMeta["content:encoded"][0]);


    // imgLink = postMeta["content:encoded"][0];

    // if(imgLink.indexOf('</figure>')>0){
    //     imgLink = imgLink.substring(0,imgLink.indexOf('</figure>'));
    
    //     startIndex = imgLink.indexOf("<a href=")+ 9;
    //     endIndexJPG = imgLink.indexOf(".jpg") + 4;
    //     endIndexPNG = imgLink.indexOf(".png") + 4;
    //     // console.log (imgLink);
        
    //     // console.log(startIndex);

    //     if (endIndexJPG > 4){
    //         imgLink = imgLink.substring(
    //             startIndex, 
    //             endIndexJPG
    //         );

    //         // console.log( endIndexJPG );

    //         return imgLink;
    //     }else{
    //         if( endIndexPNG > 4){
    //             imgLink = imgLink.substring(
    //                 startIndex, 
    //                 endIndexPNG
    //             );
    //             // console.log( endIndexPNG );
    //             return imgLink;
    //         }       
    //     }        
    // } 
 
    return missingIMG;    
}

const getURL = (post, category) => {
    
    const tempDate = new Date(post["pubDate"][0]); 
    const year = tempDate.getFullYear();
    const month = tempDate.getMonth()+1;
    const day = tempDate.getDate();
    const postName = post["wp:post_name"][0];

    switch(category){

        case "news": 
            return '/news/' + postName;            

        case "podcast":                     
            return '/' + year + '/' + month + '/' + day + '/' + postName;        
    }
     return "";
}

const replaceOldURL = (post) => {
    
    const baseURL='href="';

    let str= post;
    let newStr= str.replace(/\[audio/,'<audio controls');
    newStr= newStr.replace(/mp3\"\]/,'mp3"></audio><br>');    
    newStr = newStr.replaceAll('<a href="https://rolistespod.com', '<a '+ baseURL);
    newStr = newStr.replaceAll('<a href="https://rolistespod.com/category/film-studies/', '<a '+ baseURL + '/podcast?cat=film-studies"');
    newStr = newStr.replaceAll('<a href="https://rolistespod.com/category/the-rolistes-present/', '<a '+ baseURL + '/podcast?cat=the-rolistes-present"');
    newStr = newStr.replaceAll('<a href="https://rolistespod.com/category/cafe-rolistes/', '<a '+ baseURL + '/podcast?cat=cafe-rolistes');
    newStr = newStr.replaceAll('<a href="https://rolistespod.com/category/the-rolistes-podcast/', '<a '+ baseURL + '/podcast?cat=the-rolistes-podcast"');
    newStr = newStr.replaceAll('<a href="https://rolistespod.com/category/podcast/', '<a '+ baseURL + '/podcas?cat=all"');
    newStr = newStr.replaceAll('<a href="https://rolistespod.com/category/news/', '<a '+ baseURL + '/news"');
    newStr = newStr.replaceAll('<a href="https://rolistespod.com/category/paris_gondo/', '<a '+ baseURL + '/paris_gondo"');

    return newStr;                        
}

const getExcerpt = (content, wordLimit) => {
     
    let filter = content.replace( /(<([^>]+)>)/ig, '');
    filter = filter.replace(/\s+/g, ' ');
    const wordsarr = filter.split(' ');

    if(wordsarr.length < wordLimit) {
        return content;
    }

    else {
        let excerpt = "";

        for (let i = 0; i < wordLimit; i++) {
            excerpt = excerpt + " " + wordsarr[i] + " ";
        }

        return excerpt;
    }     
}

export const fetchPosts = () => {

    return dispatch => {
        dispatch(fetchPostsStart());
          
        
        axios.get(xmlData, {
            "Content-Type": "application/xml; charset=utf-8"
            })
        .then((response) => {
                
            let xml2js = require('xml2js');
            let parser = new xml2js.Parser();
            
            const fetchedPosts = [];
            const fetchedAttachment = [];
            const fetchedNews = [];
            const fetchedPodcast = [];
            const fetchedGondo = [];
            const fetchedIntroGondo = [];
            const fetchedAbout = [];
            const fetchedTheTeam = [];
            const fetchedComingSoon = [];

            parser.parseString(
                response.data,
                (err,result) => {

                    for (let key in result["rss"]["channel"][0]["item"]) {

                        if(result["rss"]["channel"][0]["item"][key]["wp:post_type"][0]==='attachment'){
                            fetchedAttachment.push({
                                ...result["rss"]["channel"][0]["item"][key],
                                id:key
                            });
                        }
                        else{
                            fetchedPosts.push({
                                ...result["rss"]["channel"][0]["item"][key],
                                id:key
                            });
                        }
                    }

                    for (let key in fetchedPosts) {                                                                           
         
                        const currentDate = new Date();
                        const publishDate = new Date(fetchedPosts[key]["pubDate"][0]);                       

                        fetchedPosts[key]["pubDate"][0] = publishDate.toDateString();;
                       
                        const newStr = replaceOldURL(fetchedPosts[key]["content:encoded"][0]);
                        fetchedPosts[key]["content:encoded"][0] = newStr;                        
                        
                        if(fetchedPosts[key]["category"] && (
                            fetchedPosts[key]["wp:status"][0] === "publish" || (
                                fetchedPosts[key]["wp:status"][0] === "future" && currentDate.getTime() > publishDate.getTime()
                                )
                            )
                        ){           
                            const attachmentURL= getAttachmentURL(fetchedAttachment , fetchedPosts[key]);
                            
                            for (let i=0; i < fetchedPosts[key]["category"].length; i++) {
                                
                                switch(fetchedPosts[key]["category"][i]["$"]["nicename"]){

                                    case "news": 
                                        const excerptNews= getExcerpt(fetchedPosts[key]["content:encoded"][0], 40);
                                        const newsURL= getURL(fetchedPosts[key], "news");
                                        fetchedNews.push({
                                        ...fetchedPosts[key],
                                        cover: attachmentURL,
                                        url: newsURL,                                        
                                        excerpt: excerptNews,
                                        id:key                                                
                                        });                          
                                        
                                        break;

                                    case "podcast": 
                                        const podcastURL= getURL(fetchedPosts[key],"podcast");
                                        fetchedPodcast.push({
                                        ...fetchedPosts[key],
                                        cover: attachmentURL,
                                        url: podcastURL,
                                        id:key                                                
                                        });
                                        break;

                                    case "paris-gondo": 
                                        const excerptGondo= getExcerpt(fetchedPosts[key]["content:encoded"][0], 40);
                                        const gondoURL= getURL(fetchedPosts[key], "news");
                                        fetchedGondo.push({
                                        ...fetchedPosts[key],
                                        cover: attachmentURL,
                                        url: gondoURL,
                                        excerpt: excerptGondo,
                                        id:key                                                
                                        });
                                        break;

                                    case "coming-soon": 
                                        fetchedComingSoon.push({
                                        ...fetchedPosts[key],
                                        id:key                                                
                                        });
                                        break;
                                }
                            }                                    
                        }
                        else if(fetchedPosts[key]["category"] && fetchedPosts[key]["wp:status"][0] === "private")
                        {

                            for (let i=0; i < fetchedPosts[key]["category"].length; i++) {
                                
                                switch(fetchedPosts[key]["category"][i]["$"]["nicename"]){

                                    case "paris-gondo-introduction": 
                                        fetchedIntroGondo.push({
                                        ...fetchedPosts[key],
                                        id:key                                                
                                        });
                                        break;

                                    case "about": 
                                        fetchedAbout.push({
                                        ...fetchedPosts[key],
                                        id:key                                                
                                        });
                                        break;

                                    case "the-team": 
                                        const attachmentURL= getAttachmentURL(fetchedAttachment , fetchedPosts[key]);
                                       
                                        fetchedTheTeam.push({
                                        ...fetchedPosts[key],
                                        cover: attachmentURL,
                                        id:key                                                
                                        });
                                        break;                                    
                                }
                            }
                        }                            
                    }
                
                    fetchedPodcast.sort((a,b)=>{
                        return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]) 
                    });

                    fetchedNews.sort((a,b)=>{
                        return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]) 
                    });

                    fetchedGondo.sort((a,b)=>{
                        return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]) 
                    });

                    fetchedIntroGondo.sort((a,b)=>{
                        return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]) 
                    });

                    fetchedComingSoon.sort((a,b)=>{
                        return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]) 
                    });
                   
                }
            )
            
            dispatch(fetchPostsSuccess(fetchedPosts, fetchedNews, fetchedPodcast, fetchedGondo, fetchedIntroGondo, fetchedComingSoon, fetchedAbout, fetchedTheTeam));    
        })
        .catch(error => {
            console.log(error);
            dispatch(fetchPostsFailed(error));
        });        
        
       
    }
}    