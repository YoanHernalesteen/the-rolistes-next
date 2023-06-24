const missingIMG = "/images/Logo_Nav_Missing.jpg";

const catValue0 = [
  "london",
  "united-kingdom",
  "british",
  "tabletop-rpg",
  "immigrants",
  "gry-fabularne",
  "roolipelaaja",
  "asztali-szerepjatek",
  "roolipeli",
  "fandoms",
  "joc-de-rol",
  "rollenspiel",
  "rollenspel",
  "jogo-de-interpretacao",
  "jugador-de-rol",
  "juego-de-rol",
  "%ed%85%8c%ec%9d%b4%eb%b8%94%ed%83%91-%eb%a1%a4%ed%94%8c%eb%a0%88%ec%9e%89-%ea%b2%8c%ec%9e%84",
  "gioco-di-ruolo",
  "bordrollespil",
  "rpg-de-mesa",
  "rollspel",
  "stolna-igra-uloga",
  "friki",
  "ropettaja",
  "jeu-de-role",
  "Geek",
  "Expats",
  "%e6%a1%8c%e4%b8%8a%e8%a7%92%e8%89%b2%e6%89%ae%e6%bc%94%e9%81%8a%e6%88%b2",
  "%e3%83%86%e3%83%bc%e3%83%96%e3%83%ab%e3%83%88%e3%83%bc%e3%82%afrpg",
  "pnp",
  "pen-and-paper",
];
const catValue2 = [
  "Nephilim",
  "dungeons_dragons",
  "dungeons_and_dragons",
  "in_nomine_satanis",
  "ins-mv",
  "nibiru",
  "dnd",
  "pathfinder",
  "star_trek",
  "2d20",
  "call_of_cthulhu",
  "cthulhu_dark",
  "13th_age",
  "tales_from_the_loop",
  "symbaroum",
  "aquelarre",
  "guildes-eldorado",
  "star-wars",
  "james-bond",
  "a-song-of-ice-and-fire",
  "shadows-of-esteren",
  "dr-who",
  "cthulhu-britanica",
  "runequest",
  "glorantha",
  "heroquest",
];
const catValue3 = [
  "phoenix-games-club",
  "role-play-haven",
  "free-league-publishing",
  "paizo",
  "rowan-rook-decard",
  "pelgrane-press",
  "fria-ligan",
  "chaosium",
  "modiphius",
  "london-rpg-community",
  "no-more-damsels",
  "monte-cook-games",
  "guilde-des-rolistes-francophones-de-londres",
  "multisim",
  "london-indie-rpg",
  "cubicle-7",
  "the-formal-gamer",
  "critical-role",
  "wotan-games",
  "faraos-sigarer",
  "wizards-of-the-coast",
  "the-grognard-files",
  "supaéro",
];
const catValue4 = [
  "july",
  "lee",
  "gully",
  "mira",
  "lloyd-gyan",
  "grant-howitt",
  "kat",
  "persephelia",
  "bec-hill",
  "sam-webb",
  "garry-harper",
  "virginia-page",
  "dan-marriott",
  "allan-cudicio",
  "zaire-lanier",
  "diogo-nogueira",
  "craig-campbel",
  "pam-punzalan",
  "anjuli-smith",
  "michaël-ghelfi",
  "gaël-sacré",
  "sean-hunt",
  "craig-duffy",
  "mira-manga",
  "dominic-mcdowall",
  "dirk-the-dice",
  "chris-spivey",
  "amit-moshe",
  "guillaume-jentey",
  "kiel-chenier",
  "chris-birch",
  "aimee-carter",
  "andrew-peregrine",
  "jason-bulmahn",
  "jevin-lovecraft",
  "joao-mariano",
  "mikel-matthews",
  "eric-nieudan",
  "dimitris-r-havlidis",
  "janet-forbes",
  "erik-bernhardt",
  "krister-sundelin",
  "rupert-greyling",
  "sara-thompson",
  "paco-g-jaen",
  "helen-gould",
  "willem-van-der-horst",
  "willem",
  "david-scott",
  "ian-cooper",
  "naomi-clarke",
  "robin-d-laws",
  "monte-cook",
  "alessio-cavatore",
  "mattias-johnsson",
  "federico-sohns",
  "james-wallis",
  "scott-brown",
  "ellie-sparrow",
  "richard-kirke",
  "conrad-leaton-gray",
  "amanda-hamon-kunz",
  "kat-cowles",
  "kenneth-hite",
  "fiona-howat",
  "dany-roth",
  "todd-nathanson",
  "brian-wayne-foster",
  "liam-obrien",
  "marisha-ray",
  "sam-riegel",
  "becky-annison",
  "lynne-hardy",
  "cat-tobin",
  "jason-pitre",
  "christopher-taylor",
  "ruty-rutenberg",
  "satine-phoenix",
  "tom-cantwell",
  "michael-ross",
  "cany",
  "kundin",
  "haqadosch",
  "kanard",
  "james",
  "persephelia",
  "federica",
  "nelyhann",
  "porter-williams",
  "oliver-brooks",
  "andrew-dacey",
  "dominic-mcdowall",
  "aora",
  "rae",
  "nala",
  "fouc",
];
const catValue5 = [
  "so-frenchy",
  "paris",
  "barcelona",
  "copenhague",
  "washington-dc",
  "dragonmeet",
  "uk-games-expo",
  "ukge",
  "grogmeet",
  "session-zero-con",
  "cyberconv",
  "florence",
  "italy",
  "portugal",
  "spain",
  "out-at-the-movies",
  "london-rpg-clubs",
  "actual-play",
  "convention",
  "horror-movie",
  "halloween",
  "rpg-club",
  "rolistes-abroad",
  "london-rpg-clubs",
  "food",
  "larp",
];

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

export async function searchPost(posts, pageTitle) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i]["wp:post_name"][0] === pageTitle) {
      return i;
    }
  }
}

export async function searchLatest(posts, amountToReturn) {
  const news = [];
  for (let i = 0; i < amountToReturn; i++) {
    news.push({
      ...posts[i],
      latest: i == 0 ? true : false,
      id: i,
    });
  }

  return news;
}

const searchPostBasedOnCategory = (posts, category) => {
  for (let i = 1; i < posts.length; i++) {
    for (let j = 0; j < posts[i]["category"].length; j++) {
      if (posts[i]["category"][j]["$"]["nicename"] === category) {
        return i;
      }
    }
  }
};

export async function searchPostsBasedOnCategory(posts, category) {
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
}

const getValueCategory = (relatedCategory) => {
  let valueCategory = 1;

  for (let i = 0; i < catValue0.length; i++) {
    if (catValue0[i] === relatedCategory) {
      valueCategory = 0;
      return valueCategory;
    }
  }

  for (let i = 0; i < catValue2.length; i++) {
    if (catValue2[i] === relatedCategory) {
      valueCategory = 2;
      return valueCategory;
    }
  }

  for (let i = 0; i < catValue3.length; i++) {
    if (catValue3[i] === relatedCategory) {
      valueCategory = 3;
      return valueCategory;
    }
  }

  for (let i = 0; i < catValue4.length; i++) {
    if (catValue4[i] === relatedCategory) {
      valueCategory = 4;
      return valueCategory;
    }
  }

  for (let i = 0; i < catValue5.length; i++) {
    if (catValue5[i] === relatedCategory) {
      valueCategory = 5;
      return valueCategory;
    }
  }

  return valueCategory;
};

export async function searchRecommendedPosts(postToRead, posts) {
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
  
  return RecommendedPodcast.slice(0, 2);
}

export async function searchLatestPodcast(posts, amountToReturn) {
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
}
