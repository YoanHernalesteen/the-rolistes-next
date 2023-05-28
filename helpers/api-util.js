const missingIMG = "/images/Logo_Nav_Missing.jpg";

const getAttachmentURL = (attachments, postMeta) => {
  let attachmentId = 0;

  for (let metaKey in postMeta["wp:postmeta"]) {
    if (
      postMeta["wp:postmeta"][metaKey]["wp:meta_key"][0] === "_thumbnail_id"
    ) {
      attachmentId = postMeta["wp:postmeta"][metaKey]["wp:meta_value"][0];
    }
  }

  for (let key in attachments) {
    if (attachments[key]["wp:post_id"][0] == attachmentId) {
      if (attachments[key]["guid"][0]["_"]) {
        return attachments[key]["guid"][0]["_"];
      }
    }
  }

  return missingIMG;
};

const getURL = (post, category) => {
  const tempDate = new Date(post["pubDate"][0]);
  const year = tempDate.getFullYear();
  const month = tempDate.getMonth() + 1;
  const day = tempDate.getDate();
  const postName = post["wp:post_name"][0];

  switch (category) {
    case "news":
      return "/news/" + postName;

    case "podcast":
      return "/" + year + "/" + month + "/" + day + "/" + postName;
  }
  return "";
};

const replaceOldURL = (post) => {
  const baseURL = 'href="';

  let str = post;
  let newStr = str.replace(/\[audio/, "<audio controls");
  newStr = newStr.replace(/mp3\"\]/, 'mp3"></audio><br>');
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com',
    "<a " + baseURL
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/film-studies/',
    "<a " + baseURL + '/podcast?cat=film-studies"'
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/the-rolistes-present/',
    "<a " + baseURL + '/podcast?cat=the-rolistes-present"'
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/cafe-rolistes/',
    "<a " + baseURL + "/podcast?cat=cafe-rolistes"
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/the-rolistes-podcast/',
    "<a " + baseURL + '/podcast?cat=the-rolistes-podcast"'
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/podcast/',
    "<a " + baseURL + '/podcas?cat=all"'
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/news/',
    "<a " + baseURL + '/news"'
  );
  newStr = newStr.replaceAll(
    '<a href="https://rolistespod.com/category/paris_gondo/',
    "<a " + baseURL + '/paris_gondo"'
  );

  return newStr;
};

const getExcerpt = (content, wordLimit) => {
  let filter = content.replace(/(<([^>]+)>)/gi, "");
  filter = filter.replace(/\s+/g, " ");
  const wordsarr = filter.split(" ");

  if (wordsarr.length < wordLimit) {
    return content;
  } else {
    let excerpt = "";

    for (let i = 0; i < wordLimit; i++) {
      excerpt = excerpt + " " + wordsarr[i] + " ";
    }

    return excerpt;
  }
};

export async function fetchPostsHelper(dataToProcess) {
  const fetchedPosts = [];
  const fetchedAttachment = [];
  const fetchedNews = [];
  const fetchedPodcast = [];
  const fetchedGondo = [];
  const fetchedIntroGondo = [];
  const fetchedAbout = [];
  const fetchedTheTeam = [];
  const fetchedComingSoon = [];

  const parseString = require("xml2js").parseString;
  const data = dataToProcess;

  parseString(data, (err, result) => {
    for (let key in result["rss"]["channel"][0]["item"]) {
      if (
        result["rss"]["channel"][0]["item"][key]["wp:post_type"][0] ===
        "attachment"
      ) {
        fetchedAttachment.push({
          ...result["rss"]["channel"][0]["item"][key],
          id: key,
        });
      } else {
        fetchedPosts.push({
          ...result["rss"]["channel"][0]["item"][key],
          id: key,
        });
      }
    }

    for (let key in fetchedPosts) {
      const currentDate = new Date();
      const publishDate = new Date(fetchedPosts[key]["pubDate"][0]);

      fetchedPosts[key]["pubDate"][0] = publishDate.toDateString();

      const newStr = replaceOldURL(fetchedPosts[key]["content:encoded"][0]);
      fetchedPosts[key]["content:encoded"][0] = newStr;

      if (
        fetchedPosts[key]["category"] &&
        (fetchedPosts[key]["wp:status"][0] === "publish" ||
          (fetchedPosts[key]["wp:status"][0] === "future" &&
            currentDate.getTime() > publishDate.getTime()))
      ) {
        const attachmentURL = getAttachmentURL(
          fetchedAttachment,
          fetchedPosts[key]
        );

        for (let i = 0; i < fetchedPosts[key]["category"].length; i++) {
          switch (fetchedPosts[key]["category"][i]["$"]["nicename"]) {
            case "news":
              const excerptNews = getExcerpt(
                fetchedPosts[key]["content:encoded"][0],
                40
              );
              const newsURL = getURL(fetchedPosts[key], "news");
              fetchedNews.push({
                ...fetchedPosts[key],
                cover: attachmentURL,
                url: newsURL,
                excerpt: excerptNews,
                id: key,
              });
              break;

            case "podcast":
              const podcastURL = getURL(fetchedPosts[key], "podcast");
              fetchedPodcast.push({
                ...fetchedPosts[key],
                cover: attachmentURL,
                url: podcastURL,
                id: key,
              });
              break;

            case "paris-gondo":
              const excerptGondo = getExcerpt(
                fetchedPosts[key]["content:encoded"][0],
                40
              );
              const gondoURL = getURL(fetchedPosts[key], "news");
              fetchedGondo.push({
                ...fetchedPosts[key],
                cover: attachmentURL,
                url: gondoURL,
                excerpt: excerptGondo,
                id: key,
              });
              break;

            case "coming-soon":
              fetchedComingSoon.push({
                ...fetchedPosts[key],
                id: key,
              });
              break;
          }
        }
      } else if (
        fetchedPosts[key]["category"] &&
        fetchedPosts[key]["wp:status"][0] === "private"
      ) {
        for (let i = 0; i < fetchedPosts[key]["category"].length; i++) {
          switch (fetchedPosts[key]["category"][i]["$"]["nicename"]) {
            case "paris-gondo-introduction":
              fetchedIntroGondo.push({
                ...fetchedPosts[key],
                id: key,
              });
              break;

            case "about":
              fetchedAbout.push({
                ...fetchedPosts[key],
                id: key,
              });
              break;

            case "the-team":
              const attachmentURL = getAttachmentURL(
                fetchedAttachment,
                fetchedPosts[key]
              );

              fetchedTheTeam.push({
                ...fetchedPosts[key],
                cover: attachmentURL,
                id: key,
              });
              break;
          }
        }
      }
    }

    fetchedPodcast.sort((a, b) => {
      return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]);
    });

    fetchedNews.sort((a, b) => {
      return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]);
    });

    fetchedGondo.sort((a, b) => {
      return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]);
    });

    fetchedIntroGondo.sort((a, b) => {
      return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]);
    });

    fetchedComingSoon.sort((a, b) => {
      return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]);
    });
  });

  return {
    posts: fetchedPosts,
    news: fetchedNews,
    podcast: fetchedPodcast,
    gondo: fetchedGondo,
    introGondo: fetchedIntroGondo,
    about: fetchedAbout,
    theTeam: fetchedTheTeam,
    comingSoon: fetchedComingSoon,
  };
}

