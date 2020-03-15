import React from "react";
import "./ListItem.css";
import PropTypes from "prop-types";

const ListItem = props => (
  <li className="listItem__wrapper">
    <img src={props.image} alt={props.name} className="listItem__image" />
    <div>
      <h2 className="listItem__name">{props.name}</h2>
      <p className="listItem__description">{props.description}</p>
      <a href={props.twitterLink} className="listItem__button">
        view twitter account
      </a>
    </div>
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired
};

ListItem.defaultProps = {
  description: "One of the React creators"
};

export default ListItem;
