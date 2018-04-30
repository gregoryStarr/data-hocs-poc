import React from 'react';

// These are a part of the recompose toolkit for functional react composition...
import {branch, compose, lifecycle, renderComponent} from 'recompose'

/*
* CallPlatform could be a root parameterized networking component..
* */
export function callPlatform(url /*, more, args, here... */) {
  // Default options are marked with *
  return fetch(url)
  .then(response => response.json()) // parses response to JSON
}

// =========================================================
// Optional Accessories...
// Provide a spinner/loading mechanism if we want...
export const Spinner = () =>
  <div className="Spinner">
    <div className="loader">Loading...</div>
  </div>;

// Used by the spinner
const isLoading = ({ loading }) => loading;

// Provides the Spinner and the boolean function in a branching operation...
export const withSpinnerWhileLoading = branch(
  isLoading,
  renderComponent(Spinner)
);


/*
*  @withShows could be one of many data components
*  used to provide instant, auth optional, data providers to any react component
* */
// =========================================================
// Usage:
// =========================================================
// Provide the shows data, and a loading state
//    to our wrapped component,
//    from a call made by injecting a lifecycle hook
//    into our wrapped component
export const withShows = lifecycle({
  // injected state
  state: { loading: true },
  // injected lifecycle hook
  componentDidMount() {
    callPlatform('https://jsonplaceholder.typicode.com/posts').then((data) =>
      this.setState({ loading: false, ...data }));
  }
});


// =========================================================
// Provides the composed components ...
export const withShowsAndSpinner = compose(
  withShows,
  withSpinnerWhileLoading
);