export const searchPost = (posts, pageTitle) => {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i]["wp:post_name"][0] === pageTitle) {
      return i;
    }
  }
};

export async function searchLatest (posts, amountToReturn)  {
  const news = [];
  for (let i = 0; i < amountToReturn; i++) {
      news.push({
        ...posts[i],
        latest: i == 0 ? true : false,
        id: i,
      });
  }

  return news;
};

const searchPostBasedOnCategory = (posts, category) => {
  for (let i = 1; i < posts.length; i++) {
    for (let j = 0; j < posts[i]["category"].length; j++) {
      if (posts[i]["category"][j]["$"]["nicename"] === category) {
        return i;
      }
    }
  }
};

export async function searchPostsBasedOnCategory (posts, category) {
  const postsFromCategory = [];

  for (let i = 0; i < posts.length; i++) {
    for (let j = 0; j < posts[i]["category"].length; j++) {
      if (posts[i]["category"][j]["$"]["nicename"] === category) {
        postsFromCategory.push(posts[i]);
      }
    }
  }

  // sizePodcast = postsFromCategory.length;
  return postsFromCategory;
};

const getValueCategory = (relatedCategory) => {
  let valueCategory = 1;

  for (let i = 0; i < props.catValue0.length; i++) {
    if (props.catValue0[i] === relatedCategory) {
      valueCategory = 0;
      return valueCategory;
    }
  }

  for (let i = 0; i < props.catValue2.length; i++) {
    if (props.catValue2[i] === relatedCategory) {
      valueCategory = 2;
      return valueCategory;
    }
  }

  for (let i = 0; i < props.catValue3.length; i++) {
    if (props.catValue3[i] === relatedCategory) {
      valueCategory = 3;
      return valueCategory;
    }
  }

  for (let i = 0; i < props.catValue4.length; i++) {
    if (props.catValue4[i] === relatedCategory) {
      valueCategory = 4;
      return valueCategory;
    }
  }

  for (let i = 0; i < props.catValue5.length; i++) {
    if (props.catValue5[i] === relatedCategory) {
      valueCategory = 5;
      return valueCategory;
    }
  }

  return valueCategory;
};

export const searchRecommendedPosts = (postToRead, posts) => {
  const RecommendedPodcast = [];

  for (let i = 0; i < posts.length; i++) {
    let amountMatchCategories = 0;

    if (posts[i] !== postToRead) {
      for (let j = 0; j < postToRead["category"].length; j++) {
        for (let k = 0; k < posts[i]["category"].length; k++) {
          if (
            postToRead["category"][j]["$"]["nicename"] ===
            posts[i]["category"][k]["$"]["nicename"]
          ) {
            const valueCategory = getValueCategory(
              posts[i]["category"][k]["$"]["nicename"]
            );
            amountMatchCategories += valueCategory;
          }
        }
      }

      RecommendedPodcast.push({
        ...posts[i],
        amountMatchCategories: amountMatchCategories,
        id: i,
      });
    }
  }

  RecommendedPodcast.sort((a, b) => {
    return (
      b.amountMatchCategories - a.amountMatchCategories ||
      new Date(b["pubDate"][0]) - new Date(a["pubDate"][0])
    );
  });

  return RecommendedPodcast;
};

export async function searchLatestPodcast (posts, amountToReturn) {
  const podcast = [];

  podcast.push({
    ...posts[0],
    latest: true,
    id: 0,
  });

  const categories = [
    "the-rolistes-podcast",
    "the-rolistes-present",
    "cafe-rolistes",
    "film-studies",
  ];

  let indexPost = 0;

  for (let i = 0; i < categories.length; i++) {
    indexPost = searchPostBasedOnCategory(posts, categories[i]);

    podcast.push({
      ...posts[indexPost],
      latest: true,
      id: i + 1,
    });
  }

  return podcast;
};
