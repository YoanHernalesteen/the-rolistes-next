import Layout from "../Layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import RouteChangeTracker from "../tracking/RouteChangeTracker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import postsReducer from "../store/reducers/posts";
import globalReducer from "../store/reducers/global";
import thunk from "redux-thunk";
import App from "../containers/App";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;

const rootReducer = combineReducers({
  posts: postsReducer,
  global: globalReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <App>
        <Layout>
          <RouteChangeTracker />
          <Component {...pageProps} />
        </Layout>
      </App>
    </Provider>
  );
}

export default MyApp;
