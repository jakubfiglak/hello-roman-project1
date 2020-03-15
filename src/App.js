import React, { Component } from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import Form from "./components/Form/Form";
import { twitterAccounts } from "./data/twitterAccounts";

class App extends Component {
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
      items: [...prevState, newItem]
    }));

    e.target.reset();
  };

  render() {
    return (
      <>
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </>
    );
  }
}

export default App;
