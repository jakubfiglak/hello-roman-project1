import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { twitterAccounts } from "../../data/twitterAccounts";
import TwittersView from "../TwittersView/TwittersView";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

class Root extends Component {
  state = {
    items: [...twitterAccounts],
    isModalOpen: false
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

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <BrowserRouter>
        <>
          <Header openModalFn={this.openModal} />
          <h1>Hello world</h1>
          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </>
      </BrowserRouter>
    );
  }
}

export default Root;
