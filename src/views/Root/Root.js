import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { twitterAccounts } from "../../data/twitterAccounts";
import TwittersView from "../TwittersView/TwittersView";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import Header from "../../components/Header/Header";

class Root extends Component {
  state = {
    items: [...twitterAccounts]
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target.name.value,
      twitterLink: e.target.link.value,
      image: e.target.image.value,
      description: e.target.description.value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <h1>Hello world</h1>
          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Root;
