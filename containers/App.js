import Layout from "../Layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment, useEffect } from "react";
import * as actions from "../store/actions/index";
import { withRouter } from "next/router";
import RouteChangeTracker from "../tracking/RouteChangeTracker";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function App(props) {
  // const { onFetchPosts, onSetShowPopup } = props;
  const { onSetShowPopup } = props;

  const showPopup = props.showPopup;
  // const showPopup = true;

  // useEffect(() => {
  //   onFetchPosts();
  // }, []);

  return <Fragment>{props.children}</Fragment>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onFetchPosts: () => dispatch(actions.fetchPosts()),
    onSetShowPopup: (showPopup) => dispatch(actions.setShowPopup(showPopup)),
  };
};

const mapStateToProps = (state) => {
  return {
    showPopup: state.global.showPopup,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
