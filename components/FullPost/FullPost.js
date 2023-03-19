
import { Fragment } from 'react';
import classes from './FullPost.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

import globalClasses from '../../styles/App.module.css';

const FullPost = (props) => {

    const createYoutubeEmbed = (key) => {
        return '<iframe  src="https://www.youtube.com/embed/' + key + '" frameBorder="0" allowfullscreen></iframe><br/>';
       
    };
      
    const transformYoutubeLinks = (text) => {
        if (!text) return text;
        
        const linkreg = /(?:)<a([^>]+)>(.+?)<\/a>/g;
        const fullreg = /(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([^& \n<]+)(?:[^ \n<]+)?/g;
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^& \n<]+)(?:[^ \n<]+)?/g;
        
        let resultHtml = text;  
        
        // get all the matches for youtube links using the first regex
        const match = text.match(fullreg);
        if (match && match.length > 0) {
            // get all links and put in placeholders
            const matchlinks = text.match(linkreg);
            if (matchlinks && matchlinks.length > 0) {
                for (var i=0; i < matchlinks.length; i++) {
                    resultHtml = resultHtml.replace(matchlinks[i], "#placeholder" + i + "#");
                }
            }
        
            // now go through the matches one by one
            for (var j=0; j < match.length; j++) {
                // get the key out of the match using the second regex
                let matchParts = match[j].split(regex);
                // replace the full match with the embedded youtube code
                resultHtml = resultHtml.replace(match[j], createYoutubeEmbed(matchParts[1]));
            }
        
            // ok now put our links back where the placeholders were.
            if (matchlinks && matchlinks.length > 0) {
                for (var k=0; k < matchlinks.length; k++) {
                    resultHtml = resultHtml.replace("#placeholder" + k + "#", matchlinks[k]);
                }
            }
        }
        return resultHtml;
    };

    const htmlContent = transformYoutubeLinks(props.content);

    let classIMG = [classes.fullPost,classes.fullPostNotPodcast].join(' ');

    if(props.type==="PODCAST"){
        classIMG = [classes.fullPost,classes.fullPostPodcast].join(' ');
    }

    return (
        
        <Fragment>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content=""/>
            </Head>
            <div className={globalClasses.item_box_left} >               
                <h1 className={[globalClasses.section_title, globalClasses.section_title_article].join(' ')}>{props.title}</h1>                    

                {props.type==="INTROGONDO" ? <p/> : <div className={globalClasses.date_article}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {props.date}</div>}
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} className={classIMG}/>     
            </div>                                   
        </Fragment>
    );
}

export default FullPost;
