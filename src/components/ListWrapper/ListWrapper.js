import React from "react";
import "./ListWrapper.css";
import ListItem from "./ListItem/ListItem";

const ListWrapper = props => (
  <ul className="listWrapper__wrapper">
    {props.items.map(item => (
      <ListItem key={item.name} {...item} />
    ))}
  </ul>
);

export default ListWrapper;
