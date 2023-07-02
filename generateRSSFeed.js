
const fs = require ('fs');
var axios = require('axios');
// const xmlData = require('./src/assets/therolistespodcast.xml');

const toRssXML = (posts) => {  

    const latestPostDate = posts[0]["pubDate"]; 
    let postXml = "";

    posts.forEach((post) => {

        // const href = `https://www.slashproto.com/posts/${post.slug}`;
        // const href = `https://www.slashproto.com/posts/`;

        let postCategories = "";
        
        post.categories.forEach((category)=>{
            postCategories += `
            <category><![CDATA[${category["_"]}]]></category>`;
        });

        postXml += `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${post.link}</link>
            <pubDate>${post.pubDate}</pubDate>${postCategories}
            <guid>${post.link}</guid>
            <description>
            <![CDATA[ ${post.description} ]]>
            </description>

            <enclosure url="${post.enclosure}" length="0" type="audio/mpeg" />`+

            // <itunes:author>${post.itunesAuthor}</itunes:author>
            // <itunes:explicit>no</itunes:explicit>
            // <itunes:image href="${post.itunesImage}" />
            // <itunes:summary>${post.itunesSummary}</itunes:summary>
            // <itunes:subtitle>${post.itunesSubtitle}</itunes:subtitle>

		    `<media:thumbnail url="${post.mediaThumbnail}" />
		        <media:content url="${post.mediaThumbnailContent}" medium="image">
			<media:title type="html">${post.mediaThumbnailTitle}</media:title>
		    </media:content>

		    <media:content url="${post.mediaAuthorContent}" medium="image">
			    <media:title type="html">${post.mediaAuthorTitle}</media:title>
		    </media:content>

		<media:content url="${post.mediaAudioContent}" medium="audio" />

        </item>`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
	xmlns:georss="http://www.georss.org/georss" xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#" 
	xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
    xmlns:media="http://search.yahoo.com/mrss/"
    >
    
        <channel>
            <title>The Rolistes Podcast</title>
            <atom:link href="https://rolistespod.com/" rel="self" type="application/rss+xml" />
            <link>https://rolistespod.com/</link>
            <description>Welcome among The Rolistes…

We are the proudly London-based producers of Tabletop RPG podcasts showcasing fans across the Channel, the Pond and beyond.

We cross borders, languages, fandoms, game systems and settings with unique discoveries in each episode. 

Join us for a mix of discussions, RPG actual plays, travel-diaries, vox-populi, movie reviews, and even music by amazing Creative Commons artists. 

Meet independent game designers, popular British publishers, immigrants, travellers visiting London or other random encounters made during our travels.

Our content is for YOU, no matter if you are a seasoned grognard or wannabe players who are about to take their first steps in The Hobby. 

We are for those curious about what and how tabletop roleplaying games are played across the World, how players can have wildly different walks of life and interests can be.</description>
            <lastBuildDate>${latestPostDate}</lastBuildDate>            
            <language>en</language>
            <sy:updatePeriod>
	        hourly	</sy:updatePeriod>
	        <sy:updateFrequency>
            1	</sy:updateFrequency>`+
//             <itunes:subtitle>Your London-based tabletop RPG shows!</itunes:subtitle>
// <itunes:summary>Welcome among The Rolistes…

// We are the proudly London-based producers of Tabletop RPG podcasts showcasing fans across the Channel, the Pond and beyond.

// We cross borders, languages, fandoms, game systems and settings with unique discoveries in each episode. 

// Join us for a mix of discussions, RPG actual plays, travel-diaries, vox-populi, movie reviews, and even music by amazing Creative Commons artists. 

// Meet independent game designers, popular British publishers, immigrants, travellers visiting London or other random encounters made during our travels.

// Our content is for YOU, no matter if you are a seasoned grognard or wannabe players who are about to take their first steps in The Hobby. 

// We are for those curious about what and how tabletop roleplaying games are played across the World, how players can have wildly different walks of life and interests can be.</itunes:summary>
// <itunes:author>Kalum</itunes:author>
// <itunes:owner><itunes:email>rolistespod@gmail.com</itunes:email>
// </itunes:owner><copyright>The Rolistes Podcast by Kalum is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.</copyright>
// <itunes:explicit>no</itunes:explicit>
// <itunes:image href='https://rolistespod.files.wordpress.com/2019/12/cropped-the-rolistes_logo-2019_v1_logo-only_cropped85-e1573424020821.jpg?fit=3000%2C3000' />
// <itunes:category text='Leisure'>
// 	<itunes:category text='Games' />
// </itunes:category>
// <itunes:category text='Leisure'>
// 	<itunes:category text='Hobbies' />
// </itunes:category>
// <itunes:category text='Society &amp; Culture'>
// 	<itunes:category text='Places &amp; Travel' />
// </itunes:category>        
            `${postXml}
        </channel>
    </rss>`;
}

const getAttachment = (attachments, postMeta) => {
    
    let attachmentId = 0;
    
    for (let metaKey in postMeta["wp:postmeta"]){

        if(postMeta["wp:postmeta"][metaKey]["wp:meta_key"][0]==="_thumbnail_id"){
            attachmentId = postMeta["wp:postmeta"][metaKey]["wp:meta_value"][0];
        }
    }

    for(let key in attachments){

        if(attachments[key]["wp:post_id"][0] == attachmentId){       

            return attachments[key];
        }
    }

    return "";
}


const getEnclosureURL = (postMeta) => {
    
    for (let metaKey in postMeta["wp:postmeta"]){

        if(postMeta["wp:postmeta"][metaKey]["wp:meta_key"][0]==="enclosure"){
            
            let url = postMeta["wp:postmeta"][metaKey]["wp:meta_value"][0];
            url= url.substring(0, url.lastIndexOf('.mp3') + 4);
            return url;
        }
    }

    return "";
}

const cleanDescription = (content, link, title) => {
    
    let filter= content.replace(/\[audio/,'<audio controls');
    filter= filter.replace(/mp3\"\]/,'mp3"></audio><br>');
    
    filter = filter.replace( /(<([^>]+)>)/ig, '');
    filter = filter.replace(/\s+/g, ' ');
    const wordsarr = filter.split(' ');
    const wordLimit = 60;

    if(wordsarr.length < wordLimit) {
        return content;
    }

    else {
        let excerpt = "";

        for (let i = 0; i < wordLimit; i++) {
            excerpt = excerpt + " " + wordsarr[i];            
        }
        excerpt = excerpt + '... <a href='+link+' class="more-link">Continue reading <span class="screen-reader-text">'+title+'</span></a>';

        return excerpt;
    }        
}

const getPosts = () => {    
    
    const fetchedPodcast = [];
    
    fs.readFile('./src/assets/therolistespodcast.xml', function(err, data){
        let xml2js = require('xml2js');
        let parser = new xml2js.Parser();            

        parser.parseString(
            data,
            (err,result) => {

                const fetchedAttachment = [];
                const limitAmountPost = 150;

                for (let key in result["rss"]["channel"][0]["item"]) {

                    if(result["rss"]["channel"][0]["item"][key]["wp:post_type"][0]==='attachment'){
                        fetchedAttachment.push({
                            ...result["rss"]["channel"][0]["item"][key],
                            id:key
                        });
                    }
                }

                for (let key in result["rss"]["channel"][0]["item"]) {        
                    
                    const fetchedPost = result["rss"]["channel"][0]["item"][key];
                    const currentDate = new Date();
                    const publishDate = new Date(fetchedPost["pubDate"][0]);  

                    if(fetchedPost["category"] && (
                        fetchedPost["wp:status"][0] === "publish" || (
                            fetchedPost["wp:status"][0] === "future" && currentDate.getTime() > publishDate.getTime()
                            )
                        )
                    ){

                        for (let i=0; i < fetchedPost["category"].length; i++) {

                            switch(fetchedPost["category"][i]["$"]["nicename"]){
    
                                case "podcast": 
                                    const attachment= getAttachment(fetchedAttachment , fetchedPost);                                  
                                    const title = fetchedPost["title"];
                                    const tempDate = new Date(fetchedPost["pubDate"][0]); 
                                    const year = tempDate.getFullYear();
                                    const month = tempDate.getMonth()+1;
                                    const day = tempDate.getDate()
                                    const link = 'https://rolistespod.com/' + year + '/' + month + '/' + day + '/'  + fetchedPost["wp:post_name"][0];
                                    const pubDate = fetchedPost["pubDate"][0];
                                    const categories = fetchedPost["category"];
                                    const guid = link;
                                    
                                    const description = cleanDescription(fetchedPost["content:encoded"][0], link, title);

                                    const enclosure = getEnclosureURL(fetchedPost);
                                    // const itunesAuthor = fetchedPost["dc:creator"];   
                                    // const itunesImage = 'test';
                                    // const itunesSummary = 'test';   
                                    // const itunesSubtitle = 'test';
                                    const mediaThumbnail = attachment["guid"][0]["_"];   
                                    const mediaThumbnailContent = attachment["guid"][0]["_"];
                                    const mediaThumbnailTitle = attachment["wp:post_name"][0];
                                    const mediaAuthorContent = "https://2.gravatar.com/avatar/e25822b2ed220131f32139e2f1797c71?s=96&#38;d=identicon&#38;r=G";
                                    const mediaAuthorTitle = fetchedPost["dc:creator"];
                                    const mediaAudioContent = enclosure;
    
                                    fetchedPodcast.push({
                                    title:title,
                                    link:link,
                                    pubDate: pubDate,
                                    categories: categories,
                                    guid:guid,                                    
                                    description:description,
                                    enclosure:enclosure,
                                    // itunesAuthor:itunesAuthor,
                                    // itunesImage:itunesImage,
                                    // itunesSummary:itunesSummary,
                                    // itunesSubtitle:itunesSubtitle,
                                    mediaThumbnail:mediaThumbnail,
                                    mediaThumbnailContent:mediaThumbnailContent,
                                    mediaThumbnailTitle:mediaThumbnailTitle,
                                    mediaAuthorContent:mediaAuthorContent,
                                    mediaAuthorTitle:mediaAuthorTitle,
                                    mediaAudioContent:mediaAudioContent,
                                    id:key                                                
                                    });
    
                                    break;
                            }
                        }                             
                    }                                                                                                                                        
                }

                fetchedPodcast.sort((a,b)=>{
                    return new Date(b.pubDate) - new Date(a.pubDate);
                });

                fetchedPodcast.splice(limitAmountPost);

                const xml = toRssXML(fetchedPodcast);
                fs.writeFileSync("./public/rss.xml", xml);                                                                            
            }
           
        )
    })  
 
}

const posts = getPosts(); 