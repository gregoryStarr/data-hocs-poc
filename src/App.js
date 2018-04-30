import React, { Component } from 'react';
import './App.css';
import {withShowsAndSpinner} from "./Data/withShows";
import {List, ListItem} from '@ustudio/bitbox'

/*
*
* Pretend the the above .Data/withShows resides inside of bitbox... or some other lib
* Use an instance of our List Component
* Wrap our List with our 'withShowsAndSpinner' Hoc
* The HOC decorates our component with data which we map over and render list items on.
*
* */
const Shows = withShowsAndSpinner((data) => {
  return <List>
      {
        Object.keys(data).map((item) => {
          const {title, body} = data[item];
          return <ListItem key={Math.random()}><h3>{title}</h3> - {body}</ListItem>
        })
      }
    </List>
  }
);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Data Hocs POC</h1>
        </header>
        <Shows />
      </div>
    );
  }
}

export default App;
