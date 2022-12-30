import Layout from "../Layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import { useEffect } from "react";
import * as actions from "../store/actions/index";
import { withRouter } from "next/router";
import RouteChangeTracker from "../tracking/RouteChangeTracker";


function MyApp({ Component, pageProps }) {
  const { onFetchPosts, onSetShowPopup } = props;

  const showPopup = props.showPopup;
  // const showPopup = true;

  useEffect(() => {
    onFetchPosts();
  }, []);

  return (
    <Layout>
      <RouteChangeTracker/>
      <Component {...pageProps} />
    </Layout>
  );
}

const mapDispatchToProps = dispatch => {
  return {
      onFetchPosts: () => dispatch (actions.fetchPosts()),
      onSetShowPopup: (showPopup) => dispatch (actions.setShowPopup(showPopup)) 
  };
};

const mapStateToProps = (state) => {
  return {
      showPopup: state.global.showPopup
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MyApp));
