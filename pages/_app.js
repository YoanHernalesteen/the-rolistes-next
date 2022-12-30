import Layout from "../Layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import { useEffect } from "react";
import * as actions from "../store/actions/index";
import { withRouter } from "next/router";
import RouteChangeTracker from "../tracking/RouteChangeTracker";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../store/reducers/posts';
import globalReducer from '../store/reducers/global';
import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;

const rootReducer = combineReducers({
  posts: postsReducer,
  global: globalReducer
})

const store =  createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

function MyApp({ Component, pageProps }) {
  const { onFetchPosts, onSetShowPopup } = props;

  const showPopup = props.showPopup;
  // const showPopup = true;

  useEffect(() => {
    onFetchPosts();
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <RouteChangeTracker />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: () => dispatch(actions.fetchPosts()),
    onSetShowPopup: (showPopup) => dispatch(actions.setShowPopup(showPopup)),
  };
};

const mapStateToProps = (state) => {
  return {
    showPopup: state.global.showPopup,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyApp));
