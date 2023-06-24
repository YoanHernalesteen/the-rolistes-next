import React, { Fragment, useEffect } from "react";
import Post from "../../components/Post/Post";
import PodcastTile from "../../components/PodcastTile/PodcastTile";
import FullPost from "../../components/FullPost/FullPost";
import AboutPost from "../../components/AboutPost/AboutPost";
import TeamPost from "../../components/TeamPost/TeamPost";
import LatestNews from "../../components/Latest/LatestNews/LatestNews";
import LatestPodcast from "../../components/Latest/LatestPodcast/LatestPodcast";
import RecommendedPosts from "../../components/side/Recommended/RecommendedPosts";
import Ads from "../../components/UI/Ads/Ads";
import RecentPosts from "../../components/side/Recent/RecentPosts";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import Banner from "../../components/UI/Banner/Banner";
import {
  searchPost,
  searchLatest,
  searchPostsBasedOnCategory,
  searchRecommendedPosts,
  searchLatestPodcast,
} from "../../helpers/api-util.js";

const Posts = (props) => {
  let sizePodcast = 1;
  let posts;
  let key = 0;

  useEffect(() => {
    if (props.type === "PODCAST") {
      props.onSetCurrentCategorySize(sizePodcast);
    }
  }, [props.podcast, props.currentCategoryPodcast]);

  switch (props.type) {
    case "NEWS":
      const currentNews = props.news.slice(
        props.indexOfFirstPost,
        props.indexOfLastPost
      );

      posts = currentNews.map((news) => (
        <Post
          key={news.id}
          cover={news.cover}
          excerpt={news.excerpt}
          author={news["dc:creator"][0]}
          title={news["title"]}
          article={news["content:encoded"][0]}
          date={news["pubDate"][0]}
          postName={news["wp:post_name"][0]}
          url={news.url}
        />
      ));
      break;

    case "GONDO":
      const currentParisGondo = props.gondo.slice(
        props.indexOfFirstPost,
        props.indexOfLastPost
      );

      posts = currentParisGondo.map((gondo) => (
        <Post
          key={gondo.id}
          cover={gondo.cover}
          excerpt={gondo.excerpt}
          author={gondo["dc:creator"][0]}
          title={gondo["title"]}
          article={gondo["content:encoded"][0]}
          date={gondo["pubDate"][0]}
          postName={gondo["wp:post_name"][0]}
          url={gondo.url}
        />
      ));
      break;

    case "PODCAST":
      // C EST ICI QUE CA CASSE - VOIR POUR FAIRE LE TRI AILLEURS SUR LA PAGE D ORIGINE
      // const currentPodcast = searchPostsBasedOnCategory(
      //   props.podcast,
      //   props.filterCategory
      // ).slice(props.indexOfFirstPost, props.indexOfLastPost);

      const currentPodcast = props.activePagePodcast.slice(
        props.indexOfFirstPost,
        props.indexOfLastPost
      );     

      sizePodcast = currentPodcast.length;
      posts = currentPodcast.map((podcast) => (
        <PodcastTile
          key={podcast.id}
          cover={podcast.cover}
          date={podcast["pubDate"][0]}
          title={podcast["title"]}
          content={podcast["content:encoded"][0]}
          postName={podcast["wp:post_name"][0]}
          url={podcast.url}
        />
      ));
      break;

    case "INTROGONDO":
      const introGondo = props.introGondo;
      posts = (
        <FullPost
          key={introGondo[0].id}
          cover={introGondo[0].cover}
          author={introGondo[0]["dc:creator"][0]}
          title={introGondo[0]["title"]}
          content={introGondo[0]["content:encoded"][0]}
          date={introGondo[0]["pubDate"][0]}
          type="INTROGONDO"
        />
      );
      break;

    case "ABOUT":
      const about = props.about;
      posts = (
        <AboutPost
          key={about[0].id}
          cover={about[0].cover}
          author={about[0]["dc:creator"][0]}
          title={about[0]["title"]}
          content={about[0]["content:encoded"][0]}
          date={about[0]["pubDate"][0]}
        />
      );
      break;

    case "THETEAM":
      const theTeam = props.theTeam;
      posts = theTeam.map((post) => (
        <TeamPost
          key={post.id}
          cover={post.cover}
          author={post["dc:creator"][0]}
          title={post["title"]}
          content={post["content:encoded"][0]}
          date={post["pubDate"][0]}
        />
      ));
      break;

    case "FULLPOST":
      posts = (
        <FullPost
          key={props.fullPost.id}
          cover={props.fullPost.cover}
          author={props.fullPost["dc:creator"][0]}
          title={props.fullPost["title"]}
          content={props.fullPost["content:encoded"][0]}
          date={props.fullPost["pubDate"][0]}
          type={props.fullPostType}
        />
      );
      break;

    case "LATEST":
      posts = (
        <Fragment>
          <ComingSoon latestComingSoon={props.latestComingSoon} />
          <Banner />
          <LatestPodcast podcast={props.latestPodcast} />
          <Ads />
          <LatestNews news={props.latestNews} />
        </Fragment>
      );
      break;

    case "RECENT":      
      posts = <RecentPosts recentPosts={props.recentPosts} url={props.recentPosts.url} />;
      break;

    case "RECOMMENDED":      
      posts = (
        <RecommendedPosts
          recommendedPosts={props.recommendedPosts}
          url={props.recommendedPosts.url}
        />
      );
      break;
  }

  return <Fragment>{posts}</Fragment>;
};

const mapStateToProps = (state) => {
  return {
    loading: state.posts.loading,
    loaded: state.posts.loaded,
    currentCategoryPodcast: state.posts.currentCategoryPodcast,
    catValue0: state.global.catValue0,
    catValue2: state.global.catValue2,
    catValue3: state.global.catValue3,
    catValue4: state.global.catValue4,
    catValue5: state.global.catValue5,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCurrentCategorySize: (size) =>
      dispatch(actions.setCurrentCategorySize(size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
