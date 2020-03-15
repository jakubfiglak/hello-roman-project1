import React from "react";
import "./ListItem.css";

const ListItem = () => (
  <li className="listItem__wrapper">
    <img src="https://i.pravatar.cc/300" alt="" className="listItem__image" />
    <div>
      <h2 className="listItem__name">Dan Abramov</h2>
      <p className="listItem__description">
        Working on @reactjs. The demo guy.
      </p>
      <a href="" className="listItem__button">
        view twitter account
      </a>
    </div>
  </li>
);

export default ListItem;
